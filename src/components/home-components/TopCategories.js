import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import './homstyles.css';
import TopCategoryProduct from './TopCategoryProduct';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TopCategories() {

    const myContext= useContext(StoreContext);
    const isLoading2 = myContext[8];
    const topCategoryData = myContext[6]; 

    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])

    return (
        <div id='top-categories'>
            {
                isLoading2 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                <div className='container'>
                    <div className='top-header' data-aos="fade-down">
                        <h2>Top Categories</h2>
                    </div>
                    <div className='top-products' data-aos="fade-up">
                    {
                        topCategoryData.top_category.map((prod) => ( 
                            <TopCategoryProduct 
                                key={prod.id} 
                                id={prod.id} 
                                image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${prod.image}`}
                                title={prod.name} 
                                price={prod.price} 
                                item={prod}
                                />
                        ))
                    }
                    </div>
                </div>
            }
        </div>
    )
}

export default TopCategories;
