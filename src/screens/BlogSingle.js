import React, { useContext } from "react";
import Header from "../components/Header";
import SingleBlogPage from "../components/singleblog-components/SingleBlogPage";
import { StoreContext } from "./StoreContext";

function BlogSingle() {
  const myContext = useContext(StoreContext);
  const isLoading = myContext[7];
  const allProducts = myContext[4];

  return (
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
          id={allProducts[6].id}
          title="Flex Store"
          subtitle="Single-blog"
          image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[6].image}`}
        />
      )}

      {/* HEADER ENDS HEADER ENDS */}

      {/* SINGLE BLOG START */}

      <SingleBlogPage />

      {/* SINGLE BLOG ENDS */}
    </div>
  );
}

export default BlogSingle;
