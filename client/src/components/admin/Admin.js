import React, { useContext, useState, useEffect } from "react";
import logo1 from "../../pictures/logo1.png";
import "./Admin.css";
import ProductTable from "./ProductTable";
import Swal from "sweetalert2";
import { Apicontext } from "../context/Apicontext";
import { Link } from "react-router-dom";
import Ordershistory from "../orders/Ordershistory";
import Adminsidebar from "../../adminside/Adminsidebar";
import ProANDcat from "./ProANDcat";
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
     {/* <ProANDcat/> */}
      
      </div>
    </div>
  );
};

export default Admin;
