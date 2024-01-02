import React, { useContext } from "react";
import Section2 from "../components/contact-components/Section2";
import Section3 from "../components/contact-components/Section3";
import Header from "../components/Header";
import { StoreContext } from "./StoreContext";

function Contact() {
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
              id={allProducts[7].id}
              title="Flex Store"
              subtitle="Contact"
              image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[7].image}`}
            />
          )}
          {/* HEADER ENDS HEADER ENDS */}

          {/* SECTION 2 BEGINS  */}
          <Section2 />
          {/* SECTION 2 ENDS  */}

          {/* SECTION 3 BEGINS  */}
          <Section3 />
          {/* SECTION 3 ENDS  */}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>Loading..</div>
      )}
    </div>
  );
}

export default Contact;
