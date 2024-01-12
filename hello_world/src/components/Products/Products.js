import ListItem from '../ListItems/ListItem'
import { useState } from 'react'

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

    const[item, setItem] = useState({
            id: 0,
            title: "Title of Product 1",
            discountedPrice: 340,
            price: 400,
            thumbnail: "/assets/random.jpg"
    
    })
    const handleTitle = (event) => {
        setItem({
            ...item,
            title:event.target.value
        })        
    }
    const handlePrice = (event) => {
        event.preventDefault();
        }
    const handleDiscountedPrice = (event) => {
        setItem({
            ...item,
            discountedPrice:event.target.value
        })
    }
    
    const handleButton = (event) => {
        
    }
    return (
        <div className='product-list'>
          { /* <div><input onChange={addProduct}></input></div> */}
          <ListItem data={item}></ListItem>
          <div>
          <form>
          <label>Title</label><br/>
          <input value={item.title} onChange={handleTitle}></input><br/>
          <label>Price</label><br/>
          <input onChange={handlePrice}></input><br/>
          <label>Discounted Price</label><br/>
          <input onChange={handleDiscountedPrice}></input><br/>
          <button onClick={handleButton}>Submit</button>
          </form>

          </div>
        </div>
    )
}

export default Products;