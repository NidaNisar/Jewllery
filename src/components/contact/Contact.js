import React from 'react'
import contactpic from '../../pictures/contactpic.jpeg'
import './contact.css'
import Footer from '../footer/Footer'
const Contact = () => {
  return (
    <div>
      <div className='main-contact'>
         {/* <div className='contact-pic'>
          <img src={contactpic}/>
         </div> */}
         <div className='form-container'>
          <p className='contact-heading'>Conatct Us</p> 
     
              <form>
                <label  className='name' for="name">NAME</label>
                <div className='name-fields'>
                  
                  <div>
                    <label  className='names'
                    for="fname">First name:</label>
                    <input type="text" id="fname" name="fname"/>
                  </div>
                  <div>
                           <label  className='names'
                           for="lname">Last name:</label>
                            <input type="text" id="lname" name="lname"></input>
                  </div>
                </div>
                 <label for="email">Email:</label>
                   <input type="email" id="email" name="email"></input>
                      <label for="help">I Need Help Regarding</label>
                      <select>
                        <option value='refund'>Refund</option>
                          <option value='purchase'>Purchase</option>
                          <option value='repair'>Repair</option>           
                      </select>
                       <label for="message">MESSAGE</label>
                       <textarea id='message' name='message' placeholder='Type your message here'></textarea>
                       <button type='submit'>SUBMIT</button>
                      
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
