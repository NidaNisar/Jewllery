import React from 'react'

const Forget = () => {
  return (
    <div>
        <div className='forget-container'>
            <p>Forgot your Password</p>
            <p>We wil send you an email to reset your Password</p>
           <form>
                <label for="email">Email</label>
                   <input type="email" id="email" name="email" className='forget-email' placeholder='Enter your e-mail'/>
                   </form>
                   <div className='forget-buttons'>
                   <button className='forget'>Submit</button>
                   <button className='forget'>Cancel</button>
                   </div>
        </div>
    </div>
  )
}

export default Forget
