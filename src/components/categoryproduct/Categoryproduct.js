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
      <Footer/>
    </div>
  )
}

export default Categoryproduct
