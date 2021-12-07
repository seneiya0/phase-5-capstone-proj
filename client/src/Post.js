import {MdDeleteForever} from 'react-icons/md'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

function Post(props){

  const[likes, setLikes] = useState(`${props.post.likes}`)
  const[liked, setLiked] = useState(true)
  const[downvoted, setDownvoted] = useState(true)

function handleLike(){
  setLiked(!liked)
  setDownvoted(true)
  if (liked){
  fetch(`/posts/${props.post.id}/like`, {
      method: 'PATCH',
      body: JSON.stringify({
      completed: true
      }),
      headers: {
      "Content-type": "application/json; charset=UTF-8"
      }
      })
      .then(response => response.json())
      .then(json => setLikes(json.likes))
  }else {
  fetch(`/posts/${props.post.id}/unlike`, {
      method: 'PATCH',
      body: JSON.stringify({
      completed: true
      }),
      headers: {
      "Content-type": "application/json; charset=UTF-8"
      }
      })
      .then(response => response.json())
      .then(json => setLikes(json.likes))
  }
}

function downvote(){
  setLiked(true)
  setDownvoted(!downvoted)
  if(downvoted){
  fetch(`/posts/${props.post.id}/unlike`, {
    method: 'PATCH',
    body: JSON.stringify({
    completed: true
    }),
    headers: {
    "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    .then(json => setLikes(json.likes))
  } else {
    fetch(`/posts/${props.post.id}/like`, {
      method: 'PATCH',
      body: JSON.stringify({
      completed: true
      }),
      headers: {
      "Content-type": "application/json; charset=UTF-8"
      }
      })
      .then(response => response.json())
      .then(json => setLikes(json.likes))
  }
}

function handleDelete(){
  props.deletePost(props.post.id)
  fetch(`/posts/${props.post.id}`, {
      method: 'DELETE'})
}

  return(
    <div key={props.post.id} className='post' >
      <h4 className='user-name'> {props.post.user.username} </h4>
      <h1> {props.post.title} </h1>
      {props.post.image !== null ? 
      <div className='img-and-topics'>
        <img src={props.post.image} style={{width: '400px'}} alt=''></img> {props.post.topics ? props.post.topics.map(topic => <li key={topic.id}><Link className = 'post-topic' to={`/topics/${topic.name}`}> {topic.name} </Link> </li>) : null}
      </div> : null}
      {props.post.image === null ? 
    <div className='body-and-topics'>
      <p className='post-body' style={{width: '80%'}}> {props.post.body} </p> {props.post.topics ? props.post.topics.map(topic => <li key={topic.id} ><Link className = 'post-topic' to={`/topics/${topic.name}`}> {topic.name} </Link> </li>) : null} 
    </div> 
    : <p className='post-body'> {props.post.body}  </p> }

    <p className='datetime'> {props.post.created_at.split("T")[0].split("-")[1]}/{props.post.created_at.split("T")[0].split("-")[2]}/{props.post.created_at.split("T")[0].split("-")[0]} </p>
    
    {props.currentUser === null && (
      <p><strong>{props.post.likes}</strong> likes</p>
    )}
    
    {props.currentUser && (
      <div className="likes">
        { liked ? <button  onClick={handleLike} className='like-button'> ▲ </button> : <button  onClick={handleLike} className='liked-button'> ▲ </button> }
          <p>{likes}</p>
        { downvoted ? <button className='downvote' onClick={downvote}> ▼ </button> : <button className='downvoted' onClick={downvote}> ▼ </button>}
      {props.currentUser.username === props.post.user.username && (
        <button className="delete-button" onClick={handleDelete}> <MdDeleteForever/> </button>
      )}
      </div>
      
    )}
      <CommentsContainer id={props.post.id} currentUser={props.currentUser} />
    </div>
    
  )
}

export default Post