import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../screens/StoreContext';
import Button from './Button';
import Calculations from './Calculations';
import Cart from './Cart';
import './cartstyles.css';

function Carts({ }) {

    const [cartCount, setCartCount] = useContext(StoreContext);
    const myContent = useContext(StoreContext);
    const cart = myContent[2];
    const setCart = myContent[3];
    const total = myContent[10];
    const setQtyGlobal = myContent[13];
    const navigate = useNavigate();

 
    // Function that clears the cart
    const handleClear = () => {
        setCartCount(0);
        setQtyGlobal(0);
        setCart([]);
        localStorage.removeItem('cart');
        localStorage.removeItem('orderDetails');
        localStorage.removeItem('order');
    }

    // This function takes care of the update cart button so it sends you back to the shop page
    const handleUpdate = () => {
        navigate('/shop')
    }


    return (
        <div>
            {
                cart.length > 0 ?
                    <div className='container' id='cart'>
                        <div className='left'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((prod) => (
                                            <Cart
                                                key={prod.id}
                                                id={prod.id}
                                                name={prod.name}
                                                image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${prod.image}`}
                                                price={prod.discount}
                                                item={prod}
                                            />
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div className='cart-options'>
                                <div onClick={handleUpdate}>
                                    <Button text="Update Cart" />
                                </div>
                                <div>
                                    <Button text='Clear Cart' handleClear={handleClear} />
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <Calculations
                            />
                        </div>
                    </div>

                    : <div className='container' style={{ textAlign: 'center', color: 'indigo', margin: "5% auto" }}><h4>You have no products in your cart.</h4></div>
            }
        </div>
    )
}

export default Carts;
