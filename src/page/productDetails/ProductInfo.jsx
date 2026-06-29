import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import useFavorites from "../../hooks/favorites";

export default function ProductInfo({ product, className }) {
  const { cartItems, addToCart } = useContext(CartContext);
  const { favoriteItems, addToFavorite, deleteItem } = useFavorites();
  const isInCart = cartItems.some((i) => i.id === product.id);
  const isFav = favoriteItems.some((i) => i.id === product.id);
  function addItemToCart(e) {
    if (!isInCart) {
      addToCart(product);
      e.target.disabled = true;
      e.preventDefault();
      e.stopPropagation();
    }
  }
  function handleFav() {
    if (!isFav) {
      addToFavorite(product);

    }else {
      deleteItem(product.id)
    }
  }
  return (
    <>
      <div
        className={`flex flex-col gap-5 h-full justify-between items-center  ${className}`}
      >
        <p className="text-(--p-color)">{product.description}</p>
        <div className="w-full flex justify-between items-center">
          <div className="text-md">Price: $ {product.price} </div>
          <h5>
            Availability: <span>{product.availabilityStatus}</span>
          </h5>
        </div>
        <h5>
          Brand: <span>{product.brand}</span>
        </h5>
        <h5 className="stock">
          {" "}
          <span>Harry up! only {product.stock} products left in stock.</span>
        </h5>
        <button
          className={`bg-(--main-color) text-white p-2 rounded-md duration-500 hover:-translate-y-1 ${isInCart ? "bg-gray-400" : "bg-(--main-color)"} `}
          onClick={addItemToCart}
        >
          Add To Cart <AddShoppingCartIcon />
        </button>
        <div className="w-full flex justify-between">
          <div className="text-amber-500 flex gap-1">
            <StarIcon /> <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
          </div>
          <div className="icons">
            <button
              onClick={handleFav}
              className={`${isFav ? "text-red-500" : "text-gray-800"}`}
            >
              <FavoriteBorderIcon className="fav icon" />
            </button>
            <ReplyIcon className="share icon" />
          </div>
        </div>
      </div>
    </>
  );
}
