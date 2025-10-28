import React from 'react';
import './header.css'

const Header = () => {
  return (
    <div className='main-container'>
        <div className='icon-container'>
      <li><i class="fa-brands fa-instagram"></i></li> 
       <li><i class="fa-brands fa-facebook"></i></li>
       <li><i class="fa-brands fa-youtube"></i></li>
       <li><i class="fa-brands fa-tiktok"></i></li>
       <li><i class="fa-brands fa-square-snapchat"></i></li>
        </div>
      <div className='heading'>
          <h3>Delivery Available all over the Pakistan</h3>
      </div>
    </div>
  );
}

export default Header;
