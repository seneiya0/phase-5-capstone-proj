import NavBar from "./Navbar"
import { useState } from "react";
import PostContainer from "./PostContainer";
import NewPost from "./NewPost";
import Topics from "./Topics";

function Homepage(props){
  const [showForm, setShowForm] = useState('false')


  console.log(props.posts)

  function show(){
    setShowForm('true')
}

  function unshow(){
    setShowForm('false')
  }

    return (
      <div id="background">
        <NavBar setPosts = {props.setPosts} show={show} setCurrentUser={props.setCurrentUser} unshow={unshow} currentUser={props.currentUser} />
        {showForm === 'false' && (
        <div className='home'>
        <PostContainer deletePost={props.deletePost} currentUser={props.currentUser} posts={props.posts} />
        <Topics />
        </div>
        )}
        {showForm === 'true' && (
          <NewPost currentUser={props.currentUser} posts={props.posts} unshow={unshow} setPosts={props.setPosts} addNewPost={props.addNewPost} />
        )}
      </div>
    );
}

export default Homepage