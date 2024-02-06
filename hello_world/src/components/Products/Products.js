import Form from "../Form/Form";
import ListItem from "../ListItems/ListItem";
import { useEffect, useState } from "react";
import axios from 'axios'

// const items = [
//     {
//         id: 0,
//         title: "Title of Product 1",
//         discountedPrice: 340,
//         price: 400,
//         thumbnail: "/assets/random.jpg"

//     },
//     {
//         id: 1,
//         title: "Title of Product 2",
//         discountedPrice: 500,
//         price: 460,
//         thumbnail: "/assets/random.jpg"
//     }
// ]

const Products = () => {
  const [item, setItem] = useState([
    {
      id: 0,
    title: "Title of Product 1",
    price: 400,
    discountedPrice: 340,
    thumbnail: "/assets/random.jpg"
    },{
      id: 1,
    title: "Title of Product 2",
    price: 400,
    discountedPrice: 340,
    thumbnail: "/assets/random.jpg"
    }
    ]);

  useEffect(() => {
    async function fetchItems(){
      try{
        const responce = await axios.get('https://gfgcart-default-rtdb.firebaseio.com/items.json');
        const data = responce.data;
        const transformedData = data.map((item,index) => {
          return {
            ...item,
            id : index
          }
        })
        setItem(transformedData)
      }
      catch(error){
        console.log(`Error - ${error}`)
      }
    }
    fetchItems();
  },[]);

  const handleInput = (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  const updateItemInner = itemId => {
    console.log(`Item with an ID : ${itemId}`)
  }

  // const handleButton = (event) => {};
  return (
    <div className="product-list">
      {item.map((elements) => {
        return <ListItem key={elements.id} data={elements} updateItemInner={updateItemInner}/>;
      })}
      <div>
        {/* <form>
          <label>Title</label>
          <br />
          <input name="title" value={item.title} onChange={handleInput}></input>
          <br />
          <label>Price</label>
          <br />
          <input name="price" value={item.price} onChange={handleInput}></input>
          <br />
          <label>Discounted Price</label>
          <br />
          <input
            name="discountedPrice"
            value={item.discountedPrice}
            onChange={handleInput}
          ></input>
          <br />
          <button onClick={handleButton}>Submit</button>
    </form> */}
      </div>
      <Form item={item[0]} onChangeInput={handleInput}></Form>
    </div>
  );
};

export default Products;
