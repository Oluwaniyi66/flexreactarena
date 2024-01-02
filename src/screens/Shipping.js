import React, { useContext } from 'react';
import { StoreContext } from './StoreContext';
import ShippingPage from '../components/shipping-components/ShippingPage';
import Header2 from '../components/Header2';

function Shipping() {
    const myContext = useContext(StoreContext);
    const allProducts = myContext[4];

    return (
        <div>
            {
                allProducts.length > 0 ?
                    <div>
                        <Header2 subtitle="Shipping" />
                        <ShippingPage /> 
                    </div> : <div style={{ textAlign: 'center' }}>Loading...</div>
            }

        </div>
    )
}

export default Shipping;
