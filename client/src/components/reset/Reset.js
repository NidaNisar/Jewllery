import React, { useState } from 'react';
import './Reset.css';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
const Reset = () => {
  const navigate=useNavigate()
  const{token}=useParams()
  const[reset,setreset]=useState({
    password:'',
    confirmpassword:''
  })
   
   const [password,setpassword]=useState(false);
     const handlechange=(e)=>{
      setreset({...reset,[e.target.name]:e.target.value})
   }
   const handleSubmit= async(e)=>{
     e.preventDefault();
     try {
       const res = await fetch(`/api/user/resetpassword/${token}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reset),
      });

      const data = await res.json();
    
      if (data.success) {
     
      Swal.fire({
              icon:"success",
              title:"Reset Password",
              text:data.message,
               showConfirmButton: false,
                timer: 2500,
             })
      
  
      } else {
      
         Swal.fire({
                icon:"error",
                title:"Email Not Found",
                text:data.message,
               })
              
      }
     } catch (error) {
      Swal.fire({
             icon: "error",
                title: "Server error",
                text: "Please try again.",
             })
     }
   }
  return (
    <div className="reset-container">
      
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label>New Password</label>
         <div className='password'>
                    <input type={password?"password":"text"} id="password" name="password" className='login-text' placeholder='Enter your password' value={reset.password} onChange={handlechange} required />
                     <i className={`fa-regular ${password ? "fa-eye-slash" : "fa-eye"}`} onClick={()=>{
                  setpassword(prev=> !prev )
                  

                }}></i>
                   </div>
     
        <label>Confirm Password</label>
        <div className='password'>
          <input type={password?"password":"text"} name="confirmpassword" placeholder="Confirm password"onChange={handlechange} value={reset.confirmpassword} />
           <i className={`fa-regular ${password ? "fa-eye-slash" : "fa-eye"}`} onClick={()=>{
                  setpassword(prev=> !prev )   }}></i>

        </div>
        

        
        

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default Reset;
