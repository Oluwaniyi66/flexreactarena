import React, {  useEffect } from 'react';
import WhatItem from './WhatItem';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhatWeOffer() {

    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])

    const whatData = [
        {
            image: '/assets/home-images2/support2.png',
            title: '24/7 Support',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
        },
        {
            image: '/assets/home-images2/support.jpg',
            title: 'Accountability',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
        },
        {
            image: '/assets/home-images2/support2.png',
            title: 'Excellence',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
        },
        {
            image: '/assets/home-images2/support.jpg',
            title: 'Quality',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
        }
    ] 

    return (
        <div className='container'>
            <div id='what-header'>
                <h2>What We Offer!</h2>
            </div>
            <div id='what-offer-items'>
                {
                    whatData.map((item, i) => (
                        <WhatItem key={i} image={item.image} title={item.title} description={item.description} />
                    ))
                }
            </div>
        </div>
    )
}

export default WhatWeOffer;
