import {useEffect, useState} from 'react'
import Post from './Post'
import NavBar from './Navbar'
import NewPost from './NewPost'

function TopicPage(props){
  const [data, setData] = useState([])

  const name = window.location.pathname.split('/')[2]

  const id = (props.topics.filter((t) => t.find(el => 
    el.name === name
  )).map((t) => t.find((t) => t.name === name))[0]?.id)
  
  useEffect(() => {
    fetch(`/post_topics/${id}`, {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((data) => {
            setData(data)
          })
        }
      })
  }, [id])

  return(
    <div>
      <NavBar currentUser={props.currentUser} show={props.show} unshow={props.unshow} showForm={props.showForm} />
      <h1> </h1>
      <div className='posts'>
        { data ? data.map( (d) => <Post key={d.post_id} post={d.post} currentUser={props.currentUser}/> ) : null } 
      </div>
      {props.showForm && (
        <NewPost currentUser={props.currentUser} posts={props.posts} unshow={props.unshow} setPosts={props.setPosts} addNewPost={props.addNewPost} showForm={props.showForm} />
      )}
    </div>
  )
}

export default TopicPage