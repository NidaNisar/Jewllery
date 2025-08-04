import React, { useState } from 'react'
import './cartitem.css'
import about5 from "../../pictures/about5.jpg"
import Footer from '../footer/Footer'
import { useParams } from 'react-router-dom'
import { Products } from '../../productjson'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { Cartcontext } from '../context/Cartcontext'
const Cartitem = () => {
  const{removeproduct,setCartItems,cartItems,total,increment,decrement,count} =useContext(Cartcontext)
  const{id}=useParams()
  const product=Products.filter((item)=>item.id===id)
   useEffect(()=>{
         const allcarts =JSON.parse( localStorage.getItem('cartItem'))||[]
               setCartItems(allcarts);
                       },[])
        
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
                         
                            <p>Rs. {item.price*item.quantity}</p>
                        </div>
                        {/* <span className='leftin'> 2 LEFT IN STOCK</span> */}
                        <div className="quantity-control">
  <button onClick={decrement} className="qty-btn">−</button>
  <span className="qty-value">{count}</span>
  <button onClick={increment} className="qty-btn">+</button>
</div>
                            
                      
                        {/* <p className='quant'>Quantity {item.quantity}</p> */}
                        <p className='rs'>Rs. {item.price}</p>
                        <p className='remove' onClick={()=>{removeproduct(item)}}>Remove an item</p>
                          {/* <span className='buttons'>
                             <button className='increm'>
                <div className='plus' onClick={increment}>+</div>
                <div className='number'>{count}</div>
                <div className='minus' onClick={decrement}>-</div>
                </button>
                             </span>
                         */}
                         {/* <div className="quantity-control">
  <button onClick={decrement} className="qty-btn">−</button>
  <span className="qty-value">{count}</span>
  <button onClick={increment} className="qty-btn">+</button>
</div> */}

                     

                </div>
               
               </div>
                    </div>    )
                      }) 
                      }
               
                </div> 
               
               <div className='card2'>
             <p className='product-total'>Cart total</p>
             <hr/>
             <div className='Estimate'>
                 <h3>Estimate total</h3>
                 <h3>Rs. {total} </h3>
                 
             </div>
             <hr/>
             <p>Shipping will be calculated after checkout</p>
          <Link to='/checkout'><h4 className='proceed'>Proceed to checkout</h4></Link>  
               </div>
               {/* </div>  */}
               
                                 
    </div>
    <Footer/>
    </div>
    
                    
  )
}

export default Cartitem
