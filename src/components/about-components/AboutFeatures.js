import React, { useEffect } from 'react';
import AboutFeatureCard from './AboutFeatureCard';
import './aboutstyles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutFeatures() {

    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])

    return (
        <div id='about-features'>
            <div className='container' data-aos="fade-down">
                <div className='about-header'>
                    <h2>Our Features</h2>
                </div> 
                <div className='about-card'>
                    <div className='about-features-cards'>
                        <AboutFeatureCard 
                            image='/assets/about-images/support.jpg' 
                            title="Free Delivery" 
                            description="Lorem ipsum dolor sit amet, consectetur dipiscing elit. Massa purus gravida." 
                        />
                        <AboutFeatureCard 
                            image='/assets/about-images/support2.png' 
                            title="100% Cash Back" 
                            description="Lorem ipsum dolor sit amet, consectetur dipiscing elit. Massa purus gravida." 
                        />
                        <AboutFeatureCard 
                            image='/assets/about-images/support2.png' 
                            title="Quality Product" 
                            description="Lorem ipsum dolor sit amet, consectetur dipiscing elit. Massa purus gravida." 
                        />
                        <AboutFeatureCard 
                            image='/assets/about-images/support.jpg' 
                            title="24/7 Support" 
                            description="Lorem ipsum dolor sit amet, consectetur dipiscing elit. Massa purus gravida." 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFeatures;
