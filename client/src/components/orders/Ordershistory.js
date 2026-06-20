import "./Orderhistory.css";
import React, { useState, useContext, useEffect } from "react";
import { Apicontext } from "../context/Apicontext";
import ProANDcat from "../admin/ProANDcat";

const Ordershistory = () => {
  const { sidebarOpen,setSidebarOpen } = useContext(Apicontext);

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://jewllery-production.up.railway.app"
      : "http://localhost:5000";

  const [orders, setOrders] = useState([]);

  const fetchproductss = async () => {
    try {
      const res = await fetch(`${API_URL}/api/order/getallorder`);
      const data = await res.json();
      setOrders(data.allorderproduct);
    } catch (err) {
      console.log("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchproductss();
  }, []);

  return (
    <div>
      <ProANDcat/>
    
    <div className="main-layout">
      
     
      <div className="orderbody">
        <h1 className="order-title">Order History</h1>

        <div className="table-wrapper">
          <table className="order-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="order-row">

                  {/* ID */}
                  <td>{order._id.slice(-6)}</td>

                  {/* CUSTOMER */}
                  <td>
                    <div className="customer-name">{order.Fullname}</div>
                    <div className="customer-email">{order.email}</div>
                  </td>

                  {/* PRODUCTS */}
                  <td>
                    {order.products?.map((item, i) => (
                      <div key={i} className="product-box">
                        <img
                          src={item.product?.photo}
                          alt="product"
                          className="product-img"
                        />

                        <div>
                          <div className="product-name">
                            {item.product?.name}
                          </div>
                          <div className="product-qty">
                            Qty: {item.quantity}
                          </div>
                        </div>
                      </div>
                    ))}
                  </td>

                  {/* PRICE */}
                  <td>
                    {order.products?.map((item, i) => (
                      <div key={i} className="price">
                        Rs {item.product?.price * item.quantity}
                      </div>
                    ))}
                  </td>

                  {/* STATUS */}
                  <td>
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>

                  {/* ACTION */}
                  <td>
                    <button className="edit-button">Edit</button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Ordershistory;