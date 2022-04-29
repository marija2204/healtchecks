import { useState} from "react";
import './TimeOfChange.css';



const TimeOfChange = (props) => {
    const[time, setTime] = useState(props.timeOut);
   
    const secondHandler = (event) => {
        event.preventDefault();
        props.setTimeout(time);
    };
    
    const onChangeTime = (event) => {
        setTime(event.target.value);
    }
    return (
            <div>
                <form onSubmit={secondHandler}> 
                <span className="span">Refresh every: </span>
                <input className="input" type="number" min="1" max="60"value={time} onChange={onChangeTime}></input>
                <span className="span">  seconds!  </span>
                <button className="button" type="submit">Change</button>
                </form>
            </div>
    );
};


export default TimeOfChange;