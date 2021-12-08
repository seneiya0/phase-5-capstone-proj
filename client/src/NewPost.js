import {useState, useEffect} from 'react'
import AddTopicButton from './AddTopicButton'

function NewPost(props){

  const [image, setImage] = useState(null)
  const [body, setBody] = useState("")
  const [error, setError] = useState('')
  const [title, setTitle] = useState("")
  const [topics, setTopics] = useState([])
  const [postTopics, setPostTopics] = useState('')
  const [addedTopics, setAddedTopics] = useState('')


  const newPost = {
    user_id: props.currentUser.id,
    title,
    image,
    body,
    likes: 0,
    postTopics
  }
  
  useEffect(() => {
    fetch("/topics")
      .then((r) => r.json())
      .then((topics)=> setTopics(topics));
  }, []);

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

  function handleTopicInput(topic){
    setPostTopics((old) => old + ',' + topic.id)
    setAddedTopics((n) => n + ',' + topic.name)
  }

  console.log(addedTopics)

  return (
    <div className='overlay'>
    <div className="post-thing">
      <h3 className="post-h">Create a new post:</h3>
      <div style={{color: "red"}}>{error}</div>
      <form className="post-form"onSubmit={handleSubmit}>
        <input 
          className="title-input"
          type="text"
          placeholder="  title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="image-input"
          type="text"
          placeholder="  image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
          <textarea
            className="body-input"
            placeholder="Say it"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          topics:
          <div>
            {addedTopics.split(',').map((topic) => <span> {topic} </span>)}
          </div>
        <div>
        <button disabled={!title || body.length > 10000 } className="post-button" type="submit">Post</button>
        </div>
      </form>
      add topics:
      <div className="topic-buttons" >
        {topics.map((topic) => <AddTopicButton topic={topic} handleTopicInput={handleTopicInput} postTopics={postTopics} />)}
      </div>
    </div>
    </div>
  );

}

export default NewPost