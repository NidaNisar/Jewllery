import React from 'react';
import Home from '../home/Home'
import Items from '../items/Items';
import HomeProduct from '../Homeproduct/HomeProduct';
import Footer from '../footer/Footer'
const Main = () => {

  return (
    <div>
      <Home/>
      <Items/>
      <HomeProduct/>
      <Footer/>
    </div>
  );
}

export default Main;
