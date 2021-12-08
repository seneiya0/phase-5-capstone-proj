

function AddTopicButton(props){

  return(
    <div  >
      {!props.postTopics.includes(props.topic.id) ? 
      <button className="add-topic-button" onClick={() => props.handleTopicInput(props.topic)}> + {props.topic.name} </button> : null }
    </div>
  )
}

export default AddTopicButton