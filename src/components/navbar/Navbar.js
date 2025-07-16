import React from 'react';
import logo1 from "../../pictures/logo1.png" 
import './navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
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
            <li> <i className="fa fa-search"></i></li>
           <li><i class="fa fa-cart-shopping"></i></li>
         <Link to='/login'> <li>  <i class="fa-regular fa-user"></i></li></Link> 
           </div>
        
        </nav> 
          
        </div>
  );
}

export default Navbar;
