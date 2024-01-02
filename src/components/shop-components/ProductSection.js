import React, { useEffect } from 'react';
import LeftFilter from './LeftFilter';
import Products from './Products';
import './shopstyles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProductSection() {

    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])

    return (
        <div>
            <div className='container' id='shop'>
                <div className='left' data-aos="fade-right">
                    <LeftFilter />
                </div>
                <div className='right'data-aos="fade-left">
                    <Products />
                </div>
            </div>  
        </div>
    )
}

export default ProductSection; 
