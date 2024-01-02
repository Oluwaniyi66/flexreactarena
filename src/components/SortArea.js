import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../screens/StoreContext';
import './grid-components/gridstyles.css';

function SortArea() {

    const myContext = useContext(StoreContext);
    const searchTerm = myContext[14];
    const setSearchTerm = myContext[15]; 

    // This function takes care of our search box.
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    } 

    // This function takes care of our filterby.
    const handleSearch2 = (e) => { 
        setSearchTerm(e.target.value); 
    }

    return (
        <div>
            <div className="" id="section-2">
                <div className="container">
                    <div className="left">
                    <h2>Ecommerce Accessories & Fashion Item</h2>
                    <p>About 500 results(0.34s)</p> 
                    </div>
                    <div className="right">
                    <div className="right-1">
                        <h3>Per page:</h3>
                        <div className="input-1">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="right-2">
                        <h3>Filtered By:</h3>
                        <select onChange={ handleSearch2 }>
                            <option value="featured">Featured</option>
                            <option value="trending">Trending</option>
                            <option value="new_arrival">New Arrival</option>
                            <option value="best_seller">Best Seller</option>
                            <option value="special_offer">Special Offer</option>
                        </select>
                    </div>
                    <div className="right-3">
                        <h3>View:</h3>
                        <Link to="/shop"><i class="fa fa-shopping-basket" aria-hidden="true"></i></Link>
                        <Link to="/grid"><i class="fa fa-th-large" aria-hidden="true"></i></Link>
                        <Link to="/list"><i class="fa fa-bars" aria-hidden="true"></i></Link>
                        <input type="text" onChange={ handleSearch } />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortArea;
