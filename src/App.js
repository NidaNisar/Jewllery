import logo from './logo.svg';
import './App.css';
import   Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Main from './components/main/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/home/Home';
import Product from './components/product/Product';
import Contact from './components/contact/Contact'
import NewArrivals from './components/newarrivals/Newarrivals'
import About from './components/about/About'
import Login from './components/login/Login'
import Signup from './components/signup/Signup';
import Productcart from './components/productcart/Productcart';
import Categoryproduct from './components/categoryproduct/Categoryproduct';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Navbar/>
   
      <Routes>
  <Route path="/" element={<Main />} />
  <Route path="/product" element={<Product/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/about" element={<About/>}/>
  <Route path="/newarrivals" element={<NewArrivals/>}/>
    <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
       <Route path="/productcart/:id" element={<Productcart/>}/>
       <Route path="/categoryproduct/:categoryid" element={<Categoryproduct/>}/>

</Routes>
    </div>
    </BrowserRouter>
  );
}
//  git remote add origin http://github.com/NidaNisar/Jewllery.git
export default App;
