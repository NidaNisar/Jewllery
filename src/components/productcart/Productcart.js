import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../../productjson'
import './productcart.css'
import main13 from '../../pictures/main3.jpg'
import Footer from '../footer/Footer'
const Productcart = () => {
    const[count,setcount]=useState(0)
    const increment=()=>{
        
        setcount(prev=> prev+1);
    }
     const decrement=()=>{
        if(count<=0)
        {
            setcount(0)
            return
        }
        setcount(prev=> prev-1);
    }
    const {id}=useParams();
    const product=Products.find((item)=>item.id===id)
    console.log(id);
    console.log(product.image)
  return (
    
    <div>

       <div className='cart-container'>
        <div className='cart-pic'>
              <img alt='' src={product.image}/>
        </div>
        <div className='cart-info'>
            <h1>{product.name}</h1>
            <hr/>
            <p>category: Necklace</p>
            <hr/>
            <h3>PKR {product.price}</h3>
            <div className='buttons'>
                <button>
                <div className='plus' onClick={increment}>+</div>
                <div className='number'>{count}</div>
                <div className='minus' onClick={decrement}>-</div>
                </button>
                <button className='addto'>
                   <p>Add to Cart</p> </button>
            </div>

        </div>
       </div>
<Footer/>
    </div>
  )
}

export default Productcart
