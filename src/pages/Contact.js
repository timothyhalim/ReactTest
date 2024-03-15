import React  from 'react';
import {reducer, initialState} from '../reducer';


const Contact = () => {
    const [userState, usersDispatch ] = React.useReducer(reducer, initialState);
  
    return (
        <>
            <h1>Contact Me</h1>
            <p>Email : {userState.currentUser}</p>
        </>
    )
};

export default Contact;
  