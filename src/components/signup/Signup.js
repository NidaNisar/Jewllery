import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div>
       <div className='login'>
       <div className='login-container'>
        <h1>Create New Account</h1>
        <form>
             <label for="First name">First Name</label>
                   <input type="text" id="firstname" name="firstname" className='firstname' placeholder='First Name'/>
                      <label for="Last name">Last Name</label>
                   <input type="text" id="lastname" name="lastname" className='lastname' placeholder='Last Name'/>
                <label for="email">Email</label>

                   <input type="email" id="email" name="email" className='login-email' placeholder='Enter your e-mail'/>
                   <label for="password">Password</label>
                   <input type="text" id="password" name="password" className='login-text' placeholder='Enter your password'/>

                   
                     <button className='sign-button' >Sign In</button>
                     
                     <div className='sign-up'>
                        <p>Returning Customer?</p>
                        <Link to='/login'><p className='account'>Sign In</p></Link>
                         </div>
        </form>
       </div>
       {/* <Footer/> */}
    </div>
    </div>
  )
}

export default Signup
