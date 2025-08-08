import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Products } from '../../productjson'
import './productcart.css'
import main13 from '../../pictures/main3.jpg'
import Footer from '../footer/Footer'
import Cartitem from '../cartitem/Cartitem'
import { Cartcontext } from '../context/Cartcontext'
const Productcart = () => {
  const{addToCart,count,increment,decrement,setcount,cartItems}=useContext(Cartcontext)

    const {id}=useParams();
    const product=Products.find((item)=>item.id===id)
    const cartproduct = cartItems.find((item)=> item.id===id)
    const quantity=cartproduct?.quantity||1
    console.log("productcart",cartproduct)
   
  return (
    
    <div>

       <div className='cart-container'>
        <div className='cart-pic'>
              <img alt='' src={product.image}/>
        </div>
        <div className='cart-info'>
            <h1>{product.name}</h1>
            <hr/>
            <p>category: Necklace</p>
            <hr/>
            <h3>PKR {product.price}</h3>

            <div className='buttons'>
                <button className='increm'>
                <div className='plus' onClick={()=>increment(product.id)}>+</div>
                <div className='number'> {cartItems.find(item => item.id === product.id)?.quantity || 1}</div>
                <div className='minus' onClick={()=>decrement(product.id)}>-</div>
                </button>
 
               <Link to='/cartitem' className="addto" onClick={()=>addToCart(product)}>
                         <p>Add to Cart</p>
                              </Link>

            </div>

        </div>
       </div>
                  <Footer/>
    </div>
  )
}

export default Productcart
