import React, {useState} from "react";
import DisplayPost from "./components/post";
import AddPostForm from "./components/create_post_form";
import Custombuttons from "./components/post";
import DislikeButton from "./components/dislikebutton";


function App() {
  const [entries, setPost] = useState([{username: "Rashaad", body: 'I love coding!'},{username: "Katie", body: 'Im bored in the house.'}])
  function addNewPost(entry){
    let tempPost = [...entries, entry];
    setPost(tempPost);
  }
  return (
    <div className="App">
      <AddPostForm addNewPostProperty={addNewPost} />
      <DisplayPost parentEntries = {entries} />
      <Custombuttons parentEntries = {entries} />
      <Custombuttons message="Like"/>
      <DislikeButton message="Dislike"/>
    </div>
  );
}
 

export default App;
