import React from 'react'
import './Homeproduct.css'

import { Link } from 'react-router-dom'
import {Products} from '../../productjson'




const HomeProduct = () => {
  return (
    <div className='main-home'>
        <h3>Our Most Be Loved Product</h3>
        
        
          
      
            <div className='forproducts'>
          {Products.map(product=>{
        return(
            <Link to={`/productcart/${product.id}`}>
              <div  key={product.id} className='all'>
           < div className='home-product'>
               <img alt='' src={product.image}/>
      </div>
      <div className='homep-name'>
               <p>{product.name}</p>
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
                <p>{product.price}</p>   
      </div>
      </div></Link>
      
        )
    
      })}
      </div>
   
      
     
  
     
       
      
    </div>
    
  )
}

export default HomeProduct
