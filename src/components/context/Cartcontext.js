import React, { createContext ,useState,useEffect} from 'react'
 export  const Cartcontext=createContext();
const Cartprovider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
                  useEffect(()=>{
            const allcarts =JSON.parse( localStorage.getItem('cartItem'))||[]
                   
            setCartItems(allcarts);
                           },[])
                           const removeproduct=(reitem)=>{
                               const updatecart= cartItems.filter(item=>item.id!==reitem.id)
                              setCartItems(updatecart);
                              localStorage.setItem('cartItem',JSON.stringify(updatecart))
      
                           }
  return (
  <Cartcontext.Provider value={{cartItems,setCartItems,removeproduct}} >
    {children}
  </Cartcontext.Provider>)
}

export default Cartprovider
