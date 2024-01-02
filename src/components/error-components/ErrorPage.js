import React from 'react';
import { Link } from 'react-router-dom';
import './errorstyles.css';

function ErrorPage() {
    return (
        <div id='error'>
            <div className='container'>
                <div className='error-box'>
                    <div className='error-image'>
                        <img src='/assets/error-images/error3.webp' />
                    </div>
                    <div className='error-text'>
                        <h4>Oops!!! The page you requested was not found.</h4>
                    </div>
                </div>
                <div className='error-btn'>
                    <Link to="/home" ><a >Back Home</a></Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;
