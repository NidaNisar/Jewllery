import React, { useState } from 'react';
import logo1 from "../../pictures/logo1.png"
import "./Admin.css" 
import ProductTable from './ProductTable';
const Admin = () => {
    const[options,setoptions]=useState("Productlist")
    const handlechange=(e)=>{
              const selected = e.target.value;
             setoptions(selected);
    }
   
    const[addp,setaddp]=useState(false);
const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='admin-container'>
        <div className='admin'>
             <div className={`first ${sidebarOpen ? "active" : ""}`}>
            <div className='options'>
               <h2 className='admin-h'>Admin</h2>
                <div className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
             <i class="fa-solid fa-xmark"></i>
          </div>
             
                <div className='admin-dashboard'>
                    <div className='dashboard'>
                    <span class="material-icons">widgets</span>
                     <p>Dasboard</p>
                    </div>
                    <div className='products'>
                         <span class="material-icons">category</span>
          <select className="heading-select" onChange={handlechange} value={options}>
  <option value="Productlist" >Product-List</option>
  <option value="categories">Categories</option>
             </select>
 
                    
                    </div>
                    <div className='sales'></div>
                    <div className='customer'>
                        <span class="material-icons">people</span>
                         <p>Customer</p>
                    </div>
                    <div className='notifications'>
                        <span class="material-icons">notifications</span>
                         <p>Notifications</p>
                    </div>
                    <div className='settings'>
                        <span class="material-icons" s>settings</span>
                   <p>Settings</p>
                    </div>

                </div>


            </div>
            </div>
            <div className='second'>
                <div className='productss'>
                    <div className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <i className="fa-solid fa-bars"></i>
          </div>

                    <h2 className='product-h'>Product</h2>
                   <div className='admin-icons'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-regular fa-bell"></i>
                   </div>
                </div>
                <div className='product-list'>
                    <h2>{options==='categories'?"Categories":"Products-list"}</h2>
                     <div className='products-button'>
                        <div className='filter'>
                            <i class="fa-solid fa-filter"></i>
                           Filter
                           
                        </div>
                        <div className='See_all'>

                        </div>
                        <div className='filter' onClick={()=>{setaddp(prev=>!prev)}}>
                             <i class="fa-solid fa-plus"></i>
                           Add to Cart
                        </div>
                        
                    </div>
                    <div className={addp?"addproduct":"no"}>
                        <div className='adminmark'><p>Add product</p>
                        <i class="fa-solid fa-xmark" onClick={()=>{setaddp(false)}}></i></div>
                        
                        <div className='mainadd'>
                    <form action="">
                        <label for="Name">Name:</label>
                <input type="text" placeholder='Enter the product name'/>
                <label for="Price">Product Price:</label>
              <input type="number" placeholder='Enter the product Price' name='price' id='price'/>
              <label for="categoryid">Categoryid:</label>
            <input type="number" name="categoryid" id="categoryid" placeholder='Enter your categoryid'/>
            <label for="stock">Stock:</label>
            <input type="number" name="stock" id="stock" placeholder='Enter the Stock'/>
                    <button type="submit">Save</button>

                    </form>
             
                        
                        </div>
                    </div>
                </div>
                <ProductTable options={options}/>

            </div>
        </div>
      
    </div>
  );
}

export default Admin;

