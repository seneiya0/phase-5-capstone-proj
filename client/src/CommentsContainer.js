import {useState, useEffect} from 'react'
import Comment from './Comment';
import NewComment from './NewComment'

function CommentsContainer(props){
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`/posts/${props.id}/comments`)
    .then(r => r.json())
    .then(commentData => setComments(commentData))
}, [props.id]);

  const addNewComment = (comment) => {
  setComments([...comments, comment])
  }

  function deleteComments(id){
    const updatedComments = comments.filter((comment) => comment.id !== id )
    setComments(updatedComments)
  }

  return (
    <div className="comments" >
      <div><strong>
        {comments.length} {comments.length === 1 ? 'reply' : 'replies'} 
      </strong></div>
      {comments.map(comment => <Comment
        comment={comment}
        key={comment.id}
        id={comment.id}
        currentUser={props.currentUser}
        deleteComments={deleteComments}
      />)}
      {props.currentUser && (
        <div>
          <NewComment addNewComment={addNewComment} id={props.id} currentUser={props.currentUser} />
        </div>
      )}
    </div>
  )
}

export default CommentsContainer