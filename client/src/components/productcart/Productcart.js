import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { Products ,categories} from '../../productjson'
import "./productcart.css";
import main13 from "../../pictures/main3.jpg";
import Footer from "../footer/Footer";
import Cartitem from "../cartitem/Cartitem";
import { Cartcontext } from "../context/Cartcontext";
import { useNavigate } from "react-router-dom";
import { Apicontext } from "../context/Apicontext";
const Productcart = () => {
  const {
    addToCart,
    count,
    increment,
    decrement,
    setcount,
    cartItems,
    getQuantity,
    product,
  } = useContext(Cartcontext);
  const { Products, categoriees, fetchProducts, fetchcategory } =
    useContext(Apicontext);
  useEffect(() => {
    fetchProducts();
    fetchcategory();
  }, []);
  const navigate = useNavigate();
  const { productId } = useParams();
  const products = Products.find((item) => item.productId === productId);
  if (!Products || Products.length === 0) {
    return <h2 style={{ padding: "20px" }}>Loading product...</h2>;
  }
  console.log("Products", products);
  const productupadte = product.find((item) => item.productId === productId);
  const category = categoriees.find(
    (item) => item.categoryid === products.categoryid
  );
  console.log("updateproduct", productupadte);
  console.log("category", categoriees);

  return (
    <div>
      <div className="cart-container">
        <div className="cart-pic">
          <img alt="" src={products.photo} />
        </div>
        <div className="cart-info">
          <h1>{products.name}</h1>
          <hr />
          <p>Category : {category.categoryname}</p>
          <hr />
          <h3>PKR {products.price}</h3>
          <div
            className={`stock-status ${
              products.stock > 10
                ? "in-stock"
                : products.stock > 0
                ? "low-stock"
                : "out-of-stock"
            }`}
          >
            {products.stock > 10
              ? `In Stock (${products.stock})`
              : products.stock > 0
              ? `Low Stock (${products.stock})`
              : "Out of Stock"}
          </div>
          <div className="buttons">
            <button className="increm">
              <div
                className="plus"
                onClick={() => increment(products.productId)}
              >
                +
              </div>
              <div className="number">{getQuantity(products.productId)}</div>
              <div
                className="minus"
                onClick={() => decrement(products.productId)}
              >
                -
              </div>
            </button>

            <Link
              to="/cartitem"
              className="addto"
              onClick={() => addToCart(productupadte)}
            >
              <p>Add to Cart</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productcart;
