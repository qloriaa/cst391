import React, { useState} from "react";
import './Counter.css';

const Counter = (props) => {
    // - If states are independent, they will be handled by their own Hooks
    // - Updating a state sets off a chain of events that results in the
    //      component and its child components being rendered again.

    // useState Hook to maintain click count 
    const [clicks, setClicks] = useState(0);
    // useState Hook to maintain the keystrokes in the message input control
    const [message, setMessage] = useState(props.title);

    const addOneClick = () => {
        // change state
        setClicks(clicks +1);
    };

    const handleNewMessage = (event) => {
        //change state
        setMessage(event.target.value);
    };

    return (
        <div className="one-box">
            <h1>{props.title}</h1>
            <h2>clicks: {clicks}</h2>
            <h3>message: {message}</h3>
            <input
                type='text'
                value={message}
                onChange={handleNewMessage}
            />
            <button onClick={addOneClick}>Click Me</button>
        </div>
    );
};

export default Counter;