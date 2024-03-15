import React  from 'react';
import {CustomContext} from '../context';


const Contact = () => {
    const [userState, usersDispatch ] = React.useContext(CustomContext);

    return (
        <>
            <h1>Contact Me</h1>
            <p>Email : {userState.currentUser}</p>
        </>
    )
};

export default Contact;
  