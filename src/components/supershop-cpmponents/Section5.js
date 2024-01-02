import React, { useContext, useState } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import Section5Product from './Section5Product';

function Section5() {

    const myContext = useContext(StoreContext);
    const isLoading2 = myContext[8];
    const featuredProducts = myContext[6];
    const searchTerm2 = myContext[36];
    const searchTerm3 = myContext[38];
    

    return (
        <div className='section-2-store-top'>
            <div className='section-2-store-top-header'>
                <h2>Special Offer</h2>
            </div>  
            <div className='section-2-store-top-products'> 
                {
                    isLoading2 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                        featuredProducts.special_offer.filter(val => {
                            if (searchTerm2 == "") { 
                                return val;
                            } else if ( val.name.toLowerCase().includes(searchTerm2.toLowerCase())) {
                                return val;
                            } else if ( val.category.toLowerCase() == searchTerm2.toLowerCase()) {
                                return val;
                            }
                        }).map((prod, ind) => (
                            <Section5Product
                                key={ind}
                                prod={prod}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default Section5;
