import React from 'react'
import './forget.css'
import Footer from '../../components/footer/Footer'
const Forget = () => {
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
                   </form>
                 
                   </div>
                     <div className='forget-buttons'>
                   <button className='forgot'>Submit</button>
                   <button className='forgot'>Cancel</button>
                              </div>
                              <Footer/>
    </div>
  )
}

export default Forget
