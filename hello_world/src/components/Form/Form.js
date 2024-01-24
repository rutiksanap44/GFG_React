const Form = (props) => {
    const handleInput = e => {
        props.onChangeInput(e);
    }
    
    const handleButton = (event) => {
        event.preventDefault();
    }
    return (
        <form>
            <label>Title</label><br />
            <input value={props.item.title} onChange={handleInput}></input><br />
            <label>Price</label><br />
            <input value={props.item.price} onChange={handleInput}></input><br />
            <label>Discounted Price</label><br />
            <input value={props.item.discountedPrice} onChange={handleInput}></input><br />
            <button onClick={handleButton}>Submit</button>
        </form>
    )
}
export default Form;
