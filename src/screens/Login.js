import React, { useContext } from "react";
import Header from "../components/Header";
import TopFooter from "../components/TopFooter";
import LoginPage from "../components/login-components/LoginPage";
import { StoreContext } from "./StoreContext";

function Login() {
  const myContext = useContext(StoreContext);
  const allProducts = myContext[4];
  let isLoading = myContext[7];

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
              id={allProducts[7].id}
              title="Flex Store"
              subtitle="Login"
              image="/assets/error-images/login5.png"
            />
          )}

          {/* HEADER ENDS HEADER ENDS */}

          {/* LOGIN FORM STARTS LOGIN FORM STARTS */}

          <LoginPage />

          {/* LOGIN FORM ENDS LOGIN FORM ENDS */}

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

export default Login;
