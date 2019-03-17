import React from "react";
import './App.css';
import { Link } from "react-router-dom";

const NavBar = () => (
  <ul className="nav">
    <li className="today-theme">
      <Link className="navtoday" to="/today">Today</Link>
    </li>
    <li className="soon-theme">
      <Link className="navsoon" to="/soon">Soon</Link>
    </li>
    <li className="future-theme">
      <Link className="navfuture" to="/in-the-future">In The Future</Link>
    </li>
  </ul>
);

export default NavBar;