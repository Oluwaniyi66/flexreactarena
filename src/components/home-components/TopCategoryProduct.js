import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../screens/StoreContext';
import Swal from 'sweetalert2';

function TopCategoryProduct({ id, image, title, price, item }) {

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
            <div className='top-product'> 
                { 
                    cartMessage ? <span className='cart-message' style={{ marginLeft: "80px", fontSize: "14px" }}>{ cartMessage }</span> : ""
                }
                <div className='top-image-section'>
                    <div className='top-image'>
                        <img src={ image } />
                    </div>
                </div>
                <div className='top-text'>
                    <Link to={ `/product-details/${id}` }>
                        <h4>{ title }</h4>
                    </Link>
                </div>
                <div className='top-price'> 
                    <p>₦{ price }</p>
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

export default TopCategoryProduct;
