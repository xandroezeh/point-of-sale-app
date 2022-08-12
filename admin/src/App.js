import Navbar from "./components/navbar/Navbar";
import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import './app.css';
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<UserList/>} />
            <Route path="/users/:id" element={<User/>} />
            
        </Routes>
      </div>    
    </Router>
  );
}

export default App;
