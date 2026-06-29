import { useContext } from "react";
import "./cart.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from "../../context/CartContext";

function CartProduct({item}) {
    const {increaseQuantity, decreaseQuantity, deleteItem} =useContext(CartContext)
    return (
        <>
            <div className="item-cart">
                <div className="image-name">
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="content">
                        <h4 className='title'>{item.title}</h4>
                        <p className="price_item">{item.price}</p>
                        <div className="quantity_control">
                            <button onClick={()=> decreaseQuantity(item.id)}>-</button>
                            <span className="quantity">{item.quantity}</span>
                            <button onClick={()=> increaseQuantity(item.id)}>+</button>
                        </div>
                    </div>
                    
                </div>
                <button className="delete-item" onClick={()=> deleteItem(item.id)}><DeleteIcon/></button>
            </div>
        </>
    )
}

export default CartProduct
