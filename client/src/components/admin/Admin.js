import React, { useContext, useState, useEffect } from "react";
import logo1 from "../../pictures/logo1.png";
import "./Admin.css";
import ProductTable from "./ProductTable";
import Swal from "sweetalert2";
import { Apicontext } from "../context/Apicontext";
import { Link } from "react-router-dom";
import Ordershistory from "../orders/Ordershistory";
import Adminsidebar from "../../adminside/Adminsidebar";
const Admin = () => {
  const {
    options,
    form,
    setaddp,
    setoptions,
    setproduct,
    addp,
    product,
    sidebarOpen,
    setSidebarOpen,
    setForm,
    handleOptionChange,
    handlesubmit,
    handlechange,
    cform,
    setcform,
    categorychange,
    addcategory,
  } = useContext(Apicontext);

  return (
    <div className="admin-container">
      <div className="admin">
        <Adminsidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  options={options} handleOptionChange={handleOptionChange}/>
     
        <div className="second">
          <div className="productss">
            <div
              className="menu-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <i className="fa-solid fa-bars"></i>
            </div>

            <h2 className="product-h">Product</h2>
            <div className="admin-icons">
              <i class="fa-solid fa-magnifying-glass"></i>
              <i class="fa-regular fa-bell"></i>
            </div>
          </div>
          <div className="product-list">
            <h2>{options === "categories" ? "Categories" : "Products-list"}</h2>
            <div className="products-button">
              <div className="filter">
                <i class="fa-solid fa-filter"></i>
                Filter
              </div>
              <div className="See_all"></div>
              {options === "categories" ? (
                <div
                  className="filter"
                  onClick={() => {
                    setaddp((prev) => !prev);
                  }}
                >
                  <i class="fa-solid fa-plus"></i>
                  Add Categoryid
                </div>
              ) : (
                <div
                  className="filter"
                  onClick={() => {
                    setaddp((prev) => !prev);
                  }}
                >
                  <i class="fa-solid fa-plus"></i>
                  Add to Cart
                </div>
              )}
            </div>
            <div className={addp ? "addproduct" : "no"}>
              <div className="adminmark">
                <p>Add product</p>
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => {
                    setaddp(false);
                  }}
                ></i>
              </div>
              {options === "categories" ? (
                <div className="mainadd">
                  <form onSubmit={addcategory}>
                    <label for="Name">Category Name:</label>
                    <input
                      type="text"
                      placeholder="Enter the product name"
                      name="categoryname"
                      value={cform.categoryname}
                      onChange={categorychange}
                      required
                    />
                    <label for="categoryid">Categoryid:</label>
                    <input
                      type="number"
                      name="categoryid"
                      value={cform.categoryid}
                      onChange={categorychange}
                      id="categoryid"
                      placeholder="Enter your categoryid"
                      required
                    />
                    <button type="submit">Save</button>
                  </form>
                </div>
              ) : (
                <div className="mainadd">
                  <form onSubmit={handlesubmit}>
                    <label for="Name">Name:</label>
                    <input
                      type="text"
                      placeholder="Enter the product name"
                      name="name"
                      value={form.name}
                      onChange={handlechange}
                      required
                    />
                    <label for="Price">Product Price:</label>
                    <input
                      type="number"
                      placeholder="Enter the product Price"
                      name="price"
                      value={form.price}
                      onChange={handlechange}
                      id="price"
                      required
                    />
                    <label for="categoryid">Categoryid:</label>
                    <input
                      type="number"
                      name="categoryid"
                      value={form.categoryid}
                      onChange={handlechange}
                      id="categoryid"
                      placeholder="Enter your categoryid"
                      required
                    />
                    <label for="stock">Stock:</label>
                    <input
                      type="number"
                      name="stock"
                      value={form.stock}
                      id="stock"
                      onChange={handlechange}
                      placeholder="Enter the Stock"
                      required
                    />
                    <label for="image">Image:</label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={(e) =>
                        setForm({ ...form, photo: e.target.files[0] })
                      }
                      accept="image/*"
                    ></input>
                    <button type="submit">Save</button>
                  </form>
                </div>
              )}
            </div>
          </div>
          <ProductTable options={options} product={product} />
          {/* <Ordershistory/> */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
