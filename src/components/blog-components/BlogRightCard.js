import React, { useContext, useEffect } from "react";
import BlogOfferProducts from "./BlogOfferProducts";
import BlogRecentPost from "./BlogRecentPost";
import BlogSaleProduct from "./BlogSaleProduct";
import { StoreContext } from "../../screens/StoreContext";

function BlogRightCard() {
  const myContext = useContext(StoreContext);
  const blogSubContent = myContext[30];
  const isLoading7 = myContext[32];
  const blogSearchTerm = myContext[34];
  const setBlogSearchTerm = myContext[35];

  const handleBlogSearch = (e) => {
    setBlogSearchTerm(e.target.value);
  };

  return (
    <div className="blog-right-card">
      <div className="search-box">
        <div className="search-header">
          <h2>Search</h2>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Search For Post"
            onChange={handleBlogSearch}
          />
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <div className="post-box">
        <div className="category-header">
          <h4>Categories</h4>
        </div>
        <div className="category-group">
          <div className="category-group-item">
            <p>Music (3)</p>
          </div>
          <div className="category-group-item">
            <p>Entertainment (6)</p>
          </div>
        </div>
        <div className="category-group">
          <div className="category-group-item">
            <p>Dance (1)</p>
          </div>
          <div className="category-group-item">
            <p>Comedy (4)</p>
          </div>
        </div>
        <div className="category-group">
          <div className="category-group-item">
            <p>Sport (7)</p>
          </div>
          <div className="category-group-item">
            <p>Politics (6)</p>
          </div>
        </div>
      </div>
      <div className="post-box">
        <div className="recent-post-header">
          <h4>Recent Posts</h4>
        </div>
        {isLoading7 ? (
          <div style={{ textAlign: "center", marginTop: "5%" }}>
            <h2>Loading...</h2>
          </div>
        ) : (
          blogSubContent.recent_blogs.data
            .filter((item) => {
              if (blogSearchTerm == "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(blogSearchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((post, index) => (
              <BlogRecentPost
                key={index}
                id={post.id}
                image={post.image}
                title={post.title}
                date={post.created_at}
              />
            ))
        )}
      </div>
      <div className="post-box hideSmallest">
        <div className="sale-product-header">
          <h4>Popular Posts</h4>
        </div>
        {isLoading7 ? (
          <div style={{ textAlign: "center", marginTop: "5%" }}>
            <h2>Loading...</h2>
          </div>
        ) : (
          blogSubContent.popular_blogs.data
            .filter((item) => {
              if (blogSearchTerm == "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(blogSearchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((prod, ind) => (
              <BlogSaleProduct
                key={ind}
                id={prod.id}
                image={prod.image}
                title={prod.title}
                date={prod.created_at}
              />
            ))
        )}
      </div>
      <div className="post-box hideSmall">
        <div className="offer-product-header">
          <h4>Offer Product</h4>
        </div>
        <div className="offer-product-group">
          {isLoading7 ? (
            <div style={{ textAlign: "center", marginTop: "5%" }}>
              <h2>Loading...</h2>
            </div>
          ) : (
            blogSubContent.offer_products.data
              .filter((item) => {
                if (blogSearchTerm == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(blogSearchTerm.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((prod, index) => (
                <BlogOfferProducts
                  key={index}
                  id={prod.id}
                  image={prod.image}
                  name={prod.name}
                  price={prod.discount}
                  discount={prod.price}
                />
              ))
          )}
        </div>
      </div>
      <div className="post-box hideSmall">
        <div className="social-media-header">
          <h4>Social media</h4>
        </div>
        <div className="social-media-group">
          <div className="social-media-icons">
            <a
              href="https://www.linkedin.com/in/oluwaniyiropo"
            >
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            
            <a href="https://www.twitter.com/oluwaniyiropo/">
              <i class="fa fa-twitter twit" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogRightCard;
