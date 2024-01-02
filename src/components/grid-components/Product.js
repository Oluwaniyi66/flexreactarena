import React from 'react';
import { Link } from 'react-router-dom';
import './gridstyles.css';

function Product({ id, image, title, price, discount }) {
    return (
        <div>
            <Link to={ `/product-details/${id}` }>
                <div className="product">
                    <div className="image-section"> 
                        <div className="image"> 
                            <img src={ image } />
                        </div>
                    </div> 
                    <div className="title">
                        <h3>{ title }</h3> 
                    </div>
                    <div className="circles"> 
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="prices">
                        <div className="main-price">
                            <h4>#{ price }</h4>
                        </div>
                        <div className="discount">
                            <h4>#{ discount }</h4>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product;
