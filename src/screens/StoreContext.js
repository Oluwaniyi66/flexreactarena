import React from "react";
import { createContext, useEffect } from "react";
import { useState } from "react";   
import axios from "axios";  

// Creating a new context 
export const StoreContext = createContext();    
 
// Creating a provider for the context you just created. This is what will be exported as default.  
const StoreContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]); 
    const [allProducts, setAllProducts] = useState([]);
    const [allProductStatus, setAllProductStatus] = useState([]);
    const [allBlogs, setAllBlogs] = useState([]);
    const [allFaqs, setAllFaqs] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true); // Handle Loading For Home Header
    const [isLoading2, setIsLoading2] = useState(true); // Handle Loading For all tabs in Featured section
    const [isLoading3, setIsLoading3] = useState(true);  // Handle Loading For Unique Feature
    const [isLoading4, setIsLoading4] = useState(true);  // Handle Loading For Blogs
    const [isLoading5, setIsLoading5] = useState(true);  // Handle Loading For Faqs
    const [isLoading6, setIsLoading6] = useState(true);  // Handle Loading For single blog
    const [total, setTotal] = useState(0);
    const [qtyGlobal, setQtyGlobal] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");  // Handle search box in the shop page
    const [isLoggedIn, setIsLoggedIn] = useState(""); // Handle User authentication.
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [sorts, setSorts] = useState("");
    const [blogSubContent, setBlogSubcontent] = useState([]); // For the offer products, recent post... on the blog page
    const [isLoading7, setIsLoading7] = useState(true); // Handle loading for blogsubcontents
    const [blogSearchTerm, setBlogSearchTerm] = useState(""); // Handles search for the blogs
    const [searchTerm2, setSearchTerm2] = useState("");  // Handles search bar in the super store
    const [searchTerm3, setSearchTerm3] = useState("");  // Handles the checkbox filter in the super store
    const [favorites, setFavorites] = useState([]);

    // Get All Products From Laravel Database 
    const getAllProducts = async () => {
        await axios
            .get(`${process.env.REACT_APP_API}/all_products`)
            .then(res => {
                localStorage.setItem('all-products', JSON.stringify(res.data))
                setAllProducts(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    // Get All Blogs From Laravel Database 
    const getAllBlogs = async () => {
        await axios
            .get(`${process.env.REACT_APP_API}/all_blogs`)
            .then(res => {
                localStorage.setItem('all-blogs', JSON.stringify(res.data))
                setAllBlogs(res.data);
                setIsLoading(false);
                setIsLoading4(false);
            })
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    // Getting all the products by their statuses [featured, trending, best_seller, special_offer, top_category, new_arrival]
    const getAllProductStatus = async () => {

        await axios
            .get(`${process.env.REACT_APP_API}/all_product_status`)
            .then(res => {
                localStorage.setItem('all-product-status', JSON.stringify(res.data))
                setAllProductStatus(res.data)
                setIsLoading2(false)
                setIsLoading3(false)
            })
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    // Get All Faqs From Laravel Database 
    const getAllFaqs = async () => {

        await axios
            .get(`${process.env.REACT_APP_API}/all_faqs`)
            .then(res => {
                localStorage.setItem('all-faqs', JSON.stringify(res.data))
                setIsLoading5(false);
                setAllFaqs(res.data);
            })
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    // Get Blog Subcontents to be displayed for featured products and latest blogs on the blog page
    const getBlogSubContents = async () => {
        await axios
            .get(`${process.env.REACT_APP_API}/blog_subcontents`)
            .then(res => {
                localStorage.setItem('blog-subcontents', JSON.stringify(res.data))
                setBlogSubcontent(res.data);
                setIsLoading7(false)
            })
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    // UseEffect runs immediately the page is loaded/reloaded/rendered to the screen
    useEffect(() => {
        getAllProducts();
        getAllBlogs()
        getAllProductStatus();
        getAllFaqs();
        getBlogSubContents();

        if (localStorage.getItem('cart') != null) {
            let old_data = JSON.parse(localStorage.getItem('cart'));
            let totalNow = old_data.reduce((currentTotal, item) => {
                return currentTotal + item.price
            }, 0);
            setTotal(totalNow);
            setCart(old_data)
        }
    }, []);

    const reservoir = [
        cartCount,
        setCartCount,
        cart,
        setCart,
        allProducts,
        allBlogs,
        allProductStatus,
        isLoading,
        isLoading2,
        isLoading3,
        total,
        setTotal,
        qtyGlobal,
        setQtyGlobal,
        searchTerm,
        setSearchTerm,
        isLoggedIn,
        setIsLoggedIn,
        loggedInUser,
        setLoggedInUser,
        getAllProducts,
        getAllProductStatus,
        getAllBlogs,
        isLoading4,
        allFaqs,
        isLoading5,
        isLoading6,
        setIsLoading6,
        sorts,
        setSorts,
        blogSubContent,
        setBlogSubcontent,
        isLoading7,
        setIsLoading7,
        blogSearchTerm,
        setBlogSearchTerm,
        searchTerm2,
        setSearchTerm2,
        searchTerm3,
        setSearchTerm3,
        favorites,
        setFavorites,
    ];

    return (
        <StoreContext.Provider value={reservoir}>
            {children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;  