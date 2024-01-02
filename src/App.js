import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './screens/About';
import Blog from './screens/Blog';
import Contact from './screens/Contact';
import Error from './screens/Error';
import Faq from './screens/Faq';
import Grid from './screens/Grid';
import Home from './screens/Home';
import List from './screens/List';
import Login from './screens/Login';
import OrderCompleted from './screens/OrderCompleted';
import ProductDetails from './screens/ProductDetails';
import Register from './screens/Register';
import Shop from './screens/Shop';
import ShoppingCart from './screens/ShoppingCart';
import BlogSingle from './screens/BlogSingle';
import CreateProduct from './screens/CreateProduct';
import StoreContextProvider from './screens/StoreContext';
import Shipping from './screens/Shipping';
import SuperShop from './screens/SuperShop';
import WishList from './screens/WishList';
import PreviewInvoice from './components/invoice-components/PreviewInvoice';
import ModalPage from './wilok/pages/ModalPage';



function App() {

  return (
    <div> 
      <BrowserRouter>
        <StoreContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/list" element={<List />} />
            <Route path="/grid" element={<Grid />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product-details/:prod_id" element={<ProductDetails />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/order-completed" element={<OrderCompleted />} /> 
            <Route path="/404" element={<Error />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blog_id" element={<BlogSingle />} />
            <Route path="/create_product" element={<CreateProduct />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/super-store" element={<SuperShop />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/receipt" element={<PreviewInvoice />} />
          </Routes>
          <Footer />

          {/* <Routes>
            <Route path="/wilok" element={<ModalPage />} />
          </Routes> */}
        </StoreContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
