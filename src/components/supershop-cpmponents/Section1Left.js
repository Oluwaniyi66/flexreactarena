import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Section1Left() {

    const [isChecked2, setIsChecked2] = useState("");
    const myContext = useContext(StoreContext);
    const setSearchTerm2 = myContext[37];
    const searchTerm3 = myContext[38];      // This handles is to handle the checkbox filter 
    const setSearchTerm3 = myContext[39];  // This handles is to handle the checkbox filter 
 

    // This function takes care of our category filter in the super store
    const handleSearch4 = (e) => {
        setIsChecked2(e.target.value);
        setSearchTerm2(e.target.value);
    }

    // let highToLowSort = currentProducts.sort((a,b)=>b.price-a.price)
    // let lowToHigh = currentProducts.sort((a,b)=>a.price-b.price) 

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className='section-1-left' data-aos="fade-right">
            <div className='section-1-categories'>
                <div className='sort-header'>
                    <h2>Categories</h2>
                </div>
                <div className='sort-item'>
                    <input type="checkbox" value="electronics" checked={isChecked2 === "electronics"} onChange={handleSearch4} />
                    <p>Electronic</p>
                </div>
                <div className='sort-item'>
                    <input type="checkbox" value="fashion" checked={isChecked2 === "fashion"} onChange={handleSearch4} />
                    <p>Fashion</p>
                </div>
                <div className='sort-item'>
                    <input type="checkbox" value="computer_and_accessories" checked={isChecked2 === "computer_and_accessories"} onChange={handleSearch4} />
                    <p>Computer & Accessories</p>
                </div>
                <div className='sort-item'>
                    <input type="checkbox" value="phones_and_tablets" checked={isChecked2 === "phones_and_tablets"} onChange={handleSearch4} />
                    <p>Phones & Tablets</p>
                </div>
                <div className='sort-item'>
                    <input type="checkbox" value="home_and_kitchen" checked={isChecked2 === "home_and_kitchen"} onChange={handleSearch4} />
                    <p>Home & Kitchen</p>
                </div>
                <div className='sort-item'>
                    <input type="checkbox" value="groceries" checked={isChecked2 === "groceries"} onChange={handleSearch4} />
                    <p>Groceries</p>
                </div>
                <div className='sort-item'>
                    <input type="checkbox" value="musical_instruments" checked={isChecked2 === "musical_instruments"} onChange={handleSearch4} />
                    <p>Musical Instruments</p>
                </div>
                <div className='sort-item'>
                    <input type="checkbox" value="home_and_offices" checked={isChecked2 === "home_and_offices"} onChange={handleSearch4} />
                    <p>Home & Offices</p>
                </div>
                <div className='sort-item'>
                    <input type="checkbox" value="sports_and_outdoors" checked={isChecked2 === "sports_and_outdoors"} onChange={handleSearch4} />
                    <p>Sports & Outdoor</p>
                </div>
                <div className='sort-item'>
                    <input type="checkbox" value="agriculture_and_food" checked={isChecked2 === "agriculture_and_food"} onChange={handleSearch4} />
                    <p>Agricultural & Food</p>
                </div>
                <div className='sort-item'>
                    <input type="checkbox" value="health_and_beauty" checked={isChecked2 === "health_and_beauty"} onChange={handleSearch4} />
                    <p>Health & Beauty</p>
                </div>
                <div className='sort-item'>
                    <input type="checkbox" value="toys_and_games" checked={isChecked2 === "toys_and_games"} onChange={handleSearch4} />
                    <p>Toys & Games</p>
                </div>
            </div>
        </div>
    )
}

export default Section1Left;
