import React from "react";
import "./Homeproduct.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Products } from "../../productjson";
import Pages from "../pages/Pages";
import { Apicontext } from "./../context/Apicontext";
const HomeProduct = () => {
  const { Products, fetchProducts } = useContext(Apicontext);
  useEffect(() => {
    fetchProducts(1);
  }, []);
  return (
    <div className="main-home">
      <h3>Our Most Be Loved Product</h3>

      <div className="forproducts">
        {Products.map((product) => {
          return (
            <Link to={`/productcart/${product.productId}`}>
              <div key={product.productId} className="all">
                <div className="home-product">
                  <img alt={product.name} src={product.photo} />
                </div>
                <div className="homep-name">
                  <p>{product.name}</p>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <p> Rs. {product.price}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <Pages
        onChange={(page) => {
          fetchProducts(page);
        }}
      />
    </div>
  );
};

export default HomeProduct;
