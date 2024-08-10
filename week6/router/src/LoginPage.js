import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = (props) => {

    const handleLogin = () => {
        console.log('handleLogin from ', from);
        console.log('hanldeLogin Navigate ', navigate);
        // props = method passed by parent component of page
        // Navigate: A ready-to-use method allows code to use routing 
        //      to navigate to next app page is not used directly here.
        //      Parent component cannot call hook useNavigate().
        props.onClick(from, navigate);
    };

    console.log('in LoginPage', props);
    // hooks to get navigate and location objects
    let navigate = useNavigate();
    let location = useLocation();

    let state = location.state;
    let from = state?.from?.pathname ? state.from.pathname : '/';
    let text = '';

    if (from !== '/')
        text = <h3>You must login to visit "{from}"</h3>;

    return (
        <div>
            {text}
            <button onClick={() => handleLogin()}> Login Here </button>
        </div>
    );
    
};

export default LoginPage; 