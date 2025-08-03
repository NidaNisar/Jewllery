import React, { createContext ,useState,useEffect} from 'react'
 export  const Cartcontext=createContext();
const Cartprovider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const[search,setsearch]=useState(false)
       const[shopping,setshopping]=useState(false)
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
                //   const allcarts= JSON.parse( localStorage.getItem('cartItem'))||[]
    }
  return (
  <Cartcontext.Provider value={{cartItems,setCartItems,removeproduct,searchin,searchinput,setsearchinput,allcarts,setsearch,setshopping,search}} >
    {children}
  </Cartcontext.Provider>)
}

export default Cartprovider
