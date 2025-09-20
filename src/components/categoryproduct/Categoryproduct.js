import React from 'react'
import './categoryproduct.css'
import { Products } from '../../productjson'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
const Categoryproduct = () => {
  const{categoryid}=useParams()
  return (
    <div>
      
        
            <div className='forproducts'>
          {Products.map(product=> {
            if(product.categoryid==categoryid)
        return(
           
              <div   className='all'>
           <div  key={product.id} className='home-product'>
             <Link to={`/productcart/${product.id}`}>   <img alt='' src={product.image}/> </Link>
      </div>
      <div className='homep-name'>
               <p>{product.name}</p>
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
                <p>Rs. {product.price}</p>   
      </div>
      </div>
      
        )
    
      })}
      </div>
      <Footer/>
    </div>
  )
}

export default Categoryproduct
