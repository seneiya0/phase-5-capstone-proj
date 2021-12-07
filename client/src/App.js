import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Homepage from './Homepage';
import TopicPage from './TopicPage';

function App() {

  const [posts, setPosts] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((posts)=> setPosts(posts));
  }, []);

  const topics = (posts.map((post) => post.topics.map(topic => topic)))

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
          })
        }
      })
  }, [])

  const addNewPost = (newPostObj) => {
    setPosts([...posts, newPostObj]);
  };

  function deletePost(id){
    const updatedPosts = posts.filter((post) => post.id !== id )
    setPosts(updatedPosts)
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage currentUser={currentUser} setCurrentUser={setCurrentUser} posts={posts} setPosts={setPosts} addNewPost={addNewPost} deletePost={deletePost} />} ></Route>
        <Route exact path="/login" element={<Login setCurrentUser={setCurrentUser}/>}></Route>
        <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>}></Route>
        <Route exact path="/topics/:name" element={<TopicPage posts={posts} topics={topics} currentUser={currentUser} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
