import React, { useContext, useState } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import './shopstyles.css';

function LeftFilter() {

    const [isChecked, setIsChecked] = useState("");
    const myContext = useContext(StoreContext);
    const searchTerm = myContext[14];
    const setSearchTerm = myContext[15];
    const sort = myContext[28];
    const setSort = myContext[29];

    // This function takes care of our category filter.
    const handleSearch3 = (e) => {
        setIsChecked(e.target.value); 
        setSearchTerm(e.target.value);
        console.log('value:', searchTerm) 
    } 

    return (
        <div>
            <div className='sort-header'>
                <h2>Categories</h2>
            </div>
            <div className='sort-item'>
                <input type="checkbox" value="electronics" checked={isChecked === "electronics"} onChange={handleSearch3} />
                <p>Electronic</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" value="fashion" checked={isChecked === "fashion"} onChange={handleSearch3} />
                <p>Fashion</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" value="computer_and_accessories" checked={isChecked === "computer_and_accessories"} onChange={handleSearch3} />
                <p>Computer & Accessories</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" value="phones_and_tablets" checked={isChecked === "phones_and_tablets"} onChange={handleSearch3} />
                <p>Phones & Tablets</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" value="home_and_kitchen" checked={isChecked === "home_and_kitchen"} onChange={handleSearch3} />
                <p>Home & Kitchen</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" value="groceries" checked={isChecked === "groceries"} onChange={handleSearch3} />
                <p>Groceries</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" value="musical_instruments" checked={isChecked === "musical_instruments"} onChange={handleSearch3} />
                <p>Musical Instruments</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" value="home_and_offices" checked={isChecked === "home_and_offices"} onChange={handleSearch3} />
                <p>Home & Offices</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" value="sports_and_outdoors" checked={isChecked === "sports_and_outdoors"} onChange={handleSearch3} />
                <p>Sports & Outdoor</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" value="agriculture_and_food" checked={isChecked === "agriculture_and_food"} onChange={handleSearch3} />
                <p>Agricultural & Food</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" value="health_and_beauty" checked={isChecked === "health_and_beauty"} onChange={handleSearch3} />
                <p>Health & Beauty</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" value="toys_and_games" checked={isChecked === "toys_and_games"} onChange={handleSearch3} />
                <p>Toys & Games</p>
            </div>
            <br />

            {/* <div className='sort-header'>
                <h2>Product Brands</h2>
            </div>
            <div className='sort-item'>
                <input type="checkbox" />
                <p>Sony</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" />
                <p>Samsung</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" />
                <p>LG</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" />
                <p>Canon</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" />
                <p>Dstv</p>
            </div>
            <br />

            <div className='sort-header'>
                <h2>Price Filter</h2>
            </div>
            <div className='sort-item'>
                <input type="checkbox" checked={sort === "higher"} value={"higher"} onChange={(e) => setSort(e.target.value)} />
                <p>Price - High To Low</p>
            </div>
            <div className='sort-item'>
                <input type="checkbox" checked={sort === "lower"} value={"lower"} onChange={(e) => setSort(e.target.value)} />
                <p>Price - Low To High</p>
            </div> */}
        </div>
    )
}

export default LeftFilter;
