import React from 'react'; 
import { useNavigate } from 'react-router-dom';


function PreviewLeftSect4() {
    const navigate = useNavigate()

    // Check if the user has successfully paid for his/her order else the user can't visit this page.
    // if (document.referrer !== 'order-completed') { 
    //     navigate('/shop')
    // }

    const total = () => {
        let getCart = JSON.parse(localStorage.getItem('cart'));
        let new_tot = getCart.reduce((a, b) => a + parseInt(b.price) * parseInt(b.qty), 0);  
        return new_tot;
    }

    let discount = total() * 0.05;
    let tax = total() * 0.02;
    let grandTotal = total() - discount + tax;


    return (
        <div className='preview-left-sect-4'>

            <div className='table-calculations'>
                <div className='preview-calc-item'>
                    <h4>SubTotal</h4>
                    <p>${ total() }</p>
                </div>
                <div className='preview-calc-item'>
                    <h4>Tax Amount(2%)</h4>
                    <p>${ tax }</p>
                </div>
                <div className='preview-calc-item'>
                    <h4>Discount(5%)</h4>
                    <p>${ parseFloat(discount.toFixed(2)) }</p>
                </div>
                <div className='preview-calc-item'>
                    <h4>GrandTotal</h4>
                    <p>${ grandTotal }</p>
                </div>
            </div> 
        </div>
    )
}

export default PreviewLeftSect4;
