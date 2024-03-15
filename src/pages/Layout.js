import React  from 'react';
import { Outlet, Link } from "react-router-dom";
import {reducer, initialState} from '../reducer';

const Layout = () => {
  const [userState, usersDispatch ] = React.useReducer(reducer, initialState);
  
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome {userState.currentUser}</h1>

      <Outlet />
    </>
  )
};

export default Layout;
