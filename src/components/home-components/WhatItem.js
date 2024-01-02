import React from 'react';
import './homstyles.css';


function WhatItem({ image, title, description }) {
    return (
        <div id='what-we-offer'>
            <div className='what-we-offer'>
                <div className='image'>
                    <img src={ image } />
                </div>
                <div className='text'>
                    <div className='what-title'>
                        <h4>{ title }</h4>
                    </div>
                    <div className='what-description'>
                        <p>
                            { description }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatItem;
