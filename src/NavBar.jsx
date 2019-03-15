import React from "react";
import './App.css';
import { Link } from "react-router-dom";

const NavBar = () => (
  <ul className="nav">
    <li className="today-theme">
      <Link to="/today">Today</Link>
    </li>
    <li className="soon-theme">
      <Link to="/soon">Soon</Link>
    </li>
    <li className="future-theme">
      <Link to="/in-the-future">In The Future</Link>
    </li>
  </ul>
);

export default NavBar;