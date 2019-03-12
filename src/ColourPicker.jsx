import React from 'react';
import './App.css';


const ColourPicker = ( onChange ) => (
    <div className="colour-picker-container">
        <div>
            <input 
            className="colorInput" 
            type="color" 
            id="primary" 
            name="primary"
            value="#8dc4e8"
            onChange={onChange}
            />
        </div>

        <div>
            <input 
            className="colorInput" 
            type="color" 
            id="secondary" 
            name="secondary"
            value="#323234" 
            onChange={onChange}/>
        </div>
    </div>
);

export default ColourPicker;