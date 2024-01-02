import React, { useContext, useState } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import Section3Product from './Section3Product';

function Section3() {

    const myContext = useContext(StoreContext);
    const isLoading2 = myContext[8];
    const featuredProducts = myContext[6]; 
    const searchTerm2 = myContext[36];
    const searchTerm3 = myContext[38];

    return ( 
        <div className='section-2-store-top'>
            <div className='section-2-store-top-header'>
                <h2>New Arrival</h2>
            </div>
            <div className='section-2-store-top-products'>
                {
                    isLoading2 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                        featuredProducts.new_arrival.filter(val => {
                            if (searchTerm2 == "") { 
                                return val;
                            } else if ( val.name.toLowerCase().includes(searchTerm2.toLowerCase())) {
                                return val;
                            } else if ( val.category.toLowerCase() == searchTerm2.toLowerCase()) {
                                return val;
                            }
                        }).map((prod, ind) => (
                            <Section3Product
                                key={ind}
                                prod={prod}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default Section3;
