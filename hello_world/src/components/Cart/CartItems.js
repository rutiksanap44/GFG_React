const CartItems = ({ data }) => {
  return (
    <div className="checkout-modal_list-item">
      <div className="img-wrap">
        <img className="img-fluid" alt="image_here" src={data.thumbnail}></img>
      </div>
      <div className="information">
        <div>
          <h4>
            <b>{data.title}</b>
          </h4>
          <div className="pricing">
            <span>{data.discountedPrice}</span>
            <small>
              <strike>{data.price}</strike>
            </small>
          </div>
        </div>
        <div className="cart-addon cart-addon__modal">
          <button>-</button>
          <span className="counter">{0}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
