import React, { useContext } from 'react';
import Section1 from '../components/supershop-cpmponents/Section1';
import { StoreContext } from './StoreContext';


function SuperShop() {
    const myContext = useContext(StoreContext);
    const allProducts = myContext[4];

    return (
        <div id='super-store'>
            {
                allProducts.length > 0 ? <Section1 /> : <div style={{ textAlign: 'center' }}>Loading..</div>
            }
        </div>
    )}

export default SuperShop;
