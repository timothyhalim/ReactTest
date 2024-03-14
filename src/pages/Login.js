import React, { useState } from 'react';

function Login({setAuthenticated}) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            ...inputs
        }
        
        if (inputs.username === "test") {
            setAuthenticated(true);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter the password (test):
                <input 
                    type="text" 
                    name="username" 
                    value={inputs.username || ""} 
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Login;