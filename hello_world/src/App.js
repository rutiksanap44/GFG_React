import React, { useState } from "react";
import Products from "./components/Products/Products";
import Header from "./components/Layout/Header";
import SubHeader from "./components/Layout/SubHeader";
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const AddCartItems = (item) => {
    let items = [...cartItems];
    let index = items.findIndex((i) => i.id === item.id);
    if (index > -1) {
      items[index] = item;
    } else {
      items.push(item);
    }
    setCartItems([...items]);
  };
  const RemovecartItems = (item) => {
    let items = [...cartItems];
    let index = items.findIndex((i) => i.id === item.id);
    if (items[index].quantity === 0) {
      items.splice(index, 1);
    } else {
      items[index] = item;
    }
    setCartItems([...items]);
  };

  console.log(cartItems);

  return (
    <div className="app">
      <Header count={cartItems.length} cartItemsList={cartItems}/>
      <SubHeader />
      <Products addItems={AddCartItems} removeItems={RemovecartItems} />
    </div>
  );
};

export default App;
