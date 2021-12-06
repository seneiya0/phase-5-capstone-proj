import {useState} from 'react'
import { MdAddComment } from 'react-icons/md';
import {AiOutlineEnter} from 'react-icons/ai'

function NewComment(props){
  const [body, setBody] = useState("");
  const [commentButton, setCommentButton] = useState(false)

  const newCommentObj = {
      user_id: props.currentUser.id,
      body: body,
      post_id: props.id
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/comments", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCommentObj)
    })
    .then(r => r.json())
    .then(comment => 
        props.addNewComment(comment)
    )
    setCommentButton(!commentButton)
    setBody("")
}

  return (
    <div>
      { commentButton && (
      <div className='new-comment-form'>
        <form onSubmit={handleSubmit}>
          <input
            id="comment"
            value={body}
            placeholder="comment:"
            onChange={(e) => setBody(e.target.value)}
            className="addComment"
          />
        </form>
        <div button-and-count>
          <span className='count'>{ 200 - body.length }</span> 
          <button disabled={!body || body.length > 200}className="create" onClick={handleSubmit}> <AiOutlineEnter/> </button>
        </div>
      </div>)}
      {!commentButton && (
        <h1 onClick={() => setCommentButton(!commentButton)} className='add-comment-button'> <MdAddComment /> </h1>
      )}

    </div>
  )
}

export default NewComment 

