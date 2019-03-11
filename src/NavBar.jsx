import React from "react";
import './App.css';
import { Link } from "react-router-dom";

const NavBar = () => (
  <ul className="nav">
    <li>
      <Link to="/">Today</Link>
    </li>
    <li>
      <Link to="/soon">Soon</Link>
    </li>
    <li>
      <Link to="/in-the-future">In The Future</Link>
    </li>
  </ul>
);

export default NavBar;