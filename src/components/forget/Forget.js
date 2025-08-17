import React from 'react'
import './forget.css'
import Footer from '../../components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const Forget = () => {
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
           
           <form className='forget-form'>
                <label for="email">Email</label>
                   <input type="email" id="email" name="email" className='forget-email' placeholder='Enter your e-mail'
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
