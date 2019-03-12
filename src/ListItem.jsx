import React from 'react';
import './App.css';


const ListItem = ({ children }) => (
    <li className="listItem">
        <p className="listItemText">{ children }</p>
    </li>
);

export default ListItem;
