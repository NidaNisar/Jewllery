import React, { useState } from 'react'
import './forget.css'
import Footer from '../../components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
import { Navigate } from 'react-router-dom'
const Forget = () => {
  const[forgete,setforgete]=useState("")
  const API_URL=process.env.REACT_APP_API_URL
   const handlechange=(e)=>{
      setforgete(e.target.value)
   }
   const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      
      const res = await fetch(`${API_URL}/api/user/forgetpassword`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgete }),
      });

      const data = await res.json();
     
      if (data.success) {
     
       Swal.fire({
          icon: "success",
          title: "Email Sent!",
          text:  "Check your inbox to reset your password.",
          showConfirmButton: false,
          timer: 2500,
        });
  
      } else {
       Swal.fire({
          icon: "error",
          title: "Failed!",
          text: data.message || "Please try again.",
        });
      }
         
      
    } catch (error) {
     
    Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Something went wrong. Please try again later.",
      });
    
    }
  };
  const navigate=useNavigate()
  const tologin=()=>{
    navigate('/login')
  }
  return (
    <div>
        <div className='forget-container'>
        
       
          <div className='forgetp'>
             <p className='forget-pass'>Forgot your Password</p>
            <p>We wil send you an email to reset your Password</p>
          </div>
           
           <form className='forget-form' onSubmit={handleSubmit}>
                <label for="email">Email</label>
                   <input type="email" id="email" name="email" className='forget-email' placeholder='Enter your e-mail' value={forgete} onChange={handlechange}
                   required />

                    <div className='forget-buttons'>
                   <button className='forgot' type='submit'>Submit</button>
            <button className='forgot' type='button' onClick={tologin}>Cancel</button>  
                              </div>
                   </form>
                 
                   </div>
                    
                              <Footer/>
    </div>
  )
}

export default Forget
