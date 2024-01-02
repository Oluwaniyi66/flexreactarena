import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../screens/StoreContext';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

function UniqueFeatures() {

    const [cartCount, setCartCount] = useContext(StoreContext);
    const myContext = useContext(StoreContext);
    const cart = myContext[2];
    const setCart = myContext[3];
    const isLoading3 = myContext[9];
    const allProducts = myContext[4];
    const [cartMessage, setCartMessage] = useState(""); 
    const qtyGlobal = myContext[12];
    const setQtyGlobal = myContext[13];

    const checkCart = (item) => {
        return item.id == allProducts[21].id;
    }

    // Adding to cart
    const addToCart = (pro) => {
        let prod = { ...pro, qty: 1 }
        if (cart.findIndex(checkCart) < 0) {
            setCartCount(cartCount + 1)
            Swal.fire({
                title: 'Product Added Successfully',
                icon: 'success',
                width: 600,
                padding: '3em',
                color: 'indigo',
                background: '#fafafa',
                backdrop: `
                  rgba(0,0,120,0.4)
                  url("assets/order-images/complete1.png")
                  middle top
                  no-repeat
                `
            })
            setCart(cart => cart.concat(prod));
            if (localStorage.getItem('cart') == null) {
                localStorage.setItem('cart', '[]');
                let old_data = JSON.parse(localStorage.getItem('cart'));
                old_data.push(prod);
                localStorage.setItem('cart', JSON.stringify(old_data));
            } else {
                let old_data = JSON.parse(localStorage.getItem('cart'));
                old_data.push(prod);
                localStorage.setItem('cart', JSON.stringify(old_data));
            }
        } else {
            Swal.fire({
                title: 'Product Added Already',
                width: 600,
                imageUrl: 'assets/error-images/error5.webp',
                imageHeight: 70,
                padding: '3em',
                color: 'indigo',
                background: '#fafafa'
            })
        }
    }

    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])

    return (
        <div id='unique-features'>
            {
                isLoading3 ? <div style={{ textAlign: "center", marginTop: "5%", color: "indigo" }}><h2>Loading...</h2></div> :
                    <div className='container'>
                        <div className='left' data-aos="fade-right">
                            <div className='ellipses'>
                                <div className='ellipse ellipse1'>
                                    <img src='/assets/home-images2/ellipse.png' />
                                </div>
                                <div className='ellipse ellipse2'>
                                    <img src='/assets/home-images2/ellipse.png' />
                                </div>
                            </div>
                            <div className='authentic-chair'>
                                <Link to={`/product-details/${allProducts[21].id}`}>
                                    <div className='unique-chair'>
                                        {
                                            cartMessage ? <span className='cart-message' style={{ marginLeft: '10%', color: 'indigo', backgroundColor: "white", padding: "5px 10px", borderRadius: "5px" }}>{cartMessage}</span> : ""
                                        }
                                        <img
                                            src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[21].image}`}
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='right-inner' data-aos="fade-left">
                                <div className='title'>
                                    <h2>Unique Features Of Latest & Trending Products</h2>
                                </div>
                                <div className='unique-list'>
                                    <div className='unique-list-item'>
                                        <div className='circle circle1'></div>
                                        <div className='text'>
                                            <p>All frames constructed with hardwood solids and laminates.</p>
                                        </div>
                                    </div>
                                    <div className='unique-list-item'>
                                        <div className='circle circle2'></div>
                                        <div className='text'>
                                            <p>Reinforced with double wood dowells, glue, screw and nails.</p>
                                        </div>
                                    </div>
                                    <div className='unique-list-item'>
                                        <div className='circle circle3'></div>
                                        <div className='text'>
                                            <p>Arms, backs and seats are structuarally reinforced.</p>
                                        </div>
                                    </div>
                                    <div className='unique-list-item last'>
                                        <div className='btn'>
                                            <button onClick={() => addToCart(allProducts[21])}>Add To Cart</button>
                                        </div>
                                        <div className='text'>
                                            <h3>{allProducts[21].name}</h3>
                                            <h4>₦{allProducts[21].price}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default UniqueFeatures;
