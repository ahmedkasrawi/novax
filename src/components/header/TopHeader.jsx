import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
// import { FaSearch } from "react-icons/fa";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";
import "../../index.css";
import ButtonHeader from "./ButtonHeader";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import SearchBox from "./SearchBox";
import Container from "../Container";
import useFavorites from "../../hooks/favorites";

export default function TopHeader() {
  const { cartItems } = useContext(CartContext);
  const { favoriteItems } = useFavorites();
  return (
    <header
      className="
        top-header w-full flex flex-col items-center justify-center bg-(--bg-color) border-b border-gray-300 sticky
        left-0 top-0 z-500"
    >
      <Container className="flex items-center justify-between w-full h-15 my-2">
        <div className="font-extrabold text-white">
          <Link to="./" className="h-7 px-2">
            <img className=" h-7 scale-150" src="/logo1.svg" />
          </Link>
        </div>

        <SearchBox />
        <div className="flex items-center gap-4">
          <div className="icon" style={{ color: "rgba(255, 0, 0, 1)" }}>
            <Link to="/favorites">
              <FavoriteBorderIcon />
              <span className=" relative text-red-500 text-sm font-bold bottom-1.25">
                {favoriteItems.length}
              </span>
            </Link>
          </div>
          <div >
            <Link to="/cart ">
              <ShoppingCartIcon />
              <span className="relative text-(--main-color) text-sm font-bold bottom-1.25 -left-0.5 ">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>
      </Container>
      <ButtonHeader />
    </header>
  );
}
