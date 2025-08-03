import React, { useContext } from 'react'
import './checkout.css'
import { Cartcontext } from '../context/Cartcontext'
const Checkout = () => {
      const{allcarts}=useContext(Cartcontext)
  
 
  return (
        <div className="checkout-container">
      <h1 className='heading-check'>Checkout</h1>

      <div className="form-section">
        <h2 className='heading-check'>Billing Details</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Address" required className='text-check'/> 

          <h3 className='heading-check'>Payment Method</h3>
          <label>
            <input type="radio" name="payment" /> Cash on Delivery
          </label>

          <button className='chek-btn' type="submit">Place Order</button>
        </form>
      </div>
           
      <div className="cart-summary">
        
        <h2 className='heading-check'>Your Cart</h2>
        <ul>
                  {allcarts.map((item,index)=>{
          return(
             <li key={item.id}>
            <span>{item.name} x{item.quantity}</span>
            <span>Rs. {item.price*item.quantity}</span>
          </li>
          )
        })}
          
         
          <li className="total">
            <strong>Total</strong>
            <strong>Rs. 45,000</strong>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Checkout
