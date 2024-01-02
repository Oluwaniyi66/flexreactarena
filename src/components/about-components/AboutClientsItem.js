import React from 'react'

function AboutClientsItem({ name, biography, comment }) {
    return (
        <>
            <div className='about-client-images'>
                <div className='about-client-images-item'>
                    <img src='/assets/about-images/aboutus.png' />
                </div>
                <div className='about-client-images-item middle'>
                    <img src='/assets/about-images/aboutus3.jpg' />
                </div>
                <div className='about-client-images-item'>
                    <img src='/assets/about-images/aboutus6.webp' />
                </div>
            </div>
            <div className='about-client-details'>
                <div className='about-client-name'>
                    <h4>{ name }</h4>
                </div>
                <div className='about-client-biography'>
                    <p>{ biography }</p>
                </div>
            </div>
            <div className='about-client-comment'>
                <p>
                    { comment }
                </p>
            </div>
        </>
    )
}

export default AboutClientsItem;
