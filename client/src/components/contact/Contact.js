import React, { useState } from 'react'
import contactpic from '../../pictures/contactpic.jpeg'
import './contact.css'
import Footer from '../footer/Footer'
import Swal from "sweetalert2";
const Contact = () => {
  const[form,setform]=useState({
    Firstname:"",
    Lastname:"",
    email:"",
    help:"",
    message:""
  })
   const API_URL =
   process.env.NODE_ENV === "production"
    ? "https://jewllery-production.up.railway.app"
    : "http://localhost:5000";
  const handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/user/contact`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(form),
            });
      
            const data = await res.json();
           
            if (data.success) {
           
           Swal.fire({
            icon:"success",
            title:"Thank you for contacting Jewellery",
            text:data.message
      
      
           })
        
            } else {
            Swal.fire({
  icon: "error",
  title: "Email Delivery Failed",
  text: data.message || "Server error while sending your contact message. Please try again later.",
});
            }
    } catch (error) {
       Swal.fire({
                   icon: "error",
                      title: "Server Error!",
                      text:  "Please try again.",
                   })
           
    }
  }
  return (
    <div>
      <div className='main-contact'>
        
         <div className='form-container'>
          <p className='contact-heading'>Conatct Us</p> 
     
              <form className='contact-f' onSubmit={handleSubmit}> 
                <label  className='name' for="name">NAME</label>
                <div className='name-fields'>
                  
                  <div>
                    <label  className='names'
                    for="Firstname">First name:</label>
                    <input type="text" id="Firstname" name="Firstname"  value={form.Firstname} onChange={handlechange} required/>
                  </div>
                  <div>
                           <label  className='names'
                           for="Lastname">Last name:</label>
                            <input type="text" id="Lastname" name="Lastname" value={form.Lastname} onChange={handlechange} required/>
                  </div>
                </div>
                 <label for="email">Email:</label>
                   <input type="email" id="email" name="email" value={form.email}  onChange={handlechange} required/>
                      <label for="help">I Need Help Regarding</label>
                      <select
                      id="help"
                    name="help"
                  value={form.help}
                 onChange={handlechange}>
                         <option value="" disabled>Select an option</option>
                        <option value="Refund">Refund</option>
                          <option value="Purchase">Purchase</option>
                          <option value="Repair">Repair</option>           
                      </select>
                       <label for="message">MESSAGE</label>
                       <textarea id='message' name='message' value={form.message} placeholder='Type your message here'
                           onChange={handlechange} required></textarea>
                       <button className='contact-button' type='submit'>SUBMIT</button>
                      
              </form>
          
         </div>
          <div className='contact-pic'>
          <img src={contactpic}/>
         </div>
      </div>
    <Footer/>

    </div>
  )
}

export default Contact
