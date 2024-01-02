import React from 'react';

function AboutFeatureCard({image, title, description}) {
    return (
        <div className='about-features-card'>
            <div className='about-image'>
                <img src={ image } />
            </div>
            <div className='about-title'>
                <h4>{ title }</h4>
            </div>
            <div className='about-description'>
                <p>
                    { description } 
                </p>
            </div>
        </div>
    )
}

export default AboutFeatureCard;
