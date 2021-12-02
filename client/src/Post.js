import {MdDeleteForever} from 'react-icons/md'
import {useState} from 'react'
import {Link} from 'react-router-dom'

function Post(props){

  const[likes, setLikes] = useState(`${props.post.likes}`)
  const[liked, setLiked] = useState(true)


function handleLike(){
  setLiked(!liked)
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


function handleDelete(){
  props.deletePost(props.post.id)
  fetch(`/posts/${props.post.id}`, {
      method: 'DELETE'})
}

  return(
    <div key={props.post.id} className='post' >
    <h3 className='user-name'> {props.post.user.username} </h3>
    <div className='img-and-topics'>
    <img src={props.post.image} style={{width: '400px'}} alt=''></img> { props.post.topics ? props.post.topics.map(topic => <li ><Link className = 'post-topic' to={`/topics/${topic.name}`}> {topic.name}  </Link> </li>) : null}
    </div>
    <p className='post-body'> {props.post.body} </p><br/>
    <p className='datetime'> {props.post.created_at.split("T")[0].split("-")[1]}/{props.post.created_at.split("T")[0].split("-")[2]}/{props.post.created_at.split("T")[0].split("-")[0]} </p>
    {props.currentUser && (
          <div className="likes">
              { liked ? <button  onClick={handleLike} className='like-button'> ▲ </button> : <button  onClick={handleLike} className='liked-button'> ▲ </button> }
              <p>{likes}</p>
              {props.currentUser.username === props.post.user.username && (
                  <button className="delete-button" onClick={handleDelete}> <MdDeleteForever/> </button>
              )}
              
          </div>
          )}
  </div>
  )
}

export default Post