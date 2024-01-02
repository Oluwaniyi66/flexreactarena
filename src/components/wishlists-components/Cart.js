import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import './cartstyles.css';

function Cart({ id, name, image, price, item }) {

    const myContent = useContext(StoreContext);
    const subTotalSingle = item.qty * item.discount; 

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
                <h4>{ item.category }</h4>
            </td>
            <td className='total'>
                <h4>{ item.short_desc }</h4>
            </td>
        </tr>
    )
}

export default Cart;
