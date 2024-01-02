import React from 'react';
import { Link } from 'react-router-dom';

function LatestBlogsRight({ id, image, author, date, title, description }) {
    return (
        <div className='blog-left'>
            <div className='image'>
                <img src={image} />
            </div>
            <div className='image-bottom'>
                <div className='image-bottom-left author'>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <h4>{author}</h4>
                </div>
                <div className='image-bottom-right date'>
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    <h4>{new Date(date).toDateString()}</h4>
                </div>
            </div>
            <div className='blog-text'>
                <div className='blog-header-2'>
                    <Link to={`/blog/${id}`}>
                        <h4>{title.slice(0, 38)}...</h4>
                    </Link>
                </div>
                <div className='blog-description'>
                    <p>
                        {description.slice(0, 140)}...
                    </p>
                </div>
                <div className='read-more-btn'>
                    <Link to={`/blog/${id}`}>
                        <a href='' >Read More</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LatestBlogsRight;
