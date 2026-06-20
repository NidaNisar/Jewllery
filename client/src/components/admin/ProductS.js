import React, { useState, useContext } from "react";
import "./Admin.css";
import { Apicontext } from "../context/Apicontext";
import Swal from "sweetalert2";
// { Products = [] }
const ProductS = () => {
  const {
    updateproducts,
    updateproduct,
    setupdate,
    form,
    setForm,
    handledelete,
    Products
  } = useContext(Apicontext);
  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://jewllery-production.up.railway.app"
      : "http://localhost:5000"
  const handlechange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const openEditModal = (item) => {
    setForm({
      productId: item.productId,
      name: item.name,
      price: item.price,
      stock: item.stock,
      categoryid: item.categoryid,
      photo: null,
    });
  

    setupdate(true);
  };

  {Products.map((item) => {
  console.log("PHOTO VALUE:", item.photo);
  })}

  return (
    <>
    
      {Products.map((item) => (
        <tr key={item.productId}>
          <td className="product-cell">
          <img
  src={item.photo}
  //   item.photo?.startsWith("http")
  //     ? item.photo
  //     : `http://localhost:5000${item.photo}`
  // }
  // alt={item.name}
/>
            <span>{item.name}</span>
          </td>

          <td>{item.price}</td>
          <td>{item.categoryid}</td>
          <td>{item.stock}</td>

          <td>
            <span
              className={`status-badge ${
                item.stock >= 10 ? "active" : item.stock < 10 ? "low" : "out"
              }`}
            >
              {item.stock >= 10 ? "active" : item.stock < 10 ? "low" : "out"}
            </span>
          </td>

          <td className="actions">
            <button className="edit-btn" onClick={() => openEditModal(item)}>
              <i className="fa-solid fa-pen"></i>
            </button>

            <div className={updateproducts ? "addproduct" : "no"}>
              <div className="adminmark">
                <p>Update Product</p>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => setupdate(false)}
                ></i>
              </div>

              <div className="mainadd">
                <form onSubmit={updateproduct}>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handlechange}
                  />

                  <label>Image</label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e) =>
                      setForm({ ...form, photo: e.target.files[0] })
                    }
                  />

                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handlechange}
                  />

                  <label>Category ID</label>
                  <input
                    type="number"
                    name="categoryid"
                    value={form.categoryid}
                    onChange={handlechange}
                  />

                  <label>Stock</label>
                  <input
                    type="number"
                    name="stock"
                    value={form.stock}
                    onChange={handlechange}
                  />
                  <div>
                    <button type="submit" className="save-btn">
                      Update Save
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <button
              className="delete-btn"
              onClick={() => {
                handledelete(item.productId);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductS;
