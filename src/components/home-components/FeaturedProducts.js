import React, { useContext, useEffect } from 'react';
import FeaturedProduct from './FeaturedProduct';
import { StoreContext } from '../../screens/StoreContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FeaturedProducts() {

    const myContext= useContext(StoreContext);
    const isLoading2 = myContext[8]; 
    const featuredProducts = myContext[6]; 

    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])

    return (
        <div className='container' id='featured'> 
            <div className='featured-header'>
                <h2>Featured Products</h2> 
            </div> 
            <div className='container' id='featured-products' data-aos="fade-down">
                {
                    
                    isLoading2 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                    featuredProducts.featured.map((prod) => (
                        <FeaturedProduct 
                            key={prod.id} 
                            id={prod.id} 
                            image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${prod.image}`}
                            title={prod.name} 
                            color={prod.color} 
                            price={prod.price} 
                            item={prod}
                            />
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedProducts;

