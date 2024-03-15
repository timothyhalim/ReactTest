import React from "react";

const CustomContext = React.createContext();

const initialState = {
    currentUser: null,
    accounts: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                accounts : state.accounts.concat([action.email.toLowerCase()]),
                currentUser : action.email.toLowerCase(),
            }
        case "AUTHENTICATE":
            return {
                ...state,
                currentUser : action.email.toLowerCase(),
            }
        default:
            return state;
    }
};

const CustomContextProvider = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <CustomContext.Provider value={[state, dispatch]}>
            {props.children}
        </CustomContext.Provider>
    );
};

export {CustomContext, CustomContextProvider}