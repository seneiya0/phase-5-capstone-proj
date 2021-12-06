import Post from "./Post";

function PostContainer(props){

  const allPosts = props.posts.sort((a,b) => a.likes - b.likes)

  return(
      <div className="posts"> 
        {allPosts.map((post) => <Post key={post.id} post={post} currentUser={props.currentUser} deletePost={props.deletePost} />)}
      </div> 
  )
}

export default PostContainer