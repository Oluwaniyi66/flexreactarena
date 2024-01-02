import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Cart from './Cart';
import './cartstyles.css';


function Carts({}) { 

    const navigate = useNavigate(); 
    const favoritesLocal = JSON.parse(localStorage.getItem('favorites')) || []; 
    
    // Function that clears the cart
    const handleClear = () => { 
        localStorage.removeItem('favorites'); 
        navigate('/wishlist')
    } 

    // This function takes care of the update cart button so it sends you back to the shop page 
    const handleUpdate = () => {
        navigate('/super-store')
    }

    return (
        <div>
            {
                favoritesLocal.length > 0 ? 
                <div className='container' id='cart'>
                    <div className='left'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                </tr> 
                            </thead>
                            <tbody>
                                {
                                    favoritesLocal.map((prod) => (
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
                                    <Button text="Update Wishlist"  />
                                </div>
                                <div>
                                    <Button text='Clear Wishlists' handleClear={ handleClear } />
                                </div>
                        </div>
                    </div>
                </div>

                : <div className='container' style={{ textAlign: 'center', color: 'indigo', margin: "5% auto" }}><h4>You have no products in your wishlists.</h4></div>
            }
        </div>
    )
}

export default Carts;
