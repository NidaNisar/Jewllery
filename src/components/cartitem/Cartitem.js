import React, { useState } from 'react'
import './cartitem.css'
import about5 from "../../pictures/about5.jpg"
import Footer from '../footer/Footer'
import { useParams } from 'react-router-dom'
import { Products } from '../../productjson'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Cartitem = () => {
 
  const{id}=useParams()
  const product=Products.filter((item)=>item.id===id)
    const[total,settotal]=useState(0)
       
        const [cartItems, setCartItems] = useState([]);
      

        useEffect(()=>{
        const allcarts =JSON.parse( localStorage.getItem('cartItem'))||[]
                // const calculatedTotal= allcarts.reduce((sum,item)=>{
                //            return sum +(item.price*item.quantity)
                //  })
                 
                //  settotal(calculatedTotal);
        setCartItems(allcarts);
},[])
                       const removeproduct=(reitem)=>{
                         
                          const updatecart= cartItems.filter(item=>item.id!==reitem.id)
                          setCartItems(updatecart);
                          localStorage.setItem('cartItem',JSON.stringify(updatecart))
                           
                          
                       }
                        if (cartItems.length ===0) {
    return (
      <div className="empty-cart">
        <h2>🛒 Your cart is empty</h2>
       <span><Link to="/">Go back to shopping</Link></span>  
       
      </div>
    );
  }
 
  return (

 
    <div>
    
        <p className='cart'>Cart</p>
        <div className='cartcontainer'>
        <div className='both-card'>
        <div className='first-part'>
            <p className='product-total'>Product</p>
            <p className='product-total'>Total</p>
        </div>
                       
                      
                     {
                      cartItems.map((item,index)=>{
                        return(
                           <div key={index} className='cartitem'>
                <div className='sub-item'>
                     <img src={item.image} alt='image'/>
                     <div className='item-info'>
                        <div className='name-price'>
                            <p className='product-total'>{item.name}</p>
                            
                
                            <p>Rs {item.price*item.quantity}</p>
                        </div>
                        <span className='leftin'> 2 LEFT IN STOCK</span>
                        {/* <p className='quant'>Quantity {item.quantity}</p> */}
                        <p className='rs'>Rs{item.price}</p>
                        <p className='remove' onClick={()=>{removeproduct(item)}}>Remove an item</p>
                        
                     </div>

                </div>
               
               </div>
                        )
                      }) 
                      }
               
               
               </div>
               <div className='card2'>
             <p className='product-total'>Cart total</p>
             <hr/>
             <div className='Estimate'>
                 <h3>Estimate total</h3>
                 <h3>Rs{} </h3>
                 
             </div>
             <hr/>
             <p>Shipping will be calculated after checkout</p>
          <Link to='/checkout'><h4 className='proceed'>Proceed to checkout</h4></Link>  
               </div>
               </div>
               <Footer/>
                                   
    </div>
                    
  )
}

export default Cartitem
