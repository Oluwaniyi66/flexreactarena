import React from 'react';

function FaqLeft({ title, details }) {
    
    return (
        <div className='faq-left-box'>
            <div className='faq-left-subheader'>
                <h4>{ title }</h4>
            </div> 
            <div className='faq-left-details'>
                <p>
                    { details }
                </p>
            </div>
        </div>
    )
}

export default FaqLeft;
