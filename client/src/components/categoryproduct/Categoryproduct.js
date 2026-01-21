import React, { useContext, useEffect } from "react";
import "./categoryproduct.css";
// import { Products } from "../../productjson";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { Apicontext } from "../context/Apicontext";
import Pages from "../pages/Pages";
const Categoryproduct = () => {
  const { categoryid } = useParams();
  const {
    Products,
    setProducts,
    setcurrentpage,
    settotalpages,
    fetchProducts,
  } = useContext(Apicontext);
  useEffect(() => {
    fetchProducts(1, categoryid);
  }, [categoryid]);
  console.log("categoryproductssssssss", Products);

  return (
    <div>
      <div className="forproducts">
        {Products.map((product) => {
          //  if (product.categoryid == categoryid)
          return (
            <div className="all">
              <div key={product.id} className="home-product">
                <Link to={`/productcart/${product.id}`}>
                  {" "}
                  <img alt="" src={product.photo} />{" "}
                </Link>
              </div>
              <div className="homep-name">
                <p>{product.name}</p>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p>Rs. {product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Pages
        onChange={(page) => {
          fetchProducts(page, categoryid);
        }}
      />
      <Footer />
    </div>
  );
};

export default Categoryproduct;
