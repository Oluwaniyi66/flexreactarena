import React, { useContext } from "react";
import BlogPage from "../components/blog-components/BlogPage";
import Header from "../components/Header";
import TopFooter from "../components/TopFooter";
import { StoreContext } from "./StoreContext";

function Blog() {
  const myContext = useContext(StoreContext);
  const isLoading = myContext[7];
  const allProducts = myContext[4];

  return (
    <div>
      {allProducts.length > 0 && !isLoading ? (
        <div>
          {/* HEADER STARTS HEADER STARTS */}
          <Header
            id={allProducts[8].id}
            title="Flex Store"
            subtitle="Blogs"
            image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[8].image}`}
          />

          {/* HEADER ENDS HEADER ENDS */}

          {/* BLOG START */}

          <BlogPage />

          {/* BLOG END  */}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>Loading..</div>
      )}
    </div>
  );
}

export default Blog;
