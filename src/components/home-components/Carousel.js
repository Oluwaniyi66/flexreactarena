import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homstyles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Carousel({ id, subtitle, title, description, image }) { 
    
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div>
            <div id="home">
                <div className='lamp'>
                    <img src='/assets/home-images/lamp.png' />
                </div>
                <div className='circles'>
                    <div className='ball ball1'></div>
                    <div className='ball ball2'></div>
                    <div className='ball ball3'></div>
                </div>
                <div className='container'>
                    <div className='left'>
                        <div className='left-inner'>
                            <div className='text'>
                                <div className='home-subtitle' data-aos="fade-down">
                                    <h4>{ subtitle }</h4>
                                </div>
                                <div className='home-title' data-aos="fade-right">
                                    <h2><b>{ title }</b></h2>
                                </div>
                                <div className='home-description' data-aos="fade-right">
                                    <p>{ description }</p>
                                </div>
                                <div className='home-btn' data-aos="fade-up">
                                    <Link to="/shop">
                                        <a><button>SHOP NOW</button></a> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='right'>
                        <div className='right-inner'>
                            <div className='ellipse'>
                                <img src='/assets/home-images/ellipse.png' />
                            </div>
                            <div className='ellipse ellipse2'>
                                <img src='/assets/home-images/ellipse.png' />
                            </div>
                            <div className='chair' data-aos="fade-down">
                                <Link to={`/product-details/${id}`}>
                                    <img src={ image } />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;
