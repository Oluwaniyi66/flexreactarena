import React from 'react'
import { Link } from 'react-router-dom';


function BlogRecentPost({ id, image, title, date }) {

    // Converting the created_at date string to a more readable human format.
    const formatDate = (db_date) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(db_date).toLocaleDateString(undefined, options) 
    }

    return (
        <div className='recent-post-group'>
            <div className='recent-post-image'>
                <Link to={`/blog/${id}`}>
                    <div className='recent-post-image-main'>
                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_blogs/${image}`} /> 
                    </div>
                </Link>
            </div>
            <div className='recent-post-text'> 
                <div className='recent-post-title'>
                    <Link to={`/blog/${id}`}> 
                        <h5>{title}</h5>
                    </Link>
                </div>
                <div className='recent-post-date'>
                    <p style={{ textAlign: "center" }}><b>{ formatDate(date)}</b></p>
                </div>
            </div>
        </div>
    )
}

export default BlogRecentPost;
