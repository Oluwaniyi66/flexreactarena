import React, { useContext, useState } from "react";
import Header from "../components/Header";
import TopFooter from "../components/TopFooter";
import ProductDetail from "../components/productdeatils-components/ProductDetail";
import RelatedProducts from "../components/productdeatils-components/RelatedProducts";
import ProductGallery from "../components/productdeatils-components/ProductGallery";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { StoreContext } from "./StoreContext";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { prod_id } = useParams();
  const myContext = useContext(StoreContext);
  const allProducts = myContext[4];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/all_products/${prod_id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {allProducts.length > 0 ? (
        <div>
          {/* HEADER STARTS HEADER STARTS */}
          <div>
            {loading ? (
              <div style={{ textAlign: "center" }}>Loading...</div>
            ) : (
              <Header
                id={allProducts[1].id}
                title="Flex Store"
                subtitle="Product-details"
                image={`${process.env.REACT_APP_FILES_URL}/uploaded_files/${allProducts[1].image}`}
              />
            )}
          </div>

          {/* HEADER ENDS HEADER ENDS */}

          {/* PRODUCT GALLERY STARTS PRODUCT GALLERY STARTS */}

          <div>
            {loading ? (
              <div style={{ textAlign: "center" }}>Loading...</div>
            ) : (
              <ProductGallery
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                discount={product.discount}
                category={product.category}
                short_desc={product.short_desc}
                img1={product.img_alt1}
                img2={product.img_alt2}
                img3={product.img_alt3}
                vid_url={product.video}
                item={product}
              />
            )}
          </div>

          {/* PRODUCT GALLERY ENDS PRODUCT GALLERY ENDS */}

          {/* TABS STARTS TABS STARTS */}

          <ProductDetail />

          {/* TABS ENDS TABS ENDS */}

          {/* RELATED PRODUCTS STARTSRELATED PRODUCTS STARTS */}

          {/* <RelatedProducts /> */}

          {/* RELATED PRODUCTS ENDS RELATED PRODUCTS ENDS */}

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

export default ProductDetails;
