import React from 'react';
import { Outlet } from "react-router-dom";
import Adminsidebar from '../../adminside/Adminsidebar';
const Adminlayout = () => {
  return (
   <div className="admin-page">
    <Adminsidebar/>
      <Outlet />
    </div>
  );
}

export default Adminlayout;
