import React, { Component } from 'react'

function SingleBlogLeft({ id, image, author, date, title, content1 }) {


    return (
        <div>
            <div className='blog-card'>
                <div className='blog-image'>
                    <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_blogs/${image}`} />
                </div>
                <div className='blog-image-bottom-section'>
                    <div className='blog-image-bottom left'>
                        <div className='blog-icon'>
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                        </div>
                        <div className='blog-author'>
                            <h4>{author}</h4>
                        </div>
                    </div>
                    <div className='blog-image-bottom right'>
                        <div className='blog-icon'>
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                        </div>
                        <div className='blog-date'>
                            <h4>{date}</h4>
                        </div>
                    </div>
                </div>
                <div className='blog-details'>
                    <div className='blog-title'>
                        <h2>{title}</h2>
                    </div>
                    <div className='blog-description'>
                        <p>
                            {content1}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleBlogLeft;
