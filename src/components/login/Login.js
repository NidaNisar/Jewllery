import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
const Login = () => {
  return (
    <div className='login'>
       <div className='login-container'>
        <h2>Login</h2>
        <form>
                <label for="email">Email</label>
                   <input type="email" id="email" name="email" className='login-email' placeholder='Enter your e-mail'/>
                   <label for="password">Password</label>
                   <input type="text" id="password" name="password" className='login-text' placeholder='Enter your password'/>
                   <p className='forget'>Forget Password?</p>
                     <button className='sign-button' >Sign In</button>
                     
                     <div className='sign-up'>
                        <p>New Customer?</p>
                        <Link to='/signup'><p className='account'>Create an account</p></Link> </div>
        </form>
       </div>
       <Footer/>
    </div>
  )
}

export default Login
