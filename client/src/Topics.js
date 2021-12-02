import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Topics(){
  const [topics, setTopics] = useState([])



  useEffect(() => {
    fetch("/topics")
      .then((r) => r.json())
      .then((topics)=> setTopics(topics));
  }, []);


  return(
    <div className='topics'>
    <h2>topics</h2>
    {topics.map((topic) => <NavLink to={`/topics/${topic.name}`} className='topic-button'> {topic.name}</NavLink>)}
    </div>
  )
}

export default Topics