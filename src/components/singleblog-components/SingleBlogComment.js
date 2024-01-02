import React from 'react';

function SingleBlogComment({ id, image, author, date, comment }) {

    // Converting the created_at date string to a more readable human format.
    const formatDate = (db_date) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(db_date).toLocaleDateString(undefined, options) 
    }

    return (
        <div className='blog-single-comment'>
            <div className='blog-comment-image'>
                <div className='blog-comment-image-main mt-4'>
                    <img src="/assets/blog-images/blog3.png" />
                </div>
            </div>
            <div className='blog-comment-text'>
                <div className='blog-comment-author-date'>
                    <div className='blog-comment-author'>
                        <h4>{author}</h4>
                    </div>
                    <div className='blog-comment-date'>
                        <h6>{formatDate(date)}</h6>
                    </div>
                </div>
                <div className='blog-commentary'>
                    <p>
                        {comment}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogComment;
