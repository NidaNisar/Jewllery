import React, { useState, useEffect, useContext } from "react";
import "./ProductTable.css";
import { Link, useNavigate } from 'react-router-dom';
import Category from "./Category";
import ProductS from "./ProductS";
import { Apicontext } from "../context/Apicontext";
import Ordershistory from "../orders/Ordershistory";
import { useLocation } from "react-router-dom";
const ProductTable = () => {
  const location= useLocation();
//  const  iscategory=location.path==='/categorylist'
  const { setaddp, setProducts, addp, Products, fetchProducts , options} =
    useContext(Apicontext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          {options === "/categorylist" || location.pathname==='/categorylist' ? (
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
          {location.pathname === "/categorylist"
  ? <Category />
  : <ProductS />}
          
        </tbody>
      </table>
     
    </div>
  );
};

export default ProductTable;
