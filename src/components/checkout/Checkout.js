import React from 'react'
import './checkout.css'
const Checkout = () => {

   const allcarts=JSON.parse(localStorage.getItem('cartItem'))||[]
   console.log("checkouts",allcarts)
  return (
        <div className="checkout-container">
      <h1 className='heading-check'>Checkout</h1>

      <div className="form-section">
        <h2 className='heading-check'>Billing Details</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Address" required></textarea>

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
            <span>{item.name} x1</span>
            <span>Rs. {item.price}</span>
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
