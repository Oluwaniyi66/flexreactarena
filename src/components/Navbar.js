import userEvent from "@testing-library/user-event";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { StoreContext } from "../screens/StoreContext";

function Navbar() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const myContext = useContext(StoreContext);
  const cart__from__context = myContext[2];
  const getAllProducts = myContext[19];
  const getAllProductStatus = myContext[20];
  const getAllBlogs = myContext[21];
  const activeUser = JSON.parse(localStorage.getItem("user"));
  const setSearchTerm2 = myContext[37];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    getAllBlogs();
    getAllProducts();
    getAllProductStatus();
  };

  useEffect(() => {
    const getcart = setTimeout(() => {
      const cart_items = JSON.parse(localStorage.getItem("cart"));

      setCart(cart_items);
    }, 500);
    return () => {
      clearTimeout(getcart);
    };
  }, [cart]);

  // This function takes care of our search box in the navbar.
  const handleSearch = (e) => {
    setSearchTerm2(e.target.value);
  };

  // Below checks to see if the user has a receipt for orders he's paid for and shows the receipt nav item
  const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
  const order = JSON.parse(localStorage.getItem("order"));

  // Logic to take user to the shop page when he/she clicks on search
  const takeToShop = () => {
    let searchInput = document.getElementsByClassName("searchInput");
    let searchInputValue = searchInput[0].value;

    if (searchInputValue.trim() != "") {
      navigate("/shop");
    }
    return;
  };

  return (
    <div id="mainNav">
      <div class="top-nav">
        <div class="top-navbar">
          <h2>Welcome</h2>
          <i class="fa fa-handshake-o" aria-hidden="true"></i>
          <p>"Experience Shopping At Its Peak..."</p>
        </div>
      </div>
      <div className="upper-header py-2">
        <div className="container">
          <div className="left">
            <div className="info-1 email">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              <p>oluwaniyiropo11@gmail.com</p>
            </div>
            <div className="info-2">
              <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
              <p>+447823784575</p>
            </div>
          </div>
          <div className="right">
            <div className="right-nav">
              <div className="credentials">
                {localStorage.getItem("user") ? (
                  <div id="user-btn">
                    <div className="sub-info" onClick={handleLogout}>
                      <span className="loggedInUser">
                        <p>{`${activeUser?.first_name}-${activeUser?.last_name}`}</p>
                        <i
                          class="fa fa-user-o text-white"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                  </div>
                ) : (
                  <Link to="/login">
                    <div className="sub-info login">
                      <a>
                        <p>Login</p>
                      </a>
                      <i class="fa fa-user-o text-white" aria-hidden="true"></i>
                    </div>
                  </Link>
                )}
                {activeUser ? (
                  <div id="user-btn">
                    <div className="sub-info" onClick={handleLogout}>
                      <a>
                        <p>Logout</p>
                      </a>
                      <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="credentials-inner">
                  <Link to="/wishlist">
                    <div className="sub-info px-1 wish">
                      <a>
                        <p>Wishlist</p>
                      </a>
                      <i
                        class="fa fa-heart-o text-white"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                  <Link to="/shopping-cart">
                    <div className="cart px-1">
                      <i
                        class="fa fa-shopping-cart text-white"
                        aria-hidden="true"
                      ></i>
                      <span className="cart-number">
                        {cart__from__context.qty == 0
                          ? 0
                          : cart__from__context.reduce((a, b) => a + b.qty, 0)}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="lower-header container navbar navbar-expand-lg navbar-light"
        id="navLower"
      >
        <Link to="/">
          <a className="navbar-brand">Flex</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li
              className="nav-item active"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              <Link to="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              <Link to="/shop">
                <a className="nav-link">Shop</a>
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              <Link to="/blog">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              <Link to="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            {activeUser ? (
              ""
            ) : (
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <Link to="/register">
                  <a className="nav-link">Register</a>
                </Link>
              </li>
            )}
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              <Link to="/faq">
                <a className="nav-link">FAQ</a>
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              <Link to="/super-store">
                <a className="nav-link">Super-Store</a>
              </Link>
            </li>
            {orderDetails && order ? (
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <Link to="/receipt">
                  <a className="nav-link">View Receipt</a>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          <form className="form-inline my-2 my-lg-0 searchBar">
            <input
              className="form-control mr-sm-2 searchInput"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
            />
            <div onClick={takeToShop} className="search-icon">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
