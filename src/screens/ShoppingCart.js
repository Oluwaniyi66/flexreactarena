import React, { useContext } from "react";
import Header from "../components/Header";
import TopFooter from "../components/TopFooter";
import Carts from "../components/shoppingcart-components/Carts";
import { StoreContext } from "./StoreContext";

function ShoppingCart() {
  const myContext = useContext(StoreContext);
  const isLoading = myContext[7];
  const allProducts = myContext[4];

  return (
    <div>
      {allProducts.length > 0 ? (
        <div>
          {/* HEADER STARTS HEADER STARTS */}

          {isLoading ? (
            <div
              className="container"
              style={{ marginTop: "5%", textAlign: "center" }}
            >
              Loading...
            </div>
          ) : (
            <Header
              id={allProducts[3].id}
              title="Flex Store"
              subtitle="Shopping-cart"
              image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[3].image}`}
            />
          )}

          {/* HEADER ENDS HEADER ENDS */}

          {/* SECTION 3 STARTS SECTION 3 STARTS */}

          <Carts />

          {/* SECTION 3 ENDS SECTION 3 ENDS */}

          {/* SECTION 4 STARTS SECTION 4 STARTS */}

          <TopFooter />

          {/* SECTION 4 ENDS SECTION 4 ENDS */}

          {/* FOOTER STARTS FOOTER STARTS */}

          {/* <Footer /> */}

          {/* FOOTER ENDS FOOTER ENDS */}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>Loading..</div>
      )}
    </div>
  );
}

export default ShoppingCart;
