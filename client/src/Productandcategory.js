import React from 'react';
import {useContext} from 'react';
import { Apicontext } from './components/context/Apicontext';
import { useLocation } from 'react-router-dom';
import ProductTable from './components/admin/ProductTable';
const Productandcategory = () => {
     const location = useLocation();
         const {
            options,
            form,
            setaddp,
            setoptions,
            setproduct,
            addp,
            product,
            sidebarOpen,
            setSidebarOpen,
            setForm,
            handleOptionChange,
            handlesubmit,
            handlechange,
            cform,
            setcform,
            categorychange,
            addcategory,
          } = useContext(Apicontext);
  return (
    <div>
      <div className="product-list">
                  <h2>{location.pathname=== "/categorylist" ? "Categories" : "Products-list"}</h2>
                  <div className="products-button">
                    <div className="filter">
                      <i class="fa-solid fa-filter"></i>
                      Filter
                    </div>
                    <div className="See_all"></div>
                    {location.pathname === "categories" ? (
                      <div
                        className="filter"
                        onClick={() => {
                          setaddp((prev) => !prev);
                        }}
                      >
                        <i class="fa-solid fa-plus"></i>
                        Add Categoryid
                      </div>
                    ) : (
                      <div
                        className="filter"
                        onClick={() => {
                          setaddp((prev) => !prev);
                        }}
                      >
                        <i class="fa-solid fa-plus"></i>
                        Add to Cart
                      </div>
                    )}
                  </div>
                  <div className={addp ? "addproduct" : "no"}>
                    <div className="adminmark">
                      <p>Add product</p>
                      <i
                        class="fa-solid fa-xmark"
                        onClick={() => {
                          setaddp(false);
                        }}
                      ></i>
                    </div>
                    {location.pathname === "/categorylist" ? (
                      <div className="mainadd">
                        <form onSubmit={addcategory}>
                          <label for="Name">Category Name:</label>
                          <input
                            type="text"
                            placeholder="Enter the product name"
                            name="categoryname"
                            value={cform.categoryname}
                            onChange={categorychange}
                            required
                          />
                          <label for="categoryid">Categoryid:</label>
                          <input
                            type="number"
                            name="categoryid"
                            value={cform.categoryid}
                            onChange={categorychange}
                            id="categoryid"
                            placeholder="Enter your categoryid"
                            required
                          />
                          <button type="submit">Save</button>
                        </form>
                      </div>
                    ) : (
                      <div className="mainadd">
                        <form onSubmit={handlesubmit}>
                          <label for="Name">Name:</label>
                          <input
                            type="text"
                            placeholder="Enter the product name"
                            name="name"
                            value={form.name}
                            onChange={handlechange}
                            required
                          />
                          <label for="Price">Product Price:</label>
                          <input
                            type="number"
                            placeholder="Enter the product Price"
                            name="price"
                            value={form.price}
                            onChange={handlechange}
                            id="price"
                            required
                          />
                          <label for="categoryid">Categoryid:</label>
                          <input
                            type="number"
                            name="categoryid"
                            value={form.categoryid}
                            onChange={handlechange}
                            id="categoryid"
                            placeholder="Enter your categoryid"
                            required
                          />
                          <label for="stock">Stock:</label>
                          <input
                            type="number"
                            name="stock"
                            value={form.stock}
                            id="stock"
                            onChange={handlechange}
                            placeholder="Enter the Stock"
                            required
                          />
                          <label for="image">Image:</label>
                          <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={(e) =>
                              setForm({ ...form, photo: e.target.files[0] })
                            }
                            accept="image/*"
                          ></input>
                          <button type="submit">Save</button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
    </div>
  );
}

export default Productandcategory;
