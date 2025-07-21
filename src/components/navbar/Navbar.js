import React, { useState } from 'react';
import logo1 from "../../pictures/logo1.png" 
import './navbar.css'
import { Link } from 'react-router-dom';
import { categories } from '../../productjson';
import { Products} from '../../productjson';
const Navbar = () => {
  const[search,setsearch]=useState(false)
  
    const[searchinput,setsearchinput]=useState('')
    const searchin =(event)=>{
            console.log("clicked on input")
                 setsearchinput(event.target.value)
                 console.log(event.target.value)
    }
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
            
           <li><i class="fa fa-cart-shopping"></i></li>
         <Link to='/login'> <li>  <i class="fa-regular fa-user"></i></li></Link> 
           </div>
        
        </nav> 
          
        </div>
  );
}

export default Navbar;
