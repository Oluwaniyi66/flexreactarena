import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TrendingBRight() {

    const myContext = useContext(StoreContext);
    const isLoading = myContext[7];
    const allProducts = JSON.parse(localStorage.getItem('all-products'));

    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])
    
    return (
        <> 
        {
            isLoading ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
            <div className='trending-right' data-aos="fade-left">
                <div className='top'>
                    <div className='left'>
                        <img 
                        src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[15].image}`}
                        />
                    </div>
                    <div className='right'>
                    <Link to={ `/product-details/${allProducts[15].id}` }>
                        <h4>{ allProducts[15].name }</h4> 
                    </Link>
                    <p>₦{ allProducts[15].price }</p> 
                    </div>
                </div> 
                <div className='middle'>
                    <div className='left'>
                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[16].image}`} />
                    </div>
                    <div className='right'>
                    <Link to={ `/product-details/${allProducts[16].id}` }>
                        <h4>{ allProducts[16].name }</h4>
                    </Link>
                        <p>₦{ allProducts[16].price }</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[17].image}`} />
                    </div>
                    <div className='right'>
                    <Link to={ `/product-details/${allProducts[17].id}` }>
                        <h4>{ allProducts[17].name }</h4>
                    </Link>
                        <p>₦{ allProducts[17].price }</p>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default TrendingBRight;
