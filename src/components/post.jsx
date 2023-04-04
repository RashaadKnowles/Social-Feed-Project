import {useState} from "react";
import "./custombutton.css"

const likebutton = (props) => {
    const [buttonClass,setButtonClass] = useState('inactive');
}

function handleClick() {
    if (buttonClass === "inactive"){
        setButtonClass('likeactive');
    }
    else{
        setButtonClass('inactive');
    }
     return (
        <div>
            <button className={buttonClass} onClick={handleClick}>{props.message} </button>
        </div>
    )
}
   
export default likebutton