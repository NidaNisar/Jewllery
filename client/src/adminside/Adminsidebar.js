import React, { useContext, useEffect, useState } from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Apicontext } from '../components/context/Apicontext';
import Ordershistory from '../components/orders/Ordershistory';
const Adminsidebar = () => {
 const {sidebarOpen,setSidebarOpen}=useContext(Apicontext)
  const navigate = useNavigate();
  const location = useLocation();
  const [adminsideclick,setadminsideclick] =useState(null);
  
  const handleoptionChange = (e) => {
    navigate(e.target.value);
  };
  useEffect(()=>{
 const handleResize = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }
    window.addEventListener('resize',handleResize)
   handleResize();
   return () => window.removeEventListener('resize', handleResize);
  },[])
  
   const sidetoggle=()=>{
       setSidebarOpen(!sidebarOpen)
   }
   console.log("sidebar",sidebarOpen)
  return (
    <div>
 <div className={`first ${sidebarOpen ? "" : "active"}`}>
          <div className="options">
            <div className="first-flex">
              <h2 className="admin-h">Admin</h2>
              <div
                className="menu-toggle"
                onClick={sidetoggle }
              >
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>

            <div className="admin-dashboard">
              <div className={adminsideclick=='dashboard'?"clickdesign":"dashboard "} onClick={()=>setadminsideclick('dashboard')}>
                <span class="material-icons">widgets</span>
                <p>Dasboard</p>
              </div>
              <div className={adminsideclick==="products"?'clickdesign':"products"}
              onClick={()=>setadminsideclick('products')}>
                <span class="material-icons">category</span>
                <select
                  className="heading-select"
                  onChange={handleoptionChange}
                  value={location.pathname}
                  
                >
                  <option value="/categorylist">Categories</option>
                  <option value="/productlist">Products</option> 
                </select>
              </div>
              <div className="sales"></div>
              <div className={adminsideclick==='customer'?'clickdesign':'customer'} onClick={()=>{
                setadminsideclick('customer')
              }}>
                <span class="material-icons">people</span>
                <p>Customer</p>
              </div>
              <div className={adminsideclick==='notifications'?'clickdesign':'notifications'} onClick={()=>{setadminsideclick('notifications')}}>
                <span class="material-icons">notifications</span>
                <p>Notifications</p>
              </div>
              <div className={adminsideclick=='ordershistory'?'clickdesign':'orderhistory'}
              onClick={()=>{setadminsideclick('ordershistory')}}>
                <span class="material-icons">history</span>
                <Link to={"/orderhistory"} className={adminsideclick=='ordershistory'?"aclick":''}>
                <p >Orders History</p>
                </Link>
              </div>
              <div className={adminsideclick==="settings"?'clickdesign':"settings"}
              onClick={()=>setadminsideclick('settings')}>
                <span class="material-icons" >
                  settings
                </span>
                <p>Settings</p>
              </div>
            </div>
          </div>
        </div>

       
    </div>
  );
}

export default Adminsidebar;
