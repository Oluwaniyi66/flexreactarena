import React, { useContext } from "react";
import { StoreContext } from "./StoreContext";
import Header from "../components/Header";
import FaqPage from "../components/faq-components/FaqPage";
import TopFooter from "../components/TopFooter";

function Faq() {
  const myContext = useContext(StoreContext);
  const allProducts = myContext[4];

  return (
    <div>
      {allProducts.length > 0 ? (
        <div>
          {/* HEADER STARTS HEADER STARTS */}
          <Header
            id="3"
            title="Flex Store"
            subtitle="FAQ"
            image="/assets/faq-images/faq7.webp"
          />
          {/* HEADER ENDS HEADER ENDS */}

          {/* FAQ PAGE  */}
          <FaqPage />
          {/* FAQ PAGE  */}

          {/* TOP FOOTER  */}
          <TopFooter />
          {/* TOP FOOTER  */}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>Loading..</div>
      )}
    </div>
  );
}

export default Faq;
