import React from 'react';
import './App.css';


const Header = ({ children, primary }) => (
    <header className="App-header">
        <h1 className="App-header">{ children }</h1>
    </header>
);




export default Header;
