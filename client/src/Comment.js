import {TiDelete} from 'react-icons/ti'

function Comment(props){

  function handleDelete(){
    props.deleteComments(props.comment.id)
    fetch(`/comments/${props.comment.id}`, {
    method: 'DELETE'})
  }

  return (
    <div className="comment">
      <p className="comment-user"><strong>{props.comment.user.username}</strong></p>
      <p> {props.comment.body} </p>
      {props.currentUser && (
        props.currentUser.username === props.comment.user.username && (
        <button className="delete-comment" onClick={handleDelete}> <TiDelete /></button>
        )
      )}
      {props.currentUser && (
        props.currentUser.username === 'admin' && (
        <button className="delete-comment" onClick={handleDelete}> <TiDelete /></button>
        )
      )}
    </div>
  )
}

export default Comment