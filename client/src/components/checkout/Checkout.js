import React, { useContext, useState } from "react";
import "./checkout.css";
import { Cartcontext } from "../context/Cartcontext";
import Whatsapp from "../whatssapp/Whatsapp";
import Swal from "sweetalert2";
const Checkout = () => {
  const API_URL =
   process.env.NODE_ENV === "production"
    ? "https://jewllery-production.up.railway.app"
    : "http://localhost:5000";
  const { allcarts, total } = useContext(Cartcontext);
  const [order,setorder]=useState({
    "Fullname":'',
    "email":"",
    "phonenumber":'',
    "address":'',
    "products":[],
     "totalAmount":''

  });
const orderchange=(e)=>{
setorder({...order,[e.target.name]:e.target.value})
}
const Submitorder= async (e) => {
    e.preventDefault();
const formatedorder= allcarts.map((item)=>({
  product:item._id,
  quantity:item.quantity,
  price:item.price,

}))
const finalorder={
  ...order,
  products:formatedorder,
   totalAmount:total
}

    try {
      const res = await fetch(`${API_URL}/api/order/addcheckout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalorder),
      });

      const data = await res.json();

      if (data.success) {
        
              Swal.fire({
          icon: "success",
          title: "Order Done",
          text: data.message || "Thanks for your order",
        });
        
      } else {
        Swal.fire({
          icon: "error",
          title: " Unsuccessful!",
          text: data.message || "Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error!",
        text: "Please try again.",
      });
    }
  };

  return (
    <div className="checkout-container">
      <h1 className="heading-check">Checkout</h1>

      <div className="form-section">
        <h2 className="heading-check">Billing Details</h2>
        <form   onSubmit={Submitorder}>
          <input type="text" placeholder="Full Name" required 
          value={order.Fullname}
          onChange={orderchange}
          name="Fullname"
          id="Fullname"
          />
          <input type="email" placeholder="Email" required 
          value={order.email}
          onChange={orderchange}
          name="email"
          id="email"/>
          <input type="tel" placeholder="Phone Number" required
          value={order.phonenumber}
          onChange={orderchange}
          name="phonenumber"
          id="phonenumber" />
          <textarea placeholder="Address" required className="text-check" 
          value={order.address}
          onChange={orderchange}
          name="address"
          id="address"/>

          <h3 className="heading-check">Payment Method</h3>
          <label class="payment-option">
            <input type="radio" name="payment" />
            <span>Cash on Delivery</span>
          </label>

          <button className="chek-btn" type="submit">
            Place Order
          </button>
        </form>
      </div>

      <div className="cart-summary">
        <h2 className="heading-check">Your Cart</h2>
        <ul>
          {allcarts.map((item) => (
            <li key={item.id} className="cart-item-check">
              <div className="cart-item-left">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="cart-img-check"
                />
                <span className="cart-name-check">
                  {item.name} x{item.quantity}
                </span> 
              </div>

              <span className="cart-price-check">
                Rs. {item.price * item.quantity}
              </span>
            </li>
          ))}

          <li className="total">
            <strong>Total</strong>
            <strong>Rs. {total}</strong>
          </li>
        </ul>
      </div>
      <Whatsapp />
    </div>
  );
};

export default Checkout;
