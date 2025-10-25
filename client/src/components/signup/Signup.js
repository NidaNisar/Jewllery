import React, { useState } from 'react'
import './signup.css'
import Swal from "sweetalert2";



import { Link,Navigate, useNavigate } from 'react-router-dom'
const Signup = () => {
   const navigate=useNavigate();
   const [signform,setsignform]= useState({
      firstname:'',
      lastname:'',
      email:'',
      password:''
   })
 
 const [password,setpassword]=useState(false);
 console.log(password)
   const handlechange=(e)=>{
      setsignform({...signform,[e.target.name]:e.target.value})
   }
   const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      
      const res = await fetch('/api/user/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signform),
      });

      const data = await res.json();
     
      if (data.success) {
      Swal.fire({
        icon:"success",
        title:"Account Created",
        text: "Account created Succesfully",
         showConfirmButton: false,
          timer: 2500,
       })
       setTimeout(() => {
         navigate('/login')
       }, 2000);
  
      } else {
      
        Swal.fire({
        icon:"error",
        title:"Signup Failed",
        text:data.message||"Signup Failed"
       })
      }
    } catch (error) {
     
          Swal.fire({
       icon: "error",
          title: "Server Error!",
          text:  "Please try again.",
       })

    
    }
  };
  return (
   
    <div>
      
       <div className='login'>
       

       <div className='sign-container'>
        <h2>Create New Account</h2>
        <form  onSubmit={handleSubmit}>
             <label for="First name">First Name</label>
                   <input type="text" id="firstname" name="firstname" className='firstname' placeholder='First Name' value={signform.firstname}
                   required onChange={handlechange}/>
                      <label for="Last name">Last Name</label>
                   <input type="text" id="lastname" name="lastname" className='lastname' placeholder='Last Name'  value={signform.lastname}
                   required onChange={handlechange}/>
                <label for="email">Email</label>

                   <input type="email" id="email" name="email" className='login-email' placeholder='Enter your e-mail'
                   required onChange={handlechange} value={signform.email}/>
                   <label for="password">Password</label>
                   <div className='password'>
                     <input  type={password ?   "password":"text"} id="password" name="password" className='login-text' placeholder='Enter your password' required onChange={handlechange} value={signform.password}/>
                <i className={`fa-regular ${password ? "fa-eye-slash" : "fa-eye"}`} onClick={()=>{
                  setpassword(prev=> !prev )
                  

                }}></i>
                
                   </div>
                  
                   
                     <button className='sign-button' type='submit' >Create Account</button>
                     
                     <div className='sign-up'>
                        <p>Returning Customer?</p>
                        <Link to='/login'><p className='account'>Sign In</p></Link>
                         </div>
        </form>
       </div>
       
    </div>
  
    </div>
  )
}

export default Signup
