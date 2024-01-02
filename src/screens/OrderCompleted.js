import React, { useContext } from "react";
import { StoreContext } from "./StoreContext";
import Header from "../components/Header";
import TopFooter from "../components/TopFooter";
import Order from "../components/ordercompleted-components/Order";

function OrderCompleted() {
  const myContext = useContext(StoreContext);
  const allProducts = myContext[4];

  return (
    <div>
      {allProducts.length > 0 ? (
        <div>
          {/* HEADER STARTS HEADER STARTS */}

          <Header
            id="4"
            title="Flex Store"
            subtitle="Order Completed"
            image="/assets/list-images/watch.png"
          />

          {/* HEADER ENDS HEADER ENDS */}

          {/* ORDER COMPLETED ORDER COMPLETED */}

          <Order />

          {/* ORDER COMPLETED ORDER COMPLETED */}

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

export default OrderCompleted;
