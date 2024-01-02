import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function DiscountItems() {

    const myContext = useContext(StoreContext);
    const isLoading = myContext[7];
    const allProducts = JSON.parse(localStorage.getItem('all-products'));

    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])

    return (
        <div id='discount-item'> 
            <div className='container'>
                <div className='discount-header' data-aos="fade-down"> 
                    <h2>Discount Item</h2>
                </div> 
                {/* <div className='discount-subheader' data-aos="fade-down">
                    <div className='discount-subheader-item active'>Mens</div>
                    <div className='discount-subheader-item'>Womens</div>
                    <div className='discount-subheader-item'>Accessories</div>
                    <div className='discount-subheader-item'>Foods</div>
                </div> */}
                {
                    isLoading ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                    <div className='discount-bottom'>
                        <div className='discount-bottom-left' data-aos="fade-right">
                            <div className='discount-bottom-left-header'>
                                <h4>20% Discount Of All Products</h4>
                            </div>
                            <div className='discount-bottom-left-subheader'>
                                <h5>Our quality products</h5>
                            </div>
                            <div className='discount-bottom-left-description'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Eu eget feugiat habitasse 
                                    nec, bibendum condimentum.
                                </p>
                            </div>
                            <div className='discount-bottom-left-list list1'>
                                <div className='image'>
                                    <img src='/assets/order-images/complete3.png' />
                                </div>
                                <div className='text'>
                                    <p>Material Expose Like Metals.</p>
                                </div>
                            </div>
                            <div className='discount-bottom-left-list list2'>
                                <div className='image'>
                                    <img src='/assets/order-images/complete3.png' />
                                </div>
                                <div className='text'>
                                    <p>Simple Neutral Colors.</p>
                                </div>
                            </div>
                            <div className='discount-bottom-right-list list3'>
                                <div className='image'>
                                    <img src='/assets/order-images/complete3.png' />
                                </div>
                                <div className='text'>
                                    <p>Clear Lines And Geometric Figures.</p>
                                </div>
                            </div>
                            <div className='discount-bottom-right-list list4'>
                                <div className='image'>
                                    <img src='/assets/order-images/complete3.png' />
                                </div>
                                <div className='text'>
                                    <p>Simple Neutral Colors.</p>
                                </div>
                            </div>
                            <div className='discount-btn'>
                                <Link to={ `/product-details/${allProducts[0].id}` }>
                                    <button>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                        <div className='discount-bottom-right-section'>
                            <div className='discount-bottom-right-section-inner' data-aos="fade-left">
                                <div className='ellipse'>
                                    <img src='/assets/home-images2/ellipse.png' />
                                </div>
                                <Link to={ `/product-details/${allProducts[0].id}` }>
                                <div className='image'>
                                    <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[0].image}`} />
                                </div>
                                </Link>
                            </div>
                        </div>
                </div>
                }
            </div>
        </div>
    )
}

export default DiscountItems;
