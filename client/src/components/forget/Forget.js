import React, { useState } from 'react'
import './forget.css'
import Footer from '../../components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../alert/Alert'
import { Navigate } from 'react-router-dom'
const Forget = () => {
  const[forgete,setforgete]=useState("")
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });
   const handlechange=(e)=>{
      setforgete(e.target.value)
   }
   const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      
      const res = await fetch('/api/user/forgetpassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgete }),
      });

      const data = await res.json();
     
      if (data.success) {
     
       setAlert({ show: true, type: "success", message: data.message });
      
  
      } else {
      
        setAlert({ show: true, type: "error", message: data.message || "login failed!" });
      }
    } catch (error) {
     
      setAlert({ show: true, type: "error", message: "Server error! Please try again." });
    
    }
  };
  const navigate=useNavigate()
  const tologin=()=>{
    navigate('/login')
  }
  return (
    <div>
        <div className='forget-container'>
          {alert.show && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}
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
