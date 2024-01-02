import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div className="container footer-container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-item footer-item-1">
            <div className="footer-brandname">
              <h2>Flex</h2>
              {/* <div>
                                <input type="text" placeholder="Enter Email Address" />
                                <button className="btn px-3">Sign Up</button>
                            </div> */}
            </div>
            <div className="contact-info">
              {/* <h3 className="footer-header info-header">Contact Info:</h3> */}
              <p className="info-content">
                <b>Address:</b> 49, Wellington Street, Sheffield, S1 4HG,  United
                Kingdom.
              </p>
              <p className="info-content">
                <b>Phone:</b> 07823784575
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-item hideSmall">
            <div className="footer-header">
              <h3>Categories</h3>
            </div>
            <div className="footer-contents">
              <a href="">
                <p>Laptops & Computers</p>
              </a>
              <a href="">
                <p>Cameras & Photography</p>
              </a>
              <a href="">
                <p>Smartphones & Tablets</p>
              </a>
              <a href="">
                <p>Videogames & Consoles</p>
              </a>
              <a href="">
                <p>Waterproof Headphones</p>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-item hideSmall">
            <div className="footer-header">
              <h3>Customer Care</h3>
            </div>
            <div className="footer-contents">
              <a href="">
                <p>My Account</p>
              </a>
              <a href="">
                <p>Discount</p>
              </a>
              <a href="">
                <p>Returns</p>
              </a>
              <a href="">
                <p>Orders History</p>
              </a>
              <a href="">
                <p>Order Tracking</p>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-item hideSmall">
            <div className="footer-header">
              <h3>Pages</h3>
            </div>
            <div className="footer-contents">
              <a href="">
                <p>Blog</p>
              </a>
              <a href="">
                <p>Browse The Shop</p>
              </a>
              <a href="">
                <p>Categories</p>
              </a>
              <a href="">
                <p>Pre-built Pages</p>
              </a>
              <a href="">
                <p>Woocommerce Pages</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
