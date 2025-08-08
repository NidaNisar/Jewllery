import React, { createContext ,useState,useEffect} from 'react'
 export  const Cartcontext=createContext();
const Cartprovider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const[search,setsearch]=useState(false)
       const[shopping,setshopping]=useState(false)
       
      
           const[count,setcount]=useState();
           const increment=(id)=>{   
                           
               const updatedCart = cartItems.map(item =>
          item.id === id ? { ...item,   quantity: item.quantity + 1  } : item
         
  );
         setCartItems(updatedCart);
             localStorage.setItem('cartItem', JSON.stringify(updatedCart));
            //  setcount(item.quantity)
            // setcount(prev=> prev+1);
          
           }

            const decrement=(id)=>{
            //    if(count<=1)
            //    {
            //        setcount(1)
            //        return
            //    }
            //    setcount(prev=> prev-1);
               
                const updatedCart = cartItems.map(item =>
    item.id === id ? { ...item,  quantity: item.quantity > 1 ? item.quantity-1:1   }:item
  );
         setCartItems(updatedCart);
             localStorage.setItem('cartItem', JSON.stringify(updatedCart));
          
           }
           const addToCart = (item) => {
        
 const existingItems=JSON.parse(localStorage.getItem('cartItem'))||[]
       const cartin=existingItems.some(cartItem=>cartItem.id===item.id)
      
       if(!cartin)
       {
                   
                            
                 const itemWithQuantity = { ...item, quantity: item.quantity  };
                        existingItems.push(itemWithQuantity);
                 
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
     const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
  <Cartcontext.Provider value={{cartItems,setCartItems,removeproduct,searchin,searchinput,setsearchinput,allcarts,setsearch,setshopping,search,addToCart,increment,decrement,shopping,total,count}} >
    {children}
  </Cartcontext.Provider>)
}

export default Cartprovider
