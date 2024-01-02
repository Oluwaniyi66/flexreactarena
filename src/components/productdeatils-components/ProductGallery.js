import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../screens/StoreContext';
import Swal from 'sweetalert2';

function ProductGallery({ id, name, image, price, discount, category, short_desc, img1, img2, img3, vid_url, item }) {

    const [cartCount, setCartCount] = useContext(StoreContext);
    const myContent = useContext(StoreContext);
    const cart = myContent[2];
    const setCart = myContent[3];
    const [cartMessage, setCartMessage] = useState("");
    const isLoading = myContent[7];

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


    const [selectedImg, setSelectedImg] = useState(`${process.env.REACT_APP_FILES_URL}/uploaded_files/${image}`);


    return (
        <div>
            {
                isLoading ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                    <div id='product-gallery'>
                        <div className='container'>
                            <div className='gallery-left'>
                                <div className='gallery-image-left'>
                                    <div className='gallery-image-left-top'>
                                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${img1}`} onClick={() => setSelectedImg(`${process.env.REACT_APP_FILES_URL}/uploaded_files/${img1}`)} />
                                    </div>
                                    <div className='gallery-image-left-middle'>
                                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${img2}`} onClick={() => setSelectedImg(`${process.env.REACT_APP_FILES_URL}/uploaded_files/${img2}`)} />
                                    </div>
                                    <div className='gallery-image-left-bottom'>
                                        <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${img3}`} onClick={() => setSelectedImg(`${process.env.REACT_APP_FILES_URL}/uploaded_files/${img3}`)} />
                                    </div>
                                </div>
                                <div className='gallery-image-main'>
                                    <div className='gallery-selected'>
                                        <img src={selectedImg} />
                                    </div>
                                </div>
                            </div>
                            <div className='gallery-right'>
                                {
                                    cartMessage ? <span className='cart-message' style={{ marginLeft: "10px", fontSize: "14px", backgroundColor: "lightgrey", color: "forestgreen", padding: "5px 10px" }}>{cartMessage}</span> : ""
                                }
                                <div className='gallery-right-inner'>
                                    <div className='gallery-title'>
                                        <h2>{name}</h2>
                                    </div>
                                    <div className='gallery-rating'>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div className='gallery-prices'>
                                        <div className='color'>
                                            <h3 style={{ marginRight: '5px' }}>Price:</h3>
                                        </div>
                                        <div className='price'>
                                            <h4>₦{discount}</h4>
                                        </div>
                                        <div className='discount'>
                                            <h4>₦{price}</h4>
                                        </div>
                                    </div>
                                    <div className='color'>
                                        <h3>Color: <span>Black</span></h3>
                                    </div>
                                    <div className='gallery-desc'>
                                        <p>
                                            {short_desc}
                                        </p>
                                    </div>
                                    <div className='cart-wishlist'>
                                        <div className='cart'>
                                            <button onClick={() => addToCart(item)}>Add To Cart</button>
                                        </div>
                                        <div className='wishlist'>
                                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className='gallery-category'>
                                        <h3>Category: <span>{category}</span></h3>
                                    </div>
                                    <div className='gallery-tags'>
                                        <h3>Tags: </h3>
                                    </div>
                                    <div className='gallery-social-icons'>
                                        <h3>
                                            Share:
                                            <span>
                                                <i class="fa fa-facebook face" aria-hidden="true"></i>
                                                <i class="fa fa-instagram inst" aria-hidden="true"></i>
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>

    )
}

export default ProductGallery;
