function Comment(props){

  return (
    <div className="comment">
      <p className="comment-user"><strong>{props.comment.user.username}</strong></p>
      <p> {props.comment.body} </p>
    </div>
  )
}

export default Comment