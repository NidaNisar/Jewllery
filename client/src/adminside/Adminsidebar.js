import React from 'react';
import { Link } from 'react-router-dom';
const Adminsidebar = ({sidebarOpen, setSidebarOpen, options, handleOptionChange}) => {
  return (
    <div>
 <div className={`first ${sidebarOpen ? "active" : ""}`}>
          <div className="options">
            <div className="first-flex">
              <h2 className="admin-h">Admin</h2>
              <div
                className="menu-toggle"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>

            <div className="admin-dashboard">
              <div className="dashboard">
                <span class="material-icons">widgets</span>
                <p>Dasboard</p>
              </div>
              <div className="products">
                <span class="material-icons">category</span>
                <select
                  className="heading-select"
                  onChange={handleOptionChange}
                  value={options}
                >
                  <option value="Productlist">Product-List</option>
                  <option value="categories">Categories</option>
                </select>
              </div>
              <div className="sales"></div>
              <div className="customer">
                <span class="material-icons">people</span>
                <p>Customer</p>
              </div>
              <div className="notifications">
                <span class="material-icons">notifications</span>
                <p>Notifications</p>
              </div>
              <div className="notifications">
                <span class="material-icons">history</span>
                <Link to={"/orderhistory"}>
                <p >Orders History</p>
                </Link>
              </div>
              <div className="settings">
                <span class="material-icons" s>
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
