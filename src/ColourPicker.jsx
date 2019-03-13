import React from 'react';
import './App.css';



const ColourPicker = ( {onPrimaryChange,onSecondaryChange, primary, secondary} ) => {
    
    return (
    <div className="colour-picker-container">
        <div>
            <select
                className="colorInput" 
                type="color" 
                id="primary" 
                name="primary"
                value={primary}
                onChange={onPrimaryChange}
            >
                <option value="#8dc4e8">Blue</option>
                <option value="#b841f4">Purple</option>
                <option value="#f44242">Red</option>
                <option value="#41f4a0">Green</option>
                <option value="#f4be41">Yellow</option>
            </select>
        </div>

        <div>
            <select 
                className="colorInput" 
                type="color" 
                id="secondary" 
                name="secondary"
                value={secondary} 
                onChange={onSecondaryChange}
            >
                <option value="#8dc4e8">Blue</option>
                <option value="#b841f4">Purple</option>
                <option value="#f44242">Red</option>
                <option value="#41f4a0">Green</option>
                <option value="#f4be41">Yellow</option>
            </select>
        </div>
    </div>
)};

export default ColourPicker;