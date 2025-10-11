import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Alert from '../alert/Alert'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
   const navigate=useNavigate();
  const[loginform,setloginform]=useState({
    email:'',
    password:'',
  })
  const [password,setpassword]=useState(false);
   const [alert, setAlert] = useState({ show: false, type: "", message: "" });
  const handlechange=(e)=>{
      setloginform({...loginform,[e.target.name]:e.target.value})
   }
   const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      
      const res = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginform),
      });

      const data = await res.json();
     
      if (data.success) {
     
       setAlert({ show: true, type: "success", message: data.message });
       setTimeout(() => navigate("/"), 3000);
  
      } else {
      
        setAlert({ show: true, type: "error", message: data.message || "login failed!" });
      }
    } catch (error) {
     
      setAlert({ show: true, type: "error", message: "Server error! Please try again." });
    
    }
  };
  return (
    <div className='login'>
       {alert.show && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}
       <div className='login-container'>
        <h2>Login</h2>
        <form className='login-form'  onSubmit={handleSubmit}>
                <label for="email">Email</label>
                   <input type="email" id="email" name="email" className='login-email' placeholder='Enter your e-mail' value={loginform.email} onChange={handlechange}
                   required/>
                   <label for="password">Password</label>
                   <div className='password'>
                    <input type={password?"password":"text"} id="password" name="password" className='login-text' placeholder='Enter your password' value={loginform.password} onChange={handlechange} required />
                     <i className={`fa-regular ${password ? "fa-eye-slash" : "fa-eye"}`} onClick={()=>{
                  setpassword(prev=> !prev )
                  

                }}></i>
                   </div>
                   
                 <Link to='/forget'><p className='forget'>Forget Password?</p></Link>
                     <button className='sign-button'  type='submit'>Sign In</button>
                     
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
