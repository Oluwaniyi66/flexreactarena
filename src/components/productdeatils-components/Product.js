import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './productdetailstyles.css';

function Product({ id, image, title, price }) {

    return (
        <div className='related-card' id='related-card'>
            <Link to={`/product-details/${id}`}>
                <div className='image'>
                    <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${image}`} />
                </div>
            </Link>
            <div className='related-details'>
                <div className='title'>
                    <h2>{title}</h2>
                </div>
                <div className='rating'>
                    <div className='icons'>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className='price'>
                <h4>#{price}</h4>
            </div>
        </div>
    )
}

export default Product;
