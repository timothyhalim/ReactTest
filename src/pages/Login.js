import React, { useState } from 'react';
import {CustomContext} from '../context';

function Login({callback}) {
    const [inputs, setInputs] = useState({});

    const [userState, usersDispatch ] = React.useContext(CustomContext);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputs.email) {
            // Check account
            if (!userState.accounts.includes(inputs.email.toLowerCase())) {
                usersDispatch({
                    type:"REGISTER", 
                    email: inputs.email,
                });
            } else {
                usersDispatch({
                    type:"AUTHENTICATE", 
                    email: inputs.email,
                });
            };
            callback(Date());
        }
    }

    return (
        <>
        <h1>{userState.currentUser}</h1>
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>Email:</label>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                name="email" 
                                value={inputs.email || ""} 
                                onChange={handleChange}
                                />
                        </td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" />
        </form>
        </>
    )
}

export default Login;