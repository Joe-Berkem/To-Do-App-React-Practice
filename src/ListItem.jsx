import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
    
    render() {
        let { children, style} = this.props;

    return (
        <li className="listItem" style={ {backgroundColour: this.props.style.backgroundColour} }>
            <p className="listItemText">{ children }</p>
        </li>
    );
    }
}

export default ListItem;

