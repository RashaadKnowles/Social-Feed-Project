import React, {useState} from "react";
import DisplayPost from "./components/post";




function App() {
  const [entries, setPost] = useState([{username: "Rashaad", body: 'I love coding!'},{username: "Katie", body: 'Im bored in the house.'}])
  function addNewPost(entry){
    let tempPost = [...entries, entry];
    setPost(tempPost);
  }
  return (
    <div className="App">
      <DisplayPost parentEntries = {entries} />
    </div>
  );
}

export default App;
