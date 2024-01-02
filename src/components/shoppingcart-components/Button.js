import React from 'react';
import './cartstyles.css';

function Button({ text, handleClear }) {
    return (
        <div>
            <div className='update'>
                <div className='btn'>
                    <button onClick={handleClear}>{ text }</button>
                </div>
            </div>
        </div>
    )
}

export default Button;
