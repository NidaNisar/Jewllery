import React from 'react';
import { Outlet } from "react-router-dom";
const Adminlayout = () => {
  return (
   <div className="admin-page">
      <Outlet />
    </div>
  );
}

export default Adminlayout;
