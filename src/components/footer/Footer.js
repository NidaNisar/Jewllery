import React from 'react'
import './footer.css'
import logo from "../../pictures/logo.png" 
import { Link } from 'react-router-dom'
import {categories } from '../../productjson'
const Footer = () => {
  return (
    <div className='footer'> 
      <div className='footer-container'>
        <div className='name-icons'>
            <div className='nameicon'>
                 <img src={logo} alt=''/>
                 {/* <p className='footer-name'>Jewllers</p> */}
            </div>
            <div className='footer-icon'>
             <li><i class="fa-brands fa-instagram"></i></li> 
       <li><i class="fa-brands fa-facebook"></i></li>
       <li><i class="fa-brands fa-youtube"></i></li>
       <li><i class="fa-brands fa-tiktok"></i></li>
       <li><i class="fa-brands fa-square-snapchat"></i></li>
       </div>
        </div>
         <div className='quick-links'>
            <p className='quickp'>QUICK LINKS</p>
             
              <Link to='/'><p>Home</p></Link> 
               <Link to='/product'> <p>Product</p></Link>
              <Link to='/contact'> <p>Contact</p></Link>
               <Link to='/about'> <p>About</p></Link>
           
              
             
               
         </div>
          <div className='collections'>
             <p className='collectionp'>Collection</p>
             
             {categories.slice(0, 3).map((category) => (
        <Link key={category.id} to={`/categoryproduct/${category.id}`}>
            <p className='collection-name'>{category.name}</p>
            </Link>
                ))}
           
               
               
              
             
                
          </div>
          <div className='Lets GET IN TOUCH'>
             <p className='letsp'>Lets GET IN TOUCH</p>
             <div className='phone'>
                <p>+923004680295</p>
             </div>
             <div className='Time'>
                <p>Mon to Sat - 11:00AM to 8:00PM</p>
             </div>
             <div className='location'>
                <p>Hotel Sunfort Building 24-G, Liberty Gulberg III Lahore, Punjab</p>

             </div>
          </div>
          </div>
      
    </div>
  )
}

export default Footer
