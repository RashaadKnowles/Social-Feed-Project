const DisplayPost = (props) => {
    return (
        <div>
        {props.parentEntries.map((post, index) => {
            return(
           <div>
        <h3>{post.username}</h3>
        <p>{post.body}</p>
        <button>{post.like}</button>
        <button>{post.dislike}</button>
        </div>
        )})
        }
        </div>
    )      
        
}
export default DisplayPost;

