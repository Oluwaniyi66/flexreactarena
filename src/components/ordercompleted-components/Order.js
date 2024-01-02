import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import './order.css';

function Order() {

    const navigate = useNavigate();

     // If user is logged in, he should not be able to access the shipping page
     useEffect(() => {
        if (!localStorage.getItem('orderDetails')) {
            navigate('/shop')            
        }
    }, [])  

 
    return (
        <div className='container' id='order'>
            <div className='icons'> 
                <div className='icon clock'>
                    <img src='/assets/order-images/clock2.png' />
                </div>
                <div className='icon complete'>
                    <img src='/assets/order-images/complete1.png' />  
                </div>
            </div>
            <div className='text'>
                <div className='title'>
                    <h2>Your Order Is Complete!</h2>
                    <p>
                        Thank you for your order! Your order is being processed and will be completed within 2-3
                        working days. You will receive an email confirmation email about the status of your order.
                    </p>
                </div>
                <div className='btn'>
                    <Link to="/shop"><a><button>Continue Shopping</button></a></Link>
                    <Link to="/receipt"><a><button>View Receipt</button></a></Link>
                </div>
            </div>
        </div>
    )
}

export default Order;
