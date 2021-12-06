import {useState} from 'react'

function NewPost(props){

  console.log(props)

  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState('')
  const [title, setTitle] = useState("");

  const newPost = {
    user_id: props.currentUser.id,
    title,
    image,
    body,
    likes: 0
  }

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
    fetch("/posts", configObj)
    .then(res => {
      if (res.ok) {
          res.json().then(post => {
          props.addNewPost(post);
          })
      } else {
          res.json().then(errors => {
          setError(errors.errors)
          })
      }
      })
  };

  return (
    <div className='overlay'>
    <div className="post-thing">
      <h3 className="post-h">Create a new post:</h3>
      <div style={{color: "red"}}>{error}</div>
      <form className="post-form"onSubmit={handleSubmit}>
        <input 
          className="title-input"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="image-input"
          type="text"
          placeholder="image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
          <textarea
            className="body-input"
            placeholder="Say it"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        <div>
          <button disabled={!title || !body || body.length > 10000 } className="post-button" type="submit">Post</button>
        </div>
      </form>
    </div>
    </div>
  );

}

export default NewPost