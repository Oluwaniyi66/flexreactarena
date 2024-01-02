import React from 'react';
import { Link } from 'react-router-dom';



function BlogLeftCard({id, image, author, date, title, description}) { 

    // Converting the created_at date string to a more readable human format.
    const formatDate = (db_date) => {
        return new Date(db_date).toDateString()  
    }

    return (
        <div className='blog-card'> 
            <div className='blog-image'>
                <Link to={`/blog/${id}`}>
                    <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_blogs/${image}`} />
                </Link>
            </div>
            <div className='blog-image-bottom-section'> 
                <div className='blog-image-bottom left'>
                    <div className='blog-icon'> 
                        <i class="fa fa-pencil" aria-hidden="true"></i> 
                    </div>
                    <div className='blog-author'> 
                        <h4>{ author }</h4>
                    </div>
                </div> 
                <div className='blog-image-bottom right'>
                    <div className='blog-icon'>
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                    </div>
                    <div className='blog-date'>
                        <h4>{ formatDate(date) }</h4>
                    </div>
                </div>
            </div>
            <div className='blog-details'>
                <div className='blog-title'>
                    <Link to={`/blog/${id}`}><h2>{ title }</h2></Link> 
                </div> 
                <div className='blog-description'>
                    <p>
                        { description }
                    </p>
                </div>
                <div className='blog-btn'>
                    <Link to={`/blog/${id}`}><a>Read More..</a></Link>
                </div>
            </div>
        </div>
    )
}

export default BlogLeftCard;
