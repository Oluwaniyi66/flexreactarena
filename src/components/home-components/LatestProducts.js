import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import LatestBestSeller from './LatestBestSeller';
import LatestNewArrival from './LatestNewArrival';
import LatestFeatured from './LatestFeatured';
import LatestSpecial from './LatestSpecial';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LatestProducts() {
    const [toggle, setToggle] = useState(1); 

    const toggleTab = (index) => {
        setToggle(index); 
    }

    const myContext= useContext(StoreContext); 
    const isLoading2 = myContext[8];
    const newArrival = myContext[6];
    const bestSeller = myContext[6];
    const featuredProd = myContext[6];
    const specialOffer = myContext[6]; 

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div id='latest'>
            <div className='container' data-aos="fade-down">
                <div className='top'>
                    <div className='latest-header'> 
                        <h2>Latest Products</h2>
                    </div>
                    <div className='latest-subheader' id='subheader'>
                        <h4 className={ toggle == 1 ? 'item active' : 'item' } onClick={ () => toggleTab(1) }>New Arrival</h4>
                        <h4 className={ toggle == 2 ? 'item active' : 'item' } onClick={ () => toggleTab(2) }>Best Seller</h4>
                        <h4 className={ toggle == 3 ? 'item active' : 'item' } onClick={ () => toggleTab(3) }>Featured</h4>
                        <h4 className={ toggle == 4 ? 'item active' : 'item' } onClick={ () => toggleTab(4) }>Special Offer</h4>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='latest-products'>
                        <div className={ toggle == 1 ? 'content active' : 'content' }>
                            <div className='new-arrival-products'>
                                {
                                    isLoading2 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                                    newArrival.new_arrival.map((prod) => (
                                        <LatestNewArrival 
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
                        </div>
                        
                        <div className={ toggle == 2 ? 'content active' : 'content' }>
                            <div className='best-seller-products'>
                                {
                                    isLoading2 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                                    bestSeller.best_seller.map((prod) => (
                                        <LatestBestSeller 
                                            key={prod.id} id={prod.id} 
                                            image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${prod.image}`} 
                                            title={prod.name} 
                                            price={prod.price} 
                                            discount={prod.discount} 
                                            item={prod}
                                            />
                                    ))
                                }
                            </div>
                        </div>
                       
                        <div className={ toggle == 3 ? 'content active' : 'content' }>
                            <div className='featured-product-tabs'>
                                {
                                    isLoading2 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                                    featuredProd.featured.map((prod) => (
                                        <LatestFeatured 
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
                        </div>

                        <div className={ toggle == 4 ? 'content active' : 'content' }>
                            <div className='special-offer'>
                                {
                                    isLoading2 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                                    specialOffer.special_offer.map((prod) => (
                                        <LatestSpecial 
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProducts;
