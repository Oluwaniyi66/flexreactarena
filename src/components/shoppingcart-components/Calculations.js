import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './cartstyles.css';

function Calculations() {


    function totalPrice() {
        let getCart = JSON.parse(localStorage.getItem('cart'));
        let new_tot = getCart.reduce((a, b) => a + parseInt(b.discount) * b.qty, 0); 
        return new_tot;
    } 
 

    return (
        <>
            <div className='top-section'>
                <div className='right-header'>
                    <h2>Cart Totals</h2>
                </div>
                <div className='cart-totals'>
                    <div className='cart sub-totals'>
                        <h4>Subtotals: </h4>
                        <h4>${totalPrice()}</h4>
                    </div>
                    <div className='cart totals'>
                        <h4>Totals: </h4>
                        <h4>${totalPrice() + 10}</h4>
                    </div>
                    <div className='cart shipping-tax'>
                        <input type='checkbox' />
                        <p>Shipping and taxes calculated at checkout.</p>
                    </div>
                    <div className='btn checkout'>
                        <Link to="/shipping">
                            <button>Proceed To Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='bottom-section'>
                <div className='right-header'>
                    <h2>Calculate Shipping</h2>
                </div>
                <div className='shipping details'>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='email' />
                    </div>
                    <div className='form-group'>
                        <label>Address</label>
                        <input type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Phone Number</label>
                        <input type='tel' />
                    </div>
                    <div className='btn shipping'>
                        <button>Calculate Shipping</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculations;
