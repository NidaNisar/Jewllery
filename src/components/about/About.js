import React from 'react'
import './About.css'
import about2 from '../../pictures/about2.jpg'
import Footer from '../footer/Footer'
const About = () => {
  return (
    <div >
         <div className='about-container'>
          <img src={about2}/>
          <div className='para1'>
            <p>About Us</p>
            In general, text refers to any written or printed material, or the words that make up something written or spoken. It can also refer to the main body of a work, distinct from illustrations or notes. In a broader sense, "text" can encompass any object that can be "read" and interpreted, including things like street signs, clothing styles, or even arrangements of buildings. 
             In general, text refers to any written or printed material, or the words that make up something written or spoken. I
          </div>
         </div>
         <div className='para2'>
           In general, text refers to any written or printed material, or the words that make up something written or spoken. It can also refer to the main body of a work, distinct from illustrations or notes. In a broader sense, "text" can encompass any object that can be "read" and interpreted, including things like street signs, clothing styles, or even arrangements of buildings. 
         </div>
                     <Footer/>
    </div>
  )
}

export default About
