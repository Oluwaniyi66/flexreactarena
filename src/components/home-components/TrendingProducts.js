import React, { useContext, useState } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import TrendingTop from './TrendingTop';
import './homstyles.css';
import TrendingBottom from './TrendingBottom';

function TrendingProducts() {

    const myContent = useContext(StoreContext);
    const isLoading2 = myContent[8];
    const trendingData = myContent[6];


    return (
        <div id='trending-products'>
            <div className='container'>
                <div className='trending-header'> 
                    <h2>Trending Products</h2> 
                </div>
                <div className='upper-trending'>
                    {
                        isLoading2 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                        trendingData.trending.map((prod) => (
                            <TrendingTop 
                                key={prod.id} 
                                id={prod.id} 
                                image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${prod.image}`}
                                title={prod.name} 
                                price={prod.price} 
                                discount={prod.discount} 
                                item={prod}
                                />
                        ))
                    }
                </div>
                <div className='lower-trending'>
                    <TrendingBottom />
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts;
