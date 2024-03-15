const initialState = {
    currentUser: null,
    accounts: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
        state.accounts.push(action.email.toLowerCase());
        return state
    case "AUTHENTICATE":
        state.currentUser = action.email.toLowerCase();
        return state
    default:
        return state;
  }
};

export { initialState, 
    reducer}