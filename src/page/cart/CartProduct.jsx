import { useContext } from "react";
import "./cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../context/CartContext";

function CartProduct({ item }) {
  const { increaseQuantity, decreaseQuantity, deleteItem } =
    useContext(CartContext);
  return (
    <>
      <div
        className=" flex w-full justify-between items-center h-31.25 gap-0
        border-b border-gray-300 pr-5"
      >
        <div className="flex gap-1">
          <img src={item.thumbnail} alt={item.title} className="h-22" />
          <div className="tex-sm flex flex-col gap-1">
            <h4 className="text-(--main-color) w-30 sm:w-50 line-clamp-1">
              {item.title}
            </h4>
            <p className="text-lg">{item.price}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <button
            className="bg-gray-200 px-2 rounded hover:cursor-pointer active:scale-95"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>
          <span className="font-bold">{item.quantity}</span>
          <button
            className="bg-gray-200 px-2 rounded hover:cursor-pointer active:scale-95"
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>
        </div>
        <button
          className="text-red-500 hover:animate-pulse hover:cursor-pointer "
          onClick={() => deleteItem(item.id)}
        >
          <DeleteIcon />
        </button>
      </div>
    </>
  );
}

export default CartProduct;
