import React from 'react'
import HomeProduct from '../Homeproduct/HomeProduct'
import Footer from '../footer/Footer'
import main14 from '../../pictures/main14.jpg'
import './product.css'
const Product = () => {
  return (
    <div>
       <div className='productpic'>
               <div>
                  <img alt='' src={main14}/>
               </div>
            
            {/* <div className='product-pic-text'>
                  <p>Jewellery that <br></br> tells your
                  <br></br> story</p>
                
              </div> */}
          </div>
     <HomeProduct/>
     <Footer/>
    </div>
  )
}

export default Product
