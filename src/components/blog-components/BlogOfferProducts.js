import React from 'react';
import { Link } from 'react-router-dom';


function BlogOfferProducts({ id, image, name, price, discount }) {
    return (
        <div className='offer-product-item'>
            <div className='offer-product-image'>
            <Link to={`/product-details/${id}`}>
                    <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${image}`} />
                </Link>
            </div> 
            <div className='offer-product-text'>
                <div className='offer-product-title'>
                    <Link to={`/product-details/${id}`}>
                        <h5>{ name }</h5> 
                    </Link>
                </div>
                <div className='offer-product-prices'> 
                    <div className='offer-product-price'>
                        <p>₦{ price }</p>
                    </div>
                    <div className='offer-product-discount'>
                        <p className='discount'>₦{ discount }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogOfferProducts;
