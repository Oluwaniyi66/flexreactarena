import React, { useContext} from 'react';
import { StoreContext } from './StoreContext';
import TopFooter from '../components/TopFooter';
import HomeHeader from '../components/home-components/HomeHeader';
import FeaturedProducts from '../components/home-components/FeaturedProducts';
import LatestProducts from '../components/home-components/LatestProducts';
import WhatWeOffer from '../components/home-components/WhatWeOffer';
import UniqueFeatures from '../components/home-components/UniqueFeatures';
import TrendingProducts from '../components/home-components/TrendingProducts';
import DiscountItems from '../components/home-components/DiscountItems';
import TopCategories from '../components/home-components/TopCategories';
import Newsletter from '../components/home-components/Newsletter';
import LatestBlogs from '../components/home-components/LatestBlogs';

function Home() {
    const myContext = useContext(StoreContext);
    const allProducts = myContext[4];

    return (
        <div>
            { 
                allProducts.length > 0 ?
                    <div>

                        {/* HEADER STARTS HEADER STARTS */}

                        <HomeHeader />

                        {/* HEADER ENDS HEADER ENDS */}


                        {/* FEATURED PRODUCTS STARTS FEATURED PRODUCTS STARTS */}

                        <FeaturedProducts />

                        {/* FEATURED PRODUCTS ENDS FEATURED PRODUCTS ENDS */}


                        {/* LATEST PRODUCTS STARTS LATEST PRODUCTS STARTS */}

                        <LatestProducts />

                        {/* LATEST PRODUCTS ENDS LATEST PRODUCTS ENDS */}


                        {/* WHAT WE OFFER STARTS WHAT WE OFFER STARTS */}

                        <WhatWeOffer />

                        {/* WHAT WE OFFER ENDS WHAT WE OFFER ENDS */}


                        {/* UNIQUE FEATURES STARTS UNIQUE FEATURES STARTS */}

                        <UniqueFeatures />

                        {/* UNIQUE FEATURES ENDS UNIQUE FEATURES ENDS */}


                        {/* TRENDING PRODUCTS STARTS TRENDING PRODUCTS STARTS */}

                        <TrendingProducts />

                        {/* TRENDING PRODUCTS ENDS TRENDING PRODUCTS ENDS */}


                        {/* DISCOUNT ITEM STARTS DISCOUNT ITEM STARTS */}

                        <DiscountItems />

                        {/* DISCOUNT ITEM ENDS DISCOUNT ITEM ENDS */}


                        {/* TOP CATEGORIES STARTS TOP CATEGORIES STARTS */}

                        <TopCategories />

                        {/* TOP CATEGORIES ENDS TOP CATEGORIES ENDS */}


                        {/* NEWSLETTER STARTS NEWSLETTER STARTS */}

                        <Newsletter />

                        {/* NEWSLETTER ENDS NEWSLETTER ENDS */}


                        {/* TOPFOOTER STARTS TOPFOOTER STARTS */}

                        <TopFooter />

                        {/* TOPFOOTER ENDS TOPFOOTER ENDS */}


                        {/* LATEST BLOG STARTS LATEST BLOG STARTS */}

                        <LatestBlogs />

                        {/* LATEST BLOG ENDS LATEST BLOG ENDS */}

                    </div> : <div style={{ textAlign: 'center' }}>Loading..</div>
            }
        </div>
    )
}

export default Home;
