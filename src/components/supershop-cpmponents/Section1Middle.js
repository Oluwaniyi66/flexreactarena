import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section1Middle() {

    const myContext = useContext(StoreContext);
    const isLoading = myContext[7];
    const allProducts = myContext[4];

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className='section-1-middle' data-aos="fade-down">  
            {
                isLoading ? <div style={{ textAlign: "center", marginTop: "5%" }}><h5>Loading...</h5></div> :
                    <div className='middle-banner'>
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                {/* Carousel-1  */}
                                <div class="carousel-item active">
                                    <img class="d-block w-100 bgImage" src='/assets/bgstore/bgnew3.jpg' alt="First slide" />
                                    <div class="carousel-caption">
                                        <div className='display-two-items'>
                                            <div className='display-left'>
                                                <Link to={`/product-details/${allProducts[9].id}`}>
                                                    <div className='super-store-product image' >
                                                        <img
                                                            src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[9].image}`}
                                                        />
                                                    </div>
                                                    <h5 className="mt-3">{allProducts[9].name}</h5>
                                                </Link>
                                                <p>Price: ₦{allProducts[9].discount}</p>
                                            </div>
                                            <div className='display-right'>
                                                <Link to={`/product-details/${allProducts[1].id}`}>
                                                    <div className='super-store-product image' >
                                                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[1].image}`} />
                                                    </div>
                                                    <h5 className="mt-3">{allProducts[1].name}</h5>
                                                </Link>
                                                <p>Price: ₦{allProducts[1].discount}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Carousel-2  */}
                                <div class="carousel-item">
                                    <img class="d-block w-100 bgImage" src="/assets/bgstore/bgnew4.webp" alt="Second slide" />
                                    <div class="carousel-caption">
                                        <div className='display-two-items'>
                                            <div className='display-left'>
                                                <Link to={`/product-details/${allProducts[0].id}`}>
                                                    <div className='super-store-product image' >
                                                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[0].image}`} />
                                                    </div>
                                                    <h5 className="mt-3">{allProducts[0].name}</h5>
                                                </Link>
                                                <p>Price: ₦{allProducts[0].discount}</p>
                                            </div>
                                            <div className='display-right'>
                                                <Link to={`/product-details/${allProducts[10].id}`}>
                                                    <div className='super-store-product image' >
                                                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[10].image}`} />
                                                    </div>
                                                    <h5 className="mt-3">{allProducts[10].name}</h5>
                                                </Link>
                                                <p>Price: ₦{allProducts[10].discount}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Carousel-3  */}
                                <div class="carousel-item">
                                    <img class="d-block w-100 bgImage" src="/assets/bgstore/bgplain4.jpg" alt="Third slide" />
                                    <div class="carousel-caption">
                                        <div className='display-two-items'>
                                            <div className='display-left'>
                                                <Link to={`/product-details/${allProducts[8].id}`}>
                                                    <div className='super-store-product image' >
                                                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[8].image}`} />
                                                    </div>
                                                    <h5 className="mt-3">{allProducts[8].name}</h5>
                                                </Link>
                                                <p>Price: ₦{allProducts[8].discount}</p>
                                            </div>
                                            <div className='display-right'>
                                                <Link to={`/product-details/${allProducts[6].id}`}>
                                                    <div className='super-store-product image' >
                                                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[6].image}`} />
                                                    </div>
                                                    <h5 className="mt-3">{allProducts[6].name}</h5>
                                                </Link>
                                                <p>Price: ₦{allProducts[6].discount}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Section1Middle;
