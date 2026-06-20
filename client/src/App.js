import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Adminroute from "./components/Adminroute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
import Contact from "./components/contact/Contact";
import NewArrivals from "./components/newarrivals/Newarrivals";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Productcart from "./components/productcart/Productcart";
import Categoryproduct from "./components/categoryproduct/Categoryproduct";
import Cartitem from "./components/cartitem/Cartitem";
import Checkout from "./components/checkout/Checkout";
import Forget from "./components/forget/Forget";
import { useState } from "react";
import Reset from "./components/reset/Reset";
import Admin from "./components/admin/Admin";
import Mainlayout from "./components/mainlayout/Mainlayout";
import Adminlayout from "./components/mainlayout/Adminlayout";
import Errorpage from "./components/error/Errorpage";
import Ordershistory from "./components/orders/Ordershistory";
import Category from "./components/admin/Category";
import ProductS from "./components/admin/ProductS";
import Adminsidebar from "./adminside/Adminsidebar";
import Adminproducts from "./components/admin/Adminproducts";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/newarrivals" element={<NewArrivals />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productcart/:productId" element={<Productcart />} />
            <Route
              path="/categoryproduct/:categoryid"
              element={<Categoryproduct />}
            />
            <Route path="/cartitem" element={<Cartitem />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/reset/:token" element={<Reset />} />
              
          </Route>
          {/* <Route element={<Adminlayout />}>
  <Route element={<Adminroute />}>
    
    <Route path="/admin" element={<Admin />} />
    <Route path="/orderhistory" element={<Ordershistory />} />
    <Route path="/categorylist" element={<Adminproducts />} />
    <Route path="/productlist" element={<Adminproducts />} />

  </Route>

  <Route path="/404" element={<Errorpage />} />
</Route> */}
           <Route element={
            <Adminroute><Adminlayout /></Adminroute>}>
            <Route
              path="/admin"
              element={
                <Adminroute>
                  <Admin/>
                 </Adminroute>
              } 
            />
           
             <Route path="/orderhistory" element={<Adminroute>
                  
                 <Ordershistory />
                </Adminroute>} />
                <Route path="/categorylist" element={
                  <Adminroute>
                     <Adminproducts/>
                  </Adminroute>
                
                } />
                <Route path="/productlist" element={<Adminroute>
                  
               <Adminproducts/>
                </Adminroute>} />



            
          </Route> 
           <Route path="/404" element={<Errorpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
//  git remote add origin http://github.com/NidaNisar/Jewllery.git
export default App;
