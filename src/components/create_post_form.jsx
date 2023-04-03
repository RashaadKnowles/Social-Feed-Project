import React, { useState } from 'react';

const AddPostForm = (props) => {
    const [username, setUsername] = useState('');
    const [body, setBody] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            username: username,
            body: body
        };
        console.log(newEntry)
        props.addNewPostProperty(newEntry)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>username</label>
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            <label>body</label>
            <input type="text" value={body} onChange={(event) => setBody(event.target.value)} />
            <button type= 'like' >Add</button>
            <button type= 'dislike' >Add</button>
        </form>
     );
}
 
export default AddPostForm;

