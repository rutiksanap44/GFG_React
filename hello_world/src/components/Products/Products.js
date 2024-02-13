import Form from "../Form/Form";
import ListItem from "../ListItems/ListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../UI/Loader";
const Products = ({ addItems, removeItems }) => {
  const [presentItems, setPresentItems] = useState([]);

  const [loader, setLoader] = useState(true);

  const handleAddItem = (id) => {
    // if(presentItems.indexOf(id)>-1){
    //   return;
    // }
    // setPresentItems([...presentItems, id])
    // addItems();
    let data = [...item];
    let index = data.findIndex((i) => i.id === id);
    data[index].quantity += 1;
    setItem([...data]);
    addItems(data[index]);
  };
  const handleRemoveItem = (id) => {
    // let index = presentItems.indexOf(id)
    // if(index>-1){
    //   let items = [...presentItems];
    //   items.splice(index,1)
    //   setPresentItems([...items])
    //   removeItems();
    // }
    let data = [...item];
    let index = data.findIndex((i) => i.id === id);
    if (data[index] !== 0) {
      data[index].quantity -= 1;
      setItem([...data]);
      removeItems(data[index]);
    }
  };

  const [item, setItem] = useState([
    {
      id: 0,
      title: "Title of Product 1",
      price: 400,
      discountedPrice: 340,
      thumbnail: "/assets/random.jpg",
    },
    {
      id: 1,
      title: "Title of Product 2",
      price: 400,
      discountedPrice: 340,
      thumbnail: "/assets/random.jpg",
    },
  ]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const responce = await axios.get(
          "https://gfgcart-default-rtdb.firebaseio.com/items.json"
        );
        const data = responce.data;
        const transformedData = data.map((item, index) => {
          return {
            ...item,
            quantity: 0,
            id: index,
          };
        });
        setLoader(false);
        setItem(transformedData);
      } catch (error) {
        setLoader(false);
        console.log(`Error - ${error}`);
      } finally {
        setLoader(false);
      }
    }
    fetchItems();
  }, []);

  const handleInput = (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  const updateItemInner = (itemId) => {
    console.log(`Item with an ID : ${itemId}`);
  };

  return (
    <div>
      <div className="product-list">
        {item.map((elements) => {
          return (
            <ListItem
              onAdd={handleAddItem}
              onRemove={handleRemoveItem}
              key={elements.id}
              data={elements}
              updateItemInner={updateItemInner}
            />
          );
        })}
        <Form item={item[0]} onChangeInput={handleInput}></Form>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default Products;
