import React from 'react';


function PreviewLeftSect2() {
    
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails')) || [];
    const order = JSON.parse(localStorage.getItem('order')) || [];
    const fullName = orderDetails.customer_first_name + " " + orderDetails.customer_last_name ; 

    return (
        <div className='preview-left-sect-2'>
            <div className='preview-sect-1-right'>
                <div className=''>
                    <h4>Payment Info(Customer's Details):</h4>
                </div>
                <div className='client-details-left'>
                    <div className='client-name client'> 
                        <h6>Name</h6>
                        <p>{ orderDetails.customer_first_name ? fullName : "Full Name" }</p>
                    </div>
                    <div className='client-address client'>
                        <h6>Email</h6>
                        <p>{ orderDetails.customer_email ? orderDetails.customer_email : 'Email' }</p>
                    </div>
                    <div className='client-email client'>
                        <h6>Address</h6>
                        <p>{ orderDetails.customer_address ? orderDetails.customer_address : "Address" }</p>
                    </div>
                    <div className='client-phone client'>
                        <h6>Phone Number</h6>
                        <p>{ orderDetails.customer_phone_num ? orderDetails.customer_phone_num : "Phone Number" }</p>
                    </div>
                    <div className='client-phone client'>
                        <h6>Transaction ID</h6>
                        <p>{ order.transaction_num ? order.transaction_num : "Transaction Number" }</p>
                    </div>
                    <div className='client-phone client'>
                        <h6>Reference Number</h6>
                        <p>{ order.reference_num ? order.reference_num : "Reference Number" }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewLeftSect2;
