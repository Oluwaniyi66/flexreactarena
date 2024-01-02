import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../screens/StoreContext';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';


function TrendingTop({ id, image, title, price, discount, item }) {

    const [cartCount, setCartCount] = useContext(StoreContext);
    const myContent = useContext(StoreContext);
    const cart = myContent[2];
    const setCart = myContent[3];
    const [cartMessage, setCartMessage] = useState("");
    const qtyGlobal = myContent[12];
    const setQtyGlobal = myContent[13];  
    const favorites = myContent[40];
    const setFavorites = myContent[41];
    
    const checkCart = (item) => {
        return item.id == id;
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

    // Adding to favorites
    const addToFavorites = (prod) => {
        let favoritesLocatStore = JSON.parse(localStorage.getItem('favorites')) || [];
        const check_index = favoritesLocatStore.findIndex(item => item.id === prod.id);

        // If the check_index is any number apart from -1, it means the product is already in the wishlist
        if (check_index !== -1) {
            Swal.fire({
                title: 'Product Already In Wishlist',
                width: 600,
                imageUrl: 'assets/error-images/error5.webp',
                imageHeight: 70,
                padding: '3em',
                color: 'indigo',
                background: '#fafafa'
            })

        } else {
            // If the check_index is -1, it means the product is not in the wishlist and will be added
            Swal.fire({
                title: 'Product Added To Wishlist',
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

            // Update the favorites state with that new product.
            setFavorites(favorites => favorites.concat(prod))

            // Update the favorites array in the local storage.
            let old_favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            let new_favorites = old_favorites.concat(prod);
            localStorage.setItem('favorites', JSON.stringify(new_favorites));
        }
    }

    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])

    return (
        <div className='trending-prod' data-aos="fade-down">
            { 
                cartMessage ? <span className='cart-message' style={{ marginLeft: "30px" }}>{ cartMessage }</span> : ""
            }
            <div className='trending-image'>
                <Link to={ `/product-details/${id}` }>
                <div className='trending-image-inner'>
                    <img src={ image } />
                </div>
                </Link> 
            </div>
            <div className='trending-text'>
                <div className='title'>
                    <Link to={ `/product-details/${id}` }>
                        <h2>{ title }</h2> 
                    </Link>
                </div>
                <div className='trending-lower'>
                    <div className='price'>
                        <h4 className='price'>₦{ price }</h4>
                    </div>
                    <div className='discount'> 
                        <h4>₦{ discount }</h4>
                    </div>
                </div>
            </div>
            <div className='hover-card'>
                    <Link to="/shopping-cart">
                        <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </Link>
                    <div className='hover-heart' onClick={() => addToFavorites(item)}>
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div className='hover-plus' onClick={ () => addToCart(item) }>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                </div>
        </div>
    )
}

export default TrendingTop;
