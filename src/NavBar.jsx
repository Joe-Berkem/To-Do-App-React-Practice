import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <ul class="nav">
    <li >
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