import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProduct from "./CartProduct";
import Container from "../../components/Container";
import {Link} from "react-router-dom"
import "./cart.css";

function Cart() {
  const { cartItems } = useContext(CartContext);
  if (cartItems.length == 0) {
    return (
      <Container className="h-[calc(100vh-150px)] flex justify-center items-center flex-col gap-3">
        <p className="font-bold text-xl">
          You Didn't Add Products To Cart Yet
        </p>
        <button className="bg-violet-600 text-white py-1.5 px-2 rounded">
          <Link to="/">Discover Our Products</Link>
        </button>
      </Container>
    );
  }

  const cartList = cartItems.map((item, index) => {
    return <CartProduct key={index} item={item} />;
  });
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
      <div className=" my-8 flex justify-center">
        <div className="w-9/10 bg-white md:w-[50%] p-5 border border-(--border-color) rounded-md shadow-[5px_8px_10px_#c0bfbf44]">
          <h1 className="pb-5 border-b border-(--border-color) text-(--main-color) font-bold">
            Order Summery
          </h1>
          <div className="h-83 overflow-y-auto py-5">{cartList}</div>
          <div className="border-t border-(--border-color) pt-5 ">
            <div className="flex justify-between items-center mb-5">
              <p className="text-[18px] text-(--heading-color) capitalize">
                total:
              </p>
              <span className="text-[18px] font-bold">
                ${(+total).toFixed(2)}
              </span>
            </div>
            <div className="border-t border-(--border-color) py-5">
              <button
                className="w-full rounded-lg font-bold bg-(--main-color) text-white p-2 
                cursor-pointer transition duration-400 hover:bg-purple-700"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
