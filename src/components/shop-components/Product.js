import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../screens/StoreContext';
import './shopstyles.css';
import Swal from 'sweetalert2';

function Product({ id, image, title, price, discount, rating, description, item }) {

    const [cartCount, setCartCount] = useContext(StoreContext);
    const myContent = useContext(StoreContext);
    const cart = myContent[2];
    const setCart = myContent[3];
    const [cartMessage, setCartMessage] = useState("");
    const qtyGlobal = myContent[12];
    const setQtyGlobal = myContent[13];
    const isLoading2 = myContent[8];
    const topCategoryData = myContent[6];
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

    return (
        <div> 
            {
                cartMessage ? <span className='cart-message' style={{ marginLeft: "10px", fontSize: "14px", backgroundColor: "lightgrey", color: "forestgreen", padding: "5px 10px" }}>{cartMessage}</span> : ""
            }
            <div className='shop-card'>
                <div className='left'>
                    <div className='images'>
                        <img src={image} />
                    </div>
                </div>
                <div className='right'>
                    <div className='text'>
                        <div className='title'>
                            <Link to={`/product-details/${id}`}><h3>{title}</h3></Link>
                            <div className="circles">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className='prices'>
                            <h4>₦{price}</h4>
                            <h4 className='discount'>₦{discount}</h4>
                        </div>
                        <div className='lorem'>
                            <p>
                                {description}
                            </p>
                        </div>
                        <div className='icons'>
                            <Link to="/shopping-cart">
                                <span style={{ color: "black" }}>
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                </span>
                            </Link>
                            <i class="fa fa-heart-o" aria-hidden="true" onClick={() => addToFavorites(item)}></i>
                            <span className='hover-plus ml-3' onClick={() => addToCart(item)}>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
