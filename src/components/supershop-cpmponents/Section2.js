import React, { useContext, useState } from 'react';
import Section2Product from './Section2Product';
import { StoreContext } from '../../screens/StoreContext';

function Section2() {

    const myContext = useContext(StoreContext);
    const isLoading2 = myContext[8]; 
    const featuredProducts = myContext[6]; 
    const searchTerm2 = myContext[36];
 
    return ( 
        <div className='section-2-store-top'>
            <div className='section-2-store-top-header'>  
                <h2>Featured Products</h2>
            </div>
            <div className='section-2-store-top-products'> 
                {
                    isLoading2 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                    featuredProducts.featured.filter(val => {
                        if (searchTerm2 == "") { 
                            return val;
                        } else if ( val.name.toLowerCase().includes(searchTerm2.toLowerCase())) {
                            return val;
                        } else if ( val.category.toLowerCase() == searchTerm2.toLowerCase()) {
                            return val;
                        } 
                    }).map((prod, ind) => (
                        <Section2Product 
                            key={ ind } 
                            prod={ prod } />
                    ))
                }
            </div>
        </div>
    )
}

export default Section2;
