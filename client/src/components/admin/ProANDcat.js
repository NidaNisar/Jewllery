import {React,useContext} from 'react';
import { Apicontext } from '../context/Apicontext';
import { useLocation } from 'react-router-dom';
import ProductTable from './ProductTable';
import Productandcategory from '../../Productandcategory';
const ProANDcat = () => {
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
       <div className="second">
                <div className="productss">
                  <div
                    className="menu-toggle"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  >
                    <i className="fa-solid fa-bars"></i>
                  </div>
      
                  <h2 className="product-h">Product</h2>
                  <div className="admin-icons">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-regular fa-bell"></i>
                  </div>
                </div>
               
                {/* <Productandcategory/> */}
                {/* <ProductTable options={options} product={product} /> */}
                
              </div>
    </div>
  );
}

export default ProANDcat;
