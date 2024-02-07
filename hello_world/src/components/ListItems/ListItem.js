import AddtoCartIcon from "../../assets/icons/cart.svg";
import { useState } from "react";
const ListItem = ({ data, updateItemInner }) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className={"item-card"}>
      <img className={"img-fluid"} src={data.thumbnail} alt="Cart here" />
      <div className={"item-card__information"}>
        <div className={"price_div"}>
          <div>
            <span>₹{data.price}</span>
          </div>
          <strike>{data.discountedPrice}</strike>
        </div>
        <div className={"title"}>
          <h2>{data.title}</h2>
        </div>
      </div>
      <button  className={"cart-add"} onClick={()=>updateItemInner(data.id)}>Update Title</button>
      {counter === 0 ? (
        <div>
          <button onClick={increaseCounter} className={"cart-add"}>
            <span>Add to Cart</span>
            <img src={AddtoCartIcon} alt="cart here" />
          </button>
        </div>
      ) : (
        <div className="cart-addon">
          <button
            onClick={() => {
              decreaseCounter();
            }}
          >
            <span>-</span>
          </button>
          <span className="counter">{counter}</span>
          <button
            onClick={() => {
              increaseCounter();
            }}
          >
            <span>+</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ListItem;
