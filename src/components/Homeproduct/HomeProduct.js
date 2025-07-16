import React from 'react'
import './Homeproduct.css'
import main6 from '../../pictures/main6.jpg'
import main8 from '../../pictures/main8.jpeg'
import main9 from '../../pictures/main9.jpeg'
import main10 from '../../pictures/main10.jpeg'
import main2 from '../../pictures/main2.jpg'
import main4 from '../../pictures/main4.jpg'
import main3 from '../../pictures/main3.jpg'
import main7 from '../../pictures/main7.jpg'
import main1 from '../../pictures/main1.jpg'
import main11 from '../../pictures/main11.jpg'
import main12 from '../../pictures/main12.jpg'
import main13 from '../../pictures/main3.jpg'

import {Products} from '../../productjson'




const HomeProduct = () => {
  return (
    <div className='main-home'>
        <h3>Our Most Be Loved Product</h3>
        
        
          
      
            <div className='forproducts'>
{Products.map(product=>{
        return(
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
      </div>
      
        )
    
      })}
      </div>
   
      
     
  
     
       
      
    </div>
    
  )
}

export default HomeProduct
