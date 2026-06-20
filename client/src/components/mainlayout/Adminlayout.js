import React from 'react';
import { Outlet } from "react-router-dom";
import Adminsidebar from '../../adminside/Adminsidebar';
const Adminlayout = () => {
  return (
   <div className="admin-page">
    <Adminsidebar/>
    <div className="page-content">
      <Outlet />
    </div>
      
    </div>
  );
}

export default Adminlayout;
