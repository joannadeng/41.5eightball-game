import React, {useState} from "react";
import './EightBall.css';


const EightBall = (props) => {
    const answers = props.arr;
      const [message, setMessage] = useState("Think of a Question");
      const [color,setColor] = useState('black');
      
      const newMessage =() => {
        const randomNum = Math.floor(Math.random() * answers.length)
        setMessage(answers[randomNum].msg)
        setColor(answers[randomNum].color)
      }
      const reset = () => {
        setMessage("Think of a Question")
        setColor("black");
      }


    return (
        <div className="EightBall">
            
            <button 
            className="EightBall-button"  
            style = {{backgroundColor: color}}
            onClick = {newMessage}>{message}
            </button>

            <button className="EightBall-reset" onClick={reset}>reset</button>
            
        </div>
    )
}

export default EightBall;