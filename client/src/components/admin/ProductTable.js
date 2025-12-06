import React, { useState, useEffect, useContext } from "react";
import "./ProductTable.css";

import Category from "./Category";
import Product from "./Product";
import { Apicontext } from "../context/Apicontext";

const ProductTable = ({ options }) => {
  const [updateproducts, setupdate] = useState(false);
  const { setaddp, setProducts, addp, Products, fetchProducts } =
    useContext(Apicontext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          {options === "categories" ? (
            <tr>
              <th>Categoryid</th>
              <th>Category-name </th>
              <th>Actions</th>
            </tr>
          ) : (
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Categoryid</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          )}
        </thead>

        <tbody>
          {options === "categories" ? (
            // <Category addp={addp} setaddp={setaddp} />
            <Category updateproducts={updateproducts} setupdate={setupdate} />
          ) : (
            <Product
              Products={Products}
              addp={addp}
              setaddp={setaddp}
              setProducts={setProducts}
              updateproducts={updateproducts}
              setupdate={setupdate}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
