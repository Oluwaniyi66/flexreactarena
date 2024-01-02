import React from "react";

function Header2({ subtitle }) {
  return (
    <div id="main-header2">
      <div className="bars">
        <img src="/assets/home-images2/bars1.png" />
      </div>
      <div className="bars2">
        <img src="/assets/home-images2/bars1.png" />
      </div>
      <div className="addproduct-header">
        <div className="container">
          <div className="inner">
            <div className="middle">
              <div className="middle-inner">
                <h2>Flex Store</h2>
                <p>
                  Home.pages.<span>{subtitle}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;
