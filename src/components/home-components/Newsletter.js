import React from 'react';
import { Link } from 'react-router-dom';

function Newsletter() {
    return (
        <div id='news-letter'>
            <div className='container'>
                <div className='inner'>
                    <div className='text'>
                        <h2>Get Leatest Update By Subscribing 
                            To 0ur Newslater
                        </h2>
                    </div>
                    <div className='btn'>
                        <Link to="/shop">
                            <a>SHOP NOW</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;
