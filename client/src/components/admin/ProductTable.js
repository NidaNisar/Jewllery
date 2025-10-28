import React ,{useState}from "react";
import "./ProductTable.css";
import { Products ,categories} from "../../productjson";

const ProductTable = ({options}) => {
   const[addp,setaddp]=useState(false);

  return (
    <div className="product-table-container">
      {/* <h2 className="product-table-heading">Product List</h2> */}
      <table className="product-table">
        <thead>
          {options==='categories'?
          <tr>
           
            <th>Categoryid</th>
            <th>Category-name </th>
            <th>Actions</th>
            
          </tr>: <tr>
            <th>Product</th>
            <th>Categoryid</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
            
          </tr>
          }
         
        </thead>

        <tbody>
          {options==='categories'?categories.map((cat)=>{
            return(
              <tr key={cat.id}>
          <td>{cat.id}</td>
          <td>{cat.name}</td>

          
         
          <td className="actions">
            <button className="edit-btn" onClick={() => setaddp((prev) => !prev)}>
              <i className="fa-solid fa-pen"></i>
            </button>

            
            <div className={addp ? "addproduct" : "no"}>
              <div className="adminmark">
                <p>Edit Category</p>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => setaddp(false)}
                ></i>
              </div>

              <div className="mainadd">
               <form className="category-form">
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    id="name"
    placeholder="Enter category name"
    defaultValue={cat.name}
  />

  <label htmlFor="categoryid">Category ID:</label>
  <input
    type="text"
    id="categoryid"
    placeholder="Enter category id"
    defaultValue={cat.categoryid}
  />
</form>

                <button type="submit">Update Save</button>
              </div>
            </div>

            <button className="delete-btn">
              <i className="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
            ) 
          }):Products.map((item) => (
            <tr key={item.id}>
              <td className="product-cell">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </td>
              <td>{item.categoryid}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>
                <span
                  className={`status-badge ${
                    item.stock>=10?item.status="active": item.stock< 10?  item.status="low":  item.status="out"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="actions">
                <button className="edit-btn">
                 
                  <i className="fa-solid fa-pen" onClick={()=>setaddp(prev=>!prev)} ></i>
                  

                </button>
                <div className={addp?"addproduct":"no"}>
                        <div className='adminmark'><p>Add product</p>
                        <i class="fa-solid fa-xmark" onClick={()=>{setaddp(false)}}></i></div>
                        
                        <div className='mainadd'>
                    <form action="">
                        <label for="Name">Name:</label>
                <input type="text" placeholder='Enter the product name'/>
                 <label for="image">Image:</label>
                <input type="file" id="image" name="image" accept="image/*"></input>
                <label for="Price">Product Price:</label>
              <input type="number" placeholder='Enter the product Price' name='price' id='price'/>
              <label for="categoryid">Categoryid:</label>
            <input type="number" name="categoryid" id="categoryid" placeholder='Enter your categoryid'/>
            <label for="stock">Stock:</label>
            <input type="number" name="stock" id="stock" placeholder='Enter the Stock'/>
                    

                    </form>
             <button type="submit">Update save</button>
                        
                        </div>
                    </div>
                <button className="delete-btn">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
