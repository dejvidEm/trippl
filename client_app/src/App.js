import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RegisterPage from "./comp/RegisterPage";
import LoginPage from "./comp/LoginPage";
import HomePage from "./comp/HomePage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
