import "./slide.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplyIcon from "@mui/icons-material/Reply";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import DoneIcon from "@mui/icons-material/Done";
import useFavorites from "../../hooks/favorites.js";
function Product({ item }) {
  const { cartItems, addToCart } = useContext(CartContext);
  const { favoriteItems, addToFavorite, deleteItem } = useFavorites();

  const isInCart = cartItems.some((i) => i.id === item.id);
  const isInFavorites = favoriteItems.some((i) => i.id === item.id);
  function addItemToCart(e) {
    if (!isInCart) {
      addToCart(item);
      e.target.disabled = true;
      e.preventDefault();
      e.stopPropagation();
    }
  }
  function addItemToFavorites() {
    if (!isInFavorites) {
      addToFavorite(item);
    } else {
      deleteItem(item.id);
    }
  }
  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/products/${item.id}`} id={item.id}>
        {isInCart ? (
          <span className="status-cart">
            <DoneIcon
              fontSize="large"
              sx={{ fontSize: "19px !important", fontWeight: "bold" }}
            />{" "}
            in cart
          </span>
        ) : (
          ""
        )}
        <div className="pb-3 sm:pb-2 flex justify-center">
          <img className="h-30 w-auto" src={item.images[0]} alt="product" loading="lazy" />
        </div>
        <p className="name-product">{item.title}</p>
        <div className="stars">
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarHalfIcon className="star" />
        </div>
        <p className="price">{item.price}</p>
      </Link>
      <div className="icons">
        <span
          onClick={(e) => {
            addItemToCart(e);
          }}
        >
          {" "}
          <AddShoppingCartIcon />
        </span>
        <span
          className={isInFavorites ? "text-red-500" : "text-gray-500"}
          onClick={(e) => {
            addItemToFavorites(e);
          }}
        >
          <FavoriteIcon />
        </span>
        <span>
          {" "}
          <ReplyIcon />
        </span>
      </div>
    </div>
  );
}

export default Product;
