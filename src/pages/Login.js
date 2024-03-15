import React, { useState } from 'react';
import {reducer, initialState} from '../reducer';

function Login({callback}) {
    const [inputs, setInputs] = useState({});

    const [userState, usersDispatch ] = React.useReducer(reducer, initialState);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);

        // Check account
        if (!userState.accounts.includes(inputs.email.toLowerCase())) {
            usersDispatch({
                type:"REGISTER", 
                email: inputs.email,
            });
        }

        usersDispatch({
            type:"AUTHENTICATE", 
            email: inputs.email,
        });

        callback(Date());
    }

    return (
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
    )
}

export default Login;