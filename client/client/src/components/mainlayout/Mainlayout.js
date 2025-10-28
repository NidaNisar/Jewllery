import React from 'react';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import { Outlet } from "react-router-dom";
const Mainlayout = () => {
  return (
    <>
      <Header/>
      <Navbar/>
 <div className="page-content">
        <Outlet />
      </div>
    </>
  );
}

export default Mainlayout;
