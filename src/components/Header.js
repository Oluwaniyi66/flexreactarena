import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './list-components/liststyles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header({ id, title, subtitle, image }) {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])


    return (
        <div id='main-header'>
            <div className='bars'>
                <img src='/assets/home-images2/bars1.png' />
            </div>
            <div className='bars2'>
                <img src='/assets/home-images2/bars1.png' />
            </div>
            <div className="header">
                <div className="container">
                    <div className="inner">
                        <div className="left" data-aos="fade-right">
                            <div className="left-inner">
                                <h2>{title}</h2>
                                <p>Home.pages.<span>{subtitle}</span></p>
                            </div>
                        </div>
                        <div className="right" data-aos="fade-down">
                            <div className="images">
                                <Link to={`/product-details/${id}`}>
                                    <a><img src={image} /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;