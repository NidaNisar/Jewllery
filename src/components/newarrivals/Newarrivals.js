import React from 'react'
import './newarrivals.css'
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
import main13 from '../../pictures/main13.jpg'
import about5 from '../../pictures/about5.jpg'
import Footer from '../footer/Footer'






const Newarrivals = () => {
  return (
    <div className='main-arrivals'>
      <div className='arrivalpic'>
                     <div>
                        <img alt='' src={about5}/>
                     </div>
                       </div>
          <h3>New-Arrivals</h3>
        {/* <div className='arrivalproducts'>
          
        <div className='all-a'>
           < div className='arrival-product'>
               <img alt='' src={main1}/>
      </div>
      <div className='arrivalp-name'>
               <p>Necklace</p>
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
                <p>Rs.1000</p>   
      </div>
      </div> */}
     
      
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
      
      
     
        {/* </div> */}
        <Footer/>
      
    </div>
    
  )
}

export default Newarrivals

