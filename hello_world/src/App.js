import React, { useState } from 'react'
import Products from './components/Products/Products'
import Header from './components/Layout/Header';
import SubHeader from './components/Layout/SubHeader';
const App = () => {
  
  const[cartItems, setCartItems] = useState(0);

  const AddCartItems = () => {
    setCartItems(cartItems+1)
  }
  const RemovecartItems = () => {
    setCartItems(cartItems - 1)
  }

  return (
    <div className='app'>
    <Header count = {cartItems}/>
    <SubHeader/>
    <Products addItems = {AddCartItems} removeItems = {RemovecartItems} />
    </div>
  );
}

export default App;
