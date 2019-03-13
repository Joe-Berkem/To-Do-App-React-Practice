import React from 'react';
import './App.css';


const ColourPicker = ( onPrimaryChange,onSecondaryChange, primary, secondary ) => (
    <div className="colour-picker-container">
        <div>
            <input 
            className="colorInput" 
            type="color" 
            id="primary" 
            name="primary"
            value={primary}
            onChange={onPrimaryChange}
            />
        </div>

        <div>
            <input 
            className="colorInput" 
            type="color" 
            id="secondary" 
            name="secondary"
            value={secondary} 
            onChange={onSecondaryChange}/>
        </div>
    </div>
);

export default ColourPicker;