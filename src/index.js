import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";

import CustomContext from './context';
import {reducer, initialState} from './reducer';

const App = () => {
  const [update, forceUpdate] = React.useState("")
  const [userState, usersDispatch ] = React.useReducer(reducer, initialState);

  const providerState = {userState, usersDispatch};

  console.log(userState.currentUser);

  if (userState.currentUser) {
    return (
      <BrowserRouter>
        <CustomContext.Provider value={providerState} >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </CustomContext.Provider>
      </BrowserRouter>
    )
  } else {
    return <Login callback={forceUpdate}/>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);