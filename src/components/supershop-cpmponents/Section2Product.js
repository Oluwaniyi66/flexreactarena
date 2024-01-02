import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../screens/StoreContext';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section2Product({ prod }) { 

    const [cartCount, setCartCount] = useContext(StoreContext);
    const myContent = useContext(StoreContext);
    const cart = myContent[2];
    const setCart = myContent[3];
    const [cartMessage, setCartMessage] = useState("");


    // Fucntion that checks if the product already exists in the cart.
    const checkCart = (item) => { 
        return item.id == prod.id; 
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
        AOS.init({ duration: 1000 })
      }, [])

    return (
        <div className='section-2-store-top-product main' data-aos="fade-down">
            <span className='cart-message'>{ cartMessage }</span>
            <div className='image-section'>
                <Link to={`/product-details/${prod.id}`}>
                    <div className='image-section-inner'>
                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${prod.image}`}  />
                    </div>
                </Link>
            </div>
            <div className='text-section'>
                <Link to={`/product-details/${prod.id}`}>
                    <div className='name'>
                        <h4>{prod.name}</h4>
                    </div>
                </Link> 
                <div className='prices'>
                    <h5>₦{prod.discount}</h5>
                    <h5>₦<span className='price'>{prod.price}</span></h5>
                </div>
            </div>
            <div className='circular-balls'>
                <div className='icon icon1'></div>
                <div className='icon icon2'></div>
                <div className='icon icon3'></div>
            </div>
            <div className='hover-items'>
                <div className='hover-cart'>
                    <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </div>
                <div className='hover-heart'>
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                </div>
                <div className='hover-plus'>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
            </div>
            <div className='super-store-add-btn'>
                <button onClick={ () => addToCart(prod) }>Add To Cart</button>
            </div>
        </div>
    )
}

export default Section2Product;
