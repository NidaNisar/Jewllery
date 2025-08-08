import React from 'react';
 import main4 from '../../pictures/main4.jpg'
  import main12 from '../../pictures/main12.jpg'
  import home1 from '../../pictures/home1.jpg'
 import './home.css'
const Home = () => {
  return (
    <div className='main-pic'>
         <div>
            <img alt='' src={home1}/>
         </div>
       
      <div className='pic-text'>
            <p>Jewellery that <br></br> tells your
            <br></br> story</p>
          
        </div>
    </div>
  );
}

export default Home;
