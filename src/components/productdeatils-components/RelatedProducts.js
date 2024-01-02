import React, { useEffect } from 'react'
import Product from './Product';
import { useContext } from 'react';
import './productdetailstyles.css';

import { StoreContext } from '../../screens/StoreContext';

function RelatedProducts() {
 
    const myContext= useContext(StoreContext);
    const isLoading2 = myContext[8]; 
    const featuredProducts = myContext[6]; 

    useEffect(() => {

    }, [featuredProducts.featured]);


    return (
        <div className='container' id='related'>
            <div className='related-heading'>
                <h2>Related Products</h2>
            </div>
            <div className='related-products'> 
                {
                    isLoading2 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                    featuredProducts.featured.map((prod) => (
                        <Product 
                            key={prod.id} 
                            id={prod.id} 
                            image={prod.image} 
                            title={prod.title} 
                            price={prod.price} 
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProducts;
