import React, { useState } from 'react';
import './productdetailstyles.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function ProductDetail() {

    const [toggle, setToggle] = useState(1); 

    const toggleTab = (index) => {
        setToggle(index);
    }

    const [product, setProduct] = useState({}); 
    const { prod_id }  = useParams();  
    const [prodLoading, setProdLoading] = useState(true); 

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/all_products/${prod_id}`)
        .then(res => res.json())
        .then(json => {
            setProduct(json);
            setProdLoading(false);
        });
    }, [prod_id])

    return (
        <div className='container'>
            <div id='product-details'>
                <div className='block-tabs'>
                    <div className={ toggle == 1 ? 'tab active-tab' : 'tab' } onClick={ () => toggleTab(1) }>Description</div>
                    <div className={ toggle == 2 ? 'tab active-tab' : 'tab' } onClick={ () => toggleTab(2) }>Additional Info</div>
                    <div className={ toggle == 3 ? 'tab active-tab' : 'tab' } onClick={ () => toggleTab(3) }>Reviews</div>
                    <div className={ toggle == 4 ? 'tab active-tab' : 'tab' } onClick={ () => toggleTab(4) }>Video</div>
                </div>
                {
                    prodLoading ? <div>Loading...</div> : 
                    <div className='content-tabs'>
                    <div className={ toggle == 1 ? 'content active-content' : 'content' }>
                        <h2 className='title'>Description</h2>
                        <hr />
                        <p>
                            { product.long_desc }
                        </p>
                        <br />
                        <h2>More Details</h2>
                        <ul>
                            <li>
                                { product.short_desc } 
                            </li>
                        </ul>
                    </div>

                    <div className={ toggle == 2 ? 'content active-content' : 'content' }>
                        <h2>Additional Info</h2>
                        <hr />
                        <p>
                            { product.long_desc }
                        </p>
                    </div>

                    <div className={ toggle == 3 ? 'content active-content' : 'content' }>
                        <h2>Reviews</h2>
                        <hr />
                        <p>
                            { product.short_desc }
                        </p>
                    </div>

                    <div className={ toggle == 4 ? 'content active-content' : 'content' }>
                        <h2>Videos</h2>
                        <hr />
                        <p>
                            { product.long_desc }
                        </p>
                    </div>
                </div>
                }
                
            </div>
        </div>
    )
}

export default ProductDetail;
