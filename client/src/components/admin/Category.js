import React, { useState, useEffect, useContext } from "react";
import "./Admin.css";
import Swal from "sweetalert2";
import { Apicontext } from "../context/Apicontext";

const Category = ({ setaddp, addp, updateproducts, setupdate }) => {
  const {
    setcform,
    cform,
    categorychange,
    categoriees,
    setcategories,
    fetchcategory,
    updatecategory,
  } = useContext(Apicontext);

  useEffect(() => {
    fetchcategory();
  }, []);
  const deletecategory = async (id) => {
    try {
      const res = await fetch(`/api/product/deletecategory/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: data.message || "Product Updated",
        });

        setcategories((prev) => prev.filter((item) => item.categoryid !== id));

        // setaddp(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Unsuccessful",
          text: data.message || "Please try again.",
        });
      }
    } catch (err) {
      console.log("Update error:", err);
      Swal.fire({
        icon: "error",
        title: "Server Error!",
        text: "Please try again.",
      });
    }
  };

  const editmodel = (item) => {
    setcform({
      categoryname: item.categoryname,
      categoryid: item.categoryid,
    });
    setupdate(true);
  };

  return (
    <>
      {categoriees.map((cat) => (
        <tr key={cat.categoryid}>
          <td>{cat.categoryid}</td>
          <td>{cat.categoryname}</td>

          <td className="actions">
            {/* EDIT BUTTON */}
            <button className="edit-btn" onClick={() => editmodel(cat)}>
              <i className="fa-solid fa-pen"></i>
            </button>

            <div className={updateproducts ? "addproduct" : "no"}>
              <div className="adminmark">
                <p>Edit Category</p>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => setupdate(false)}
                ></i>
              </div>

              <div className="mainadd">
                <form
                  className="category-form"
                  onSubmit={(e) => updatecategory(e, cat.categoryid)}
                >
                  <label>Name:</label>
                  <input
                    type="text"
                    name="categoryname"
                    id="categoryname"
                    value={cform.categoryname}
                    onChange={categorychange}
                  />

                  <label>Category ID:</label>
                  <input
                    type="number"
                    name="categoryid"
                    id="categoryid"
                    value={cform.categoryid}
                    onChange={categorychange}
                  />

                  <button type="submit">Update Save</button>
                </form>
              </div>
            </div>

            {/* DELETE BUTTON */}
            <button className="delete-btn">
              <i
                className="fa-solid fa-trash"
                onClick={() => deletecategory(cat.categoryid)}
              ></i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Category;
