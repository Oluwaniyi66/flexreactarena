import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section1Right() {

    const myContext = useContext(StoreContext);
    const isLoading = myContext[7];
    const allProducts = myContext[4];

    useEffect(() => { 
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className='section-1-right' data-aos="fade-left">
            {
                isLoading ? <div style={{ textAlign: "center", marginTop: "5%" }}><h5>Loading...</h5></div> :
                    <>
                        <div className='section-1-right-top'>
                            <Link to={`/product-details/${allProducts[8].id}`}>
                                <div className='section-1-right-top-image image' style={{ backgroundImage: "url(/assets/bgstore/bgnew6.webp)", backgroundSize: "cover" }}>
                                    <div className='image-inner'>
                                        <img
                                            src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[8].image}`}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='section-1-right-middle'>
                            <Link to={`/product-details/${allProducts[6].id}`}>
                                <div className='section-1-right-bottom-image image' style={{ backgroundImage: "url(/assets/bgstore/bgplain4.jpg)", backgroundSize: "cover" }}>
                                    <div className='image-inner'>
                                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[6].image}`} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='section-1-right-bottom'>
                            <Link to={`/product-details/${allProducts[21].id}`}>
                                <div className='section-1-right-middle-image image' style={{ backgroundImage: "url(/assets/bgstore/bgnew6.webp)", backgroundSize: "cover" }}>
                                    <div className='image-inner'>
                                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[21].image}`} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </>

            }
        </div>
    )
}

export default Section1Right;
