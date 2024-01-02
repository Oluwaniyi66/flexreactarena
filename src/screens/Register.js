import React, { useContext } from "react";
import { StoreContext } from "./StoreContext";
import Header from "../components/Header";
import TopFooter from "../components/TopFooter";
import RegisterPage from "../components/register-components/RegisterPage";

function Register() {
  const myContext = useContext(StoreContext);
  const allProducts = myContext[4];

  return (
    <div>
      {allProducts.length > 0 ? (
        <div>
          {/* HEADER STARTS HEADER STARTS */}

          <Header
            id="5"
            title="Flex Store"
            subtitle="Register"
            image="/assets/order-images/avatar3.svg"
          />

          {/* HEADER ENDS HEADER ENDS */}

          {/* LOGIN FORM STARTS LOGIN FORM STARTS */}

          <RegisterPage />

          {/* LOGIN FORM ENDS LOGIN FORM ENDS */}

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

export default Register;
