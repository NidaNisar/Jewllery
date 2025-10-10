import React, { useState } from 'react'
import './signup.css'

import Alert from '../alert/Alert'

import { Link,Navigate, useNavigate } from 'react-router-dom'
const Signup = () => {
   const navigate=useNavigate();
   const [signform,setsignform]= useState({
      firstname:'',
      lastname:'',
      email:'',
      password:''
   })
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

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
     
       setAlert({ show: true, type: "success", message: "Account created successfully!"||data.message });
      //  setTimeout(() => navigate("/login"), 5000);
  
      } else {
      
        setAlert({ show: true, type: "error", message: data.message || "Signup failed!" });
      }
    } catch (error) {
     
      setAlert({ show: true, type: "error", message: "Server error! Please try again." });
    
    }
  };
  return (
   
    <div>
      
       <div className='login'>
        {alert.show && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}
   

       <div className='login-container'>
        <h1>Create New Account</h1>
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
                   <input type="text" id="password" name="password" className='login-text' placeholder='Enter your password' required onChange={handlechange} value={signform.password}/>

                   
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
