import AddtoCartIcon from "../../assets/icons/cart.svg";
import { Fragment, useState } from "react";
import Modal from "../UI/Modal";
const ListItem = ({ data, updateItemInner, onAdd, onRemove }) => {
  const [modal, setModal] = useState(false);

  const [counter, setCounter] = useState(0);

  const increaseCounter = (event) => {
    event.stopPropagation();
    onAdd(data.id);
    setCounter(counter + 1);
  };
  const decreaseCounter = (event) => {
    event.stopPropagation();
    if(counter === 0 ){
      return;
    }
    if (counter === 1) {
      onRemove(data.id );
    }
    setCounter(counter - 1);
  };

  const handleModal = () => {
    setModal((previousState) => !previousState);
  };
  return (
    <Fragment>
      <div className={"item-card"} onClick={handleModal}>
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
        <button className={"cart-add"} onClick={() => updateItemInner(data.id)}>
          Update Title
        </button>
        {counter === 0 ? (
          <div>
            <button onClick={increaseCounter} className={"cart-add"}>
              <span>Add to Cart</span>
              <img src={AddtoCartIcon} alt="cart here" />
            </button>
          </div>
        ) : (
          <div className="cart-addon">
            <button onClick={decreaseCounter}>
              <span>-</span>
            </button>
            <span className="counter">{counter}</span>
            <button onClick={increaseCounter}>
              <span>+</span>
            </button>
          </div>
        )}
      </div>
      {modal && (
        <Modal onClose={handleModal}>
          <div className="item_card__modal">
            <div className="img-wrap"></div>
            <img className={"img-fluid"} src={data.thumbnail} alt="Cart here" />
          </div>
          <div className="meta">
            <h3>{data.title}</h3>
          </div>
          <div className={"price_div"}>
            <div>
              <span>₹{data.price}</span>
            </div>
            <strike>{data.discountedPrice}</strike>
          </div>
          <div>
            <p>{data.description}</p>
          </div>
          {counter === 0 ? (
            <div>
              <button
                onClick={increaseCounter}
                className={"cart-add cart-add__modal"}
              >
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
        </Modal>
      )}
    </Fragment>
  );
};

export default ListItem;
