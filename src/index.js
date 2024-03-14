import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isAuthenticated : false
    }
  }
  
  setAuthenticated = (value) => {
    this.setState({
      isAuthenticated: value
    });
  }

  render() {
    if (this.state.isAuthenticated) {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout isAuthenticated={this.state.isAuthenticated}/>}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )
    } else {
      return <Login setAuthenticated={this.setAuthenticated}/>
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);