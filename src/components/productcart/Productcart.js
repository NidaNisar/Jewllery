import React, { useContext, useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Products } from '../../productjson'
import './productcart.css'
import main13 from '../../pictures/main3.jpg'
import Footer from '../footer/Footer'
import Cartitem from '../cartitem/Cartitem'
import { Cartcontext } from '../context/Cartcontext'
 import { useNavigate } from "react-router-dom";

const Productcart = () => {
  const{addToCart,count,increment,decrement,setcount,cartItems,getQuantity,product}=useContext(Cartcontext)
  const navigate = useNavigate();
    const {id}=useParams();
    const products=Products.find((item)=>item.id===id)
  

    const productupadte=product.find((item)=>item.id===id)
   
  return (
    
    <div>

       <div className='cart-container'>
        <div className='cart-pic'>
              <img alt='' src={products.image}/>
        </div>
        <div className='cart-info'>
            <h1>{products.name}</h1>
            <hr/>
            <p>category: Necklace</p>
            <hr/>
            <h3>PKR {products.price}</h3>

            <div className='buttons'>
                <button className='increm'>
                <div className='plus' onClick={()=>  increment(products.id)}>+</div>
                <div className='number'>{getQuantity(products.id)}</div>
                <div className='minus' onClick={()=>decrement(products.id)}>-</div>
                </button>
 
               <Link to='/cartitem' className="addto" onClick={()=>addToCart(productupadte)}>
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
