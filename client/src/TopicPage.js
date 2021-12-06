import {useEffect, useState} from 'react'
import Post from './Post'
import NavBar from './Navbar'

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
      <NavBar currentUser={props.currentUser} />
      <h1> </h1>
      <div className='posts'>
        {data.map( (d) => <Post key={d.post.id} post={d.post} currentUser={props.currentUser}/>)}
      </div>
    </div>
  )
}

export default TopicPage