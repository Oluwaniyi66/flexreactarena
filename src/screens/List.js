import React, { useContext } from "react";
import "../App.css";
import Header from "../components/Header";
import SortArea from "../components/SortArea";
import Products from "../components/list-components/Products";
import TopFooter from "../components/TopFooter";
import { StoreContext } from "./StoreContext";

function List() {
  const myContext = useContext(StoreContext);
  const allProducts = myContext[4];
  const isLoading = myContext[7];

  return (
    <div>
      {allProducts.length > 0 ? (
        <div>
          {/* HEADER STARTS HEADER STARTS */}
          {isLoading ? (
            <div style={{ textAlign: "center", marginTop: "5%" }}>
              <h2>Loading...</h2>
            </div>
          ) : (
            <Header
              id={allProducts[8].id}
              title="Flex Store"
              subtitle="List"
              image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[8].image}`}
            />
          )}

          {/* HEADER ENDS HEADER ENDS */}

          {/* SORTAREA STARTS SORTAREA STARTS */}

          <SortArea />

          {/* SORTAREA ENDS SORTAREA ENDS */}

          {/* PRODUCTS STARTS PRODUCTS STARTS */}

          <Products />

          {/* PRODUCTS ENDS PRODUCTS ENDS */}

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

export default List;
