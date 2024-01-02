import React, { useContext } from "react";
import Header from "../components/Header";
import SortArea from "../components/SortArea";
import Products from "../components/grid-components/Products";
import TopFooter from "../components/TopFooter";
import { StoreContext } from "./StoreContext";

function Grid() {
  const myContext = useContext(StoreContext);
  const allProducts = myContext[4];
  const isLoading = myContext[7];

  return (
    <div>
      {allProducts.length > 0 ? (
        <div>
          {/* SECTION 1 STARTS SECTION 1 STARTS */}
          {isLoading ? (
            <div style={{ textAlign: "center", marginTop: "5%" }}>
              <h2>Loading...</h2>
            </div>
          ) : (
            <Header
              id={allProducts[14].id}
              title="Flex Store"
              subtitle="Grid"
              image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[14].image}`}
            />
          )}
          {/* SECTION 1 ENDS SECTION 1 ENDS */}
          {/* SECTION 2 STARTS SECTION 2 STARTS  */}:{" "}
          <div style={{ textAlign: "center" }}>Loading..</div>
          <SortArea />
          {/* SECTION 2 ENDS SECTION 2 ENDS  */}
          {/* SECTION 3 STARTS SECTION 3 STARTS */}
          <Products />
          {/* SECTION 3 ENDS SECTION 3 ENDS */}
          {/* SECTION 4 STARTS SECTION 4 STARTS */}
          <TopFooter />
          {/* SECTION 4 ENDS SECTION 4 ENDS */}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>Loading..</div>
      )}
    </div>
  );
}

export default Grid;
