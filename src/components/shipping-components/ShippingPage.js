import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './shipping.css';
import { usePaystackPayment } from 'react-paystack';
import { StoreContext } from '../../screens/StoreContext';


function ShippingPage() {

    const navigate = useNavigate();
    let customerCart = JSON.parse(localStorage.getItem('cart'));
    let user = JSON.parse(localStorage.getItem('user'));
    const [message, setMessage] = useState("");
    const myContent = useContext(StoreContext);
    // const setCart = myContent[3];
    // const setQtyGlobal = myContent[13];

    // Function to get the overall price of items purchased.
    function totalPrice() {
        let getCart = JSON.parse(localStorage.getItem('cart'));
        let new_tot = getCart.reduce((a, b) => a + parseInt(b.discount) * b.qty, 0);
        return new_tot;
    }

    // If user is not logged in, he should not be able to access the shipping page
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/register')
        }
    }, [])


    // This is the function that triggers when the back to shop button is clicked.
    const toShop = () => {
        navigate('/shop')
    }

    // This is the object that holds all our state
    const [customer, setCustomer] = useState({
        "email": "",
        "first_name": "",
        "last_name": "",
        "phone_number": "",
        "address": "",
        "country": "",
        "city": "",
        "postal_code": ""
    })

    // This function updates the state of each input
    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }

    // This function handles the form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        checkUser();
    }

    // This function checks to be sure that only a logged-in user can make payment.
    const checkUser = () => {
        if (localStorage.getItem('user') == null) {
            navigate('/register');
        } else if (customer.email == "" || customer.first_name == "" || customer.last_name == "" || customer.address == "" || customer.city == "" || customer.country == "" || customer.postal_code == "" || customer.phone_number == "") {
            setMessage("Please fill in all fields.")
            return false;
        } else {
            //This is the point to trigger the paystack
            // alert("You've checked out.")
            setMessage("");
            initializePayment(onSuccess, onClose)
            setCustomer({
                "email": "",
                "first_name": "",
                "last_name": "",
                "phone_number": "",
                "address": "",
                "country": "",
                "city": "",
                "postal_code": ""
            })
        }
    }

    // PAYSTACK SECTION PAYSTACK SECTION 
    const config = {
        reference: new Date().getTime(),
        email: customer.email,
        amount: (totalPrice() * 100),
        publicKey: 'pk_test_61aa8bd724dfc4a819d7509accd9371d45fc81b9',
    };

    // you can call this function anything
    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.

        customerCart.map(item => {
            const payload = {
                user_id: user.id,
                product_id: item.id,
                product_qty: item.qty,
                product_price: parseInt(item.price),
                product_total: (item.price * item.qty),
                reference_num: reference.reference,
                transaction_num: reference.transaction,
                status: "SUCCESS",
                email: `${customer.email}`,
                first_name: `${customer.first_name}`,
                last_name: `${customer.last_name}`,
                address: `${customer.address}`,
                phone_number: `${customer.phone_number}`,
                city: `${customer.city}`,
                country: `${customer.country}`,
                postal_code: `${customer.postal_code}`,
                amount: (totalPrice() * 100),
            } 

            fetch(`${process.env.REACT_APP_API}/add_items_bought`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                    "Accept": "Application/json"
                },
                body: JSON.stringify(payload)
            })
                .then(response => response.json())
                .then(json => {
                    if (json.status == 'success') {
                        console.log(json)
                        localStorage.setItem('orderDetails', JSON.stringify(json.orderDetails));
                        localStorage.setItem('order', JSON.stringify(json.order));
                        navigate('/order-completed');
                        // setTimeout(() => {
                        //     navigate('/order-completed'); 
                        // }, 2000);
                        // setCart([]);
                        // setQtyGlobal(0);
                        // localStorage.removeItem('cart');
                    }
                })
        })

    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    // Using the UsePaytackPayment hook by initializing it.
    const initializePayment = usePaystackPayment(config);


    return (
        <div>
            <div id='shipping'>
                <div className='container'>
                    <form onSubmit={handleSubmit} encType=''>
                        <div className='shipping-box'>
                            <div className='shipping-left'>
                                <div className='shipping-section-1'>
                                    <div className='form-header-1'>
                                        <h2>Contact Information</h2>
                                        <p>Still Wanna shop? <span onClick={toShop}>BACK TO SHOP</span></p>
                                    </div>
                                    <div className='form-group-large'>
                                        <input
                                            type="text"
                                            placeholder='Email'
                                            name='email'
                                            value={customer.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='checkbox-area'>
                                        <input type="checkbox" />
                                        <div className='shipping-offer'>
                                            <p>Keep me up to date on news and exclusive offer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='shipping-section-2'>
                                    <div className='shipping-header'>
                                        <div className="form-header-1">
                                            <h2>Shipping Address</h2>
                                        </div>
                                        {
                                            message == "" ? "" :
                                                <div >
                                                    <h6 style={{ backgroundColor: 'white', color: "brown", padding: "5px 10px", textAlign: "center" }}><b>{message}</b></h6>
                                                </div>
                                        }
                                    </div>
                                    <div className='form-group-small'>
                                        <div className='form-group'>
                                            <input
                                                type="first_name"
                                                placeholder='First Name'
                                                name='first_name'
                                                value={customer.first_name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input
                                                type="last_name"
                                                placeholder='Last Name'
                                                name='last_name'
                                                value={customer.last_name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-group-large'>
                                        <input
                                            type="text"
                                            placeholder='Address'
                                            name='address'
                                            value={customer.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='form-group-small'>
                                        <div className='form-group'>
                                            <input
                                                type="text"
                                                placeholder='Country'
                                                name='country'
                                                value={customer.country}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input
                                                type="text"
                                                placeholder='City'
                                                name='city'
                                                value={customer.city}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-group-small'>
                                        <div className='form-group'>
                                            <input
                                                type="text"
                                                placeholder='Postal Code'
                                                name='postal_code'
                                                value={customer.postal_code}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input
                                                type="tel"
                                                placeholder='Phone Number'
                                                name='phone_number'
                                                value={customer.phone_number}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shipping-right'>
                                <div className='shipping-items'>
                                    {
                                        customerCart != null ? <div>
                                            {
                                                customerCart.map((prod) => (
                                                    <div className='shipping-item' key={prod.id}>
                                                        <div className='shipping-item-image'>

                                                            <img 
                                                                src={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${prod.image}`}
                                                            />
                                                        </div>
                                                        <div className='shipping-item-text'>
                                                            <div className='item-name'>
                                                                <h4>{prod.name}</h4>
                                                                <h5>Color: <span>Red</span></h5>
                                                                <h5>Size: <span>XM</span></h5>
                                                            </div>
                                                        </div>
                                                        <div className='shipping-price'>
                                                            <h6>#{prod.price}</h6>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div> : "You have no product in your cart"
                                    }


                                </div>
                                <div className='shipping-calculations'>
                                    <div className='shipping-price-box'>
                                        <div className='shipping-subtotal-header'>
                                            <h4>Subtotal:</h4>
                                        </div>
                                        <div className='shipping-subtotal'>
                                            <h4>#{totalPrice()}</h4>
                                        </div>
                                    </div>
                                    <div className='shipping-price-box'>
                                        <div className='shipping-subtotal-header'>
                                            <h4>Total:</h4>
                                        </div>
                                        <div className='shipping-subtotal'>
                                            <h4>#{totalPrice() + 10}</h4>
                                        </div>
                                    </div>
                                    <div className='shipping-tax'>
                                        <input type="checkbox" />
                                        <div className='shipping-offer'>
                                            <p>Shipping and Taxes calculated on checkout</p>
                                        </div>
                                    </div>
                                    <div className='shipping-checkout-btn'>
                                        <button type='submit'>PROCEED TO CHECKOUT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ShippingPage;
