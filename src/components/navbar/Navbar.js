import React, { useContext, useState } from 'react';
import logo1 from "../../pictures/logo1.png" 
import './navbar.css'
import { Link } from 'react-router-dom';
import { categories } from '../../productjson';
import { Products} from '../../productjson';
import { useEffect } from 'react';
import { Cartcontext } from '../context/Cartcontext';
const Navbar = () => {
  const{removeproduct,searchin,searchinput,allcarts,setsearch,setshopping,search,shopping}=useContext(Cartcontext)
   const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchinput.toLowerCase())
  );
      
 
  
  return (
    <div className='container'>
      <nav>
          <div className='logo'>
            <img src={logo1} alt=''/>
             <div className='mid-part'>
                  <ul>
              <li><Link to='/'>Home</Link></li> 
               <li><Link to='/product'>Product</Link></li> 
              <li><Link to='/contact'>Contact</Link></li> 
               <li><Link to='/about'>About</Link></li> 
                <li><Link to='/newarrivals'>New Arrivals</Link></li> 
               
              
             
                </ul>
  
          </div>
          </div>
         
          <div className='icons'>
            <li > <i className="fa fa-search" onClick={()=>setsearch(prev=>!prev)}></i></li>
            <div className={search?"searchicon":"hidden"} >
              <div className='search-cont'>
                     <div className='search-main'>
                <h2>Search</h2>
                <div className='close' onClick={()=>setsearch(false)}>X</div>
                </div>
                <div className='search-input'>
                   <input type='text' placeholder='What are you looking for'  onChange={searchin} value={searchinput} />
                    <li > <i className="fa fa-search"  ></i></li>
                    
                     </div>
                    
                    <div className='searched-most'>
                            
                             
                                  {searchinput ? (
        <ul>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <p key={category.id}>
                <div className='search-category'>
                    <li > <i className="fa fa-search"  ></i></li>
                   <Link to={`/categoryproduct/${category.id}`}><p>{category.name}</p></Link>
                </div>
             
              </p>
            ))
          ) : (
            <p>No matches found</p>
          )}
        </ul>
      ):<p>No matches found</p>} 
    
                            
                             
                    </div>
               
              
              </div>
               </div>
            <div><li><i class="fa fa-cart-shopping" onClick={()=>setshopping(prev=>!prev)}></i></li>
                
                      <div className={shopping?"homecart":"hidden"}>
              <div className='homecart-sub'>
                   <div className='homecart1'>
                <h3>Cart</h3>
                <div className='close' onClick={()=>setshopping(false)}>X</div>
              </div>

              {allcarts.length > 0 ? (
        allcarts.map((item, index) => (
          <div class="cart-item" key={item.id}>
           <img src={item.image} alt="Necklace" class="cart-image" />
                <div class="cart-details">
                  <div className='name-del'>
                    <h3 className='shopping-name'>{item.name} </h3>
                   <i  onClick={()=>{removeproduct(item)}}class="fa-solid fa-trash"></i>
                  </div>
                {/* <h3 className='shopping-name'>{item.name} </h3> */}
                  <p className='shopping-price'> Rs.{item.price} </p>
                        </div>
                         </div>
          
        ))
      ) : (
        <p className='empty-cart'>Cart is empty</p>
      )}

              <div className='homecart-total'>
                 <hr/>
                <div className='totall'>
                 
                  <h2>Total</h2>
                      <h3>Rs.5,000</h3>
                </div>
              <p className='home-cartp'>Taxes and shipping calculated at checkout</p>
              <div className='homecart-buttons'>
            <Link to='/cartitem'> <button className='shop-b'>Go to Cart</button></Link>   
              <Link to='/checkout'><button className='shop-b'>Checkout</button></Link>  
              </div>
              </div>
              </div>
           
            </div>
           
                    
                
                   </div>
         
           
         <Link to='/login'> <li>  <i class="fa-regular fa-user"></i></li></Link> 
           </div>
        
        </nav> 
          
        </div>
  );
}

export default Navbar;
