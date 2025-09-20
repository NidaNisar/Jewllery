






import React, { createContext, useState, useEffect } from 'react';
import { Products } from '../../productjson';


export const Cartcontext = createContext();

const Cartprovider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [search, setsearch] = useState(false);
  const [shopping, setshopping] = useState(false);
  const [count, setcount] = useState(0);
  const [searchinput, setsearchinput] = useState('');

  const[product,setproduct]=useState(()=>
   Products.map((p)=> ({...p}))
 
  )
 
  const getQuantity=(id)=>{
      const pro= product.find((p)=>p.id===id)
       return  pro?  pro.quantity:1;
  }
   console.log("cartproduct",product)
  // console.log("cartcontext",cartItems)

  const getCartFromStorage = () => {
    const savedCart = localStorage.getItem('cartItem');
    if (!savedCart) return [];
  try {
      return JSON.parse(savedCart);
    } catch (e) {
      console.error("Invalid cart JSON in localStorage:", e);
      return [];
    }  
  };

  const saveCartToStorage = (cart) => {
    localStorage.setItem('cartItem', JSON.stringify(cart));
  };


  const addToCart = (item) => {
    let existingItems = getCartFromStorage();
    const cartin = existingItems.some(cartItem => cartItem.id === item.id);

    if (!cartin) {
      const itemWithQuantity = { ...item,item };
        // console.log("addtocart",item)
      existingItems.push(itemWithQuantity);
      saveCartToStorage(existingItems);
      setCartItems(existingItems);
    } else {
      console.log("item already exists");
     
    }
    ;
  };


  const increment = (id) => {

  setproduct(prev =>{
    return prev.map(p =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    )
  });
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity  + 1 } : item
    );
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
  };


  const decrement = (id) => {

    setproduct((prev) => {
  return prev.map(p =>
    p.id === id ? { ...p, quantity:p.quantity>1? p.quantity - 1:1 } : p
  );
 });
//                setCartItems(product);
    const updatedCart = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
  };

  
  const removeproduct = (reitem) => {
 
    const updatecart = cartItems.filter(item => item.id !== reitem.id);
         setproduct(()=>{
          return  Products.map((p)=> ({...p,quantity:1}))
         }) 
    setCartItems(updatecart);
    saveCartToStorage(updatecart);
  };

  //  Search
  const searchin = (event) => {
    setsearchinput(event.target.value);
  };

  //  Load cart on mount
  useEffect(() => {
    setCartItems(getCartFromStorage());
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const allcarts = getCartFromStorage();

  return (
    <Cartcontext.Provider
      value={{
        cartItems,
        setCartItems,
        removeproduct,
        searchin,
        allcarts,
        searchinput,
        setsearchinput,
        setsearch,
        setshopping,
        search,
        addToCart,
        increment,
        decrement,
        shopping,
        total,
        count,
        getQuantity,
        product
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

export default Cartprovider;
