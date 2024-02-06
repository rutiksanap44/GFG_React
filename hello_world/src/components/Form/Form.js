const Form = (props) => {
    
    const handleButton = (event) => {
        event.preventDefault();
    }
    const handleInput = e => {
        props.onChangeInput(e)
    }
    return (
        <form onSubmit = { () => {}}>
            <label>Title</label><br />
            <input name="title" value={props.item.title} onChange={handleInput}></input><br />
            <label>Price</label><br />
            <input name="price" value={props.item.price} onChange={handleInput}></input><br />
            <label>Discounted Price</label><br />
            <input name="discountedPrice" value={props.item.discountedPrice} onChange={handleInput}></input><br />
            <button onClick={handleButton}>Submit</button>
        </form>
    )
}
export default Form;
