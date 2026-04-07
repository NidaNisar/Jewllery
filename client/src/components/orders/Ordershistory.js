
import "./Orderhistory.css"
import React, { useState } from 'react';


const Ordershistory = () => {

  const [orders, setOrders] = useState([
    {
      _id: "1",
      Fullname: "Nida Nisar",
      email: "nida@gmail.com",
      product: "Gold Ring",
      price: 5000,
      status: "Delivered",
    },
    {
      _id: "2",
      Fullname: "Ali Khan",
      email: "ali@gmail.com",
      product: "Necklace",
      price: 8000,
      status: "Pending",
    },
    {
      _id: "3",
      Fullname: "Sara Ahmed",
      email: "sara@gmail.com",
      product: "Bracelet",
      price: 3000,
      status: "Cancelled",
    },
  ]);

  

  // Edit function (just demo)
  const handleEdit = (id) => {
    alert("Edit functionality coming soon!");
  };

  return (
    <div className="order-container">
      <h1 className="order-title">Order History</h1>

      <div className="table-wrapper">
        <table className="order-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.Fullname}</td>
                <td>{order.email}</td>
                <td>{order.product}</td>
                <td>Rs {order.price}</td>

                <td>
                  <span
                    className={`status ${
                      order.status === "Delivered"
                        ? "status-delivered"
                        : order.status === "Pending"
                        ? "status-pending"
                        : "status-cancelled"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td>
                  <button
                    className="action-btn edit-button"
                    onClick={() => handleEdit(order._id)}
                  >
                    Edit
                  </button>

                  
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Ordershistory;