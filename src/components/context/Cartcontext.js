import React, { createContext ,useState,useEffect} from 'react'
 export  const Cartcontext=createContext();
const Cartprovider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const[search,setsearch]=useState(false)
       const[shopping,setshopping]=useState(false)
       
           const[count,setcount]=useState(1)
           const increment=()=>{
               
               setcount(prev=> prev+1);
           }
            const decrement=()=>{
               if(count<=1)
               {
                   setcount(1)
                   return
               }
               setcount(prev=> prev-1);
           }
           const addToCart = (item) => {
        
 const existingItems=JSON.parse(localStorage.getItem('cartItem'))||[]
       const cartin=existingItems.some(cartItem=>cartItem.id===item.id)
      
       if(!cartin)
       {
                   
                            
                 const itemWithQuantity = { ...item, quantity: count  };
                        existingItems.push(itemWithQuantity);
                 console.log("product quanttiy",count);
                 localStorage.setItem('cartItem',JSON.stringify(existingItems))
             
                 
       }
       else{
        console.log("item already exist")
       } 
      }
                  useEffect(()=>{
            const allcarts =JSON.parse( localStorage.getItem('cartItem'))||[]
                   
            setCartItems(allcarts);
                           },[])
                           const removeproduct=(reitem)=>{
                               const updatecart= cartItems.filter(item=>item.id!==reitem.id)
                              setCartItems(updatecart);
                              localStorage.setItem('cartItem',JSON.stringify(updatecart))
      
                           }
                           const[searchinput,setsearchinput]=useState('')
                            const searchin =(event)=>{
            console.log("clicked on input")
                 setsearchinput(event.target.value)
       
                 console.log(event.target.value)
                 
    }
     const allcarts= JSON.parse( localStorage.getItem('cartItem'))||[]
  return (
  <Cartcontext.Provider value={{cartItems,setCartItems,removeproduct,searchin,searchinput,setsearchinput,allcarts,setsearch,setshopping,search,addToCart,count,setcount,increment,decrement,shopping}} >
    {children}
  </Cartcontext.Provider>)
}

export default Cartprovider
