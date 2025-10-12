import React, { useState } from 'react';
import './Reset.css';
import { useParams } from 'react-router-dom';
import Alert from '../alert/Alert'
const Reset = () => {
  const{token}=useParams()
  const[reset,setreset]=useState({
    password:'',
    confirmpassword:''
  })
   const [alert, setAlert] = useState({ show: false, type: "", message: "" });
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
     
       setAlert({ show: true, type: "success", message: data.message });
      
  
      } else {
      
        setAlert({ show: true, type: "error", message: data.message || "login failed!" });
      }
     } catch (error) {
      
     }
   }
  return (
    <div className="reset-container">
      {alert.show && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label>New Password</label>
        <div className='passowrd'>
          <input type={password?"password":"text"} name="password" placeholder="Enter new password" onChange={handlechange} value={reset.password}/>
           <i className={`fa-regular ${password ? "fa-eye-slash" : "fa-eye"}`} onClick={()=>{
                  setpassword(prev=> !prev )   }}></i>
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
