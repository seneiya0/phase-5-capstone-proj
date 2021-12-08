import {MdDeleteForever} from 'react-icons/md'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

function Post({currentUser, post, deletePost}){

  const[likes, setLikes] = useState(`${post?.likes}`)
  const[liked, setLiked] = useState(true)
  const[downvoted, setDownvoted] = useState(true)

  function handleLike(){
    setLiked(!liked)
    setDownvoted(true)
    if (liked){
      fetch(`/posts/${post.id}/like`, {
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
      fetch(`/posts/${post.id}/unlike`, {
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
    fetch(`/posts/${post.id}/unlike`, {
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
      fetch(`/posts/${post.id}/like`, {
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
    deletePost(post.id)
    fetch(`/posts/${post.id}`, {
      method: 'DELETE'})
  }

  return post ? (
    <div key={post.id} className='post' >
      <div className="img-and-name">
        <img src={post.user.image} className="post-user-img" style={{width: '30px', height:'30px', objectFit:"cover" }} alt=''></img>
        <h4 className='user-name'> {post.user.username} </h4>
      </div>
      <h1 className="post-title"> {post.title} </h1>
      {post.image !== null ? 
      <div className='img-and-topics'>
        <img src={post.image} style={{width: '400px'}} alt=''></img> {post.topics ? post.topics.map(topic => <li key={topic.id}><Link className = 'post-topic' to={`/topics/${topic.name}`}> {topic.name} </Link> </li>) : null}
      </div> : null}
      {post.image === null ? 
    <div className='body-and-topics'>
      <p className='post-body' style={{width: '80%'}}> {post.body} </p> {post.topics ? post.topics.map(topic => <li key={topic.id} ><Link className = 'post-topic' to={`/topics/${topic.name}`}> {topic.name} </Link> </li>) : null} 
    </div> 
    : <p className='post-body'> {post.body}  </p> }

    <p className='datetime'> {post.created_at.split("T")[0].split("-")[1]}/{post.created_at.split("T")[0].split("-")[2]}/{post.created_at.split("T")[0].split("-")[0]} </p>
    
    {currentUser === null && (
      <p><strong>{post.likes}</strong> likes</p>
    )}
    
    {currentUser && (
      <div className="likes">
        { liked ? <button  onClick={handleLike} className='like-button'> ▲ </button> : <button  onClick={handleLike} className='liked-button'> ▲ </button> }
          <p>{likes}</p>
        { downvoted ? <button className='downvote' onClick={downvote}> ▼ </button> : <button className='downvoted' onClick={downvote}> ▼ </button>}
      {currentUser.username === post.user.username && currentUser.username !== 'admin' && (
        <button className="delete-button" onClick={handleDelete}> <MdDeleteForever/> </button>
      )}
      {currentUser.username === 'admin' && (
        <button className="delete-button" onClick={handleDelete}> <MdDeleteForever/> </button>
      )}
      </div>
      
    )}
      <CommentsContainer id={post.id} currentUser={currentUser} />
    </div>
    
  ) : null
} 

export default Post