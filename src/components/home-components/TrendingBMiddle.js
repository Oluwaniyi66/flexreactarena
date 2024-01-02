import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TrendingBMiddle() {

    const myContext = useContext(StoreContext);
    const isLoading = myContext[7];
    const allProducts = JSON.parse(localStorage.getItem('all-products'));

    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])
 
    return (
        <div className='trending-middle' data-aos="fade-up">
            {
                isLoading ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                <>
                    <div className='discount'>
                        <h4>32% off in all products.</h4>
                    </div>
                    <div className='btn'>
                        <Link to="/shop"><a href=''>View Collection</a></Link>
                    </div>
                    <div className='image'>
                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[13].image}`} />
                    </div>
                </>
            }
        </div>
    )
}
 
export default TrendingBMiddle;
