import Form from "../Form/Form";
import ListItem from "../ListItems/ListItem";
import { useState } from "react";

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
  const [item, setItem] = useState({
    id: 0,
    title: "Title of Product 1",
    price: 400,
    discountedPrice: 340,
    thumbnail: "/assets/random.jpg",
  });

  const handleInput = (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  const handleButton = (event) => {};
  return (
    <div className="product-list">
      {/* <div><input onChange={addProduct}></input></div> 
      {item.map((elements) => {
        return <ListItem data={elements} />;
      })} */}
      <ListItem key={item.id} data={item}></ListItem>
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
      <Form item={item} onChangeInput={handleInput}></Form>
    </div>
  );
};

export default Products;
