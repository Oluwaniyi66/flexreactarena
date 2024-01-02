import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import './cartstyles.css';

function Cart({ id, name, image, price, item }) {

    const myContent = useContext(StoreContext);
    const cart = myContent[2];
    const setCart = myContent[3];
    const total = myContent[10];
    const setTotal = myContent[11];
    const qtyGlobal = myContent[12];
    const setQtyGlobal = myContent[13];
    const subTotalSingle = item.qty * item.discount; 

    // Function that increments the qty of the product 
    const handleIncrement = (item) => {
        let old_data = cart;

        let index = old_data.indexOf(item);
        let new_item = old_data[index]

        old_data[index] = {
            ...item, qty: item.qty + 1
        }

        localStorage.setItem('cart', JSON.stringify(old_data));
        setCart(JSON.parse(localStorage.getItem('cart')))
    }

    // Function that decrements the qty of the product
    const handleDecrement = (item) => {

        let old_data = cart;
        let index = old_data.indexOf(item);

        if (item.qty===1) {
            let new_data = old_data.filter((prod, ind) => prod.id !== item.id)
            
            localStorage.setItem('cart', JSON.stringify(new_data));
            setCart(JSON.parse(localStorage.getItem('cart')))
            console.log('cart', old_data);

        } else {
            old_data[index] = {
                ...item, qty: item.qty - 1
            }
    
            localStorage.setItem('cart', JSON.stringify(old_data));
            setCart(JSON.parse(localStorage.getItem('cart')))
            console.log('cart', old_data);
        }
    }


    return (
        <tr>
            <td className='product'>
                <div className='image'>
                    <img src={image} />
                </div>
                <div className='text'>
                    <div className='title'>
                        <h3>{name}</h3>
                    </div>
                    <div className='color'>
                        <p>Color: <span>Brown</span></p>
                        <p>Size: <span>XL</span></p>
                    </div>
                </div>
            </td>
            <td className='price'>
                <h4>${price}</h4>
            </td>
            <td className='quantity'>
                <h4>{item.qty}</h4>
                <div className='cart-increment-btn'>
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <button onClick={() => handleIncrement(item)}>+</button>
                </div>
            </td>
            <td className='total'>
                <h4>${subTotalSingle}</h4>
            </td>
        </tr>
    )
}

export default Cart;
