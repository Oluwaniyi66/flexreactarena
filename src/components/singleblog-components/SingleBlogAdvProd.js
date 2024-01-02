import React from 'react'
import { Link } from 'react-router-dom';


function SingleBlogAdvProd({id, image, title, price, discount}) {
    return (
        <div className='product-advert'>
            <Link to={`/product-details/${id}`}>
            <div className='product-advert-image'>
                <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${image}`} />  
            </div>
            </Link>
            <Link to={`/product-details/${id}`}>
            <div className='product-advert-title'>
                <h4>{ title }</h4>
            </div>
            </Link>
            <div className='product-advert-prices'>
                <div className='product-price'>
                    <h5>${ price }</h5>
                </div>
                <div className='product-discount'>
                    <h5>${ discount }</h5>
                </div>
                <div className='product-review'>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogAdvProd;
