import React, { useContext, useState } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import Section6Product from './Section6Product';

function Section5() {

    const myContext = useContext(StoreContext);
    const isLoading = myContext[7];
    const allProducts = myContext[4];
    const [searchTerm4, setSearchTerm4] = useState(""); // This handles the search box in the all products section only
    const searchTerm2 = myContext[36];


    // For the search bar in the navbar
    const handleSearch = (e) => {
        setSearchTerm4(e.target.value);
    }

    return ( 
        <div className='section-2-store-top'>
            <div className='section-2-store-top-header'>
                <h2>All Products</h2>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleSearch}
                />
            </div>
            <div className='section-2-store-top-products'>
                {
                    isLoading ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                        allProducts.filter(val => {
                            if (searchTerm4 == "") {
                                return val;
                            } else if (val.name.toLowerCase().includes(searchTerm4.toLowerCase())) {
                                return val;
                            } 
                        }).map((prod, ind) => (
                            <Section6Product
                                key={ind}
                                prod={prod}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default Section5;
