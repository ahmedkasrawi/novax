import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      const data = JSON.parse(savedCart);
      return data;
    }
    return [];
  });
  // increase quantity
  function increaseQuantity(id) {
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }
  // decrease quantity
  function decreaseQuantity(id) {
    setCartItems((prevItem) =>
      prevItem.map((item) => {
        if (item.id == id) {
          return item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        }
        return item;
      }),
    );
  }
  // add
  const addToCart = (item) => {
    setCartItems((currentItems) => [...currentItems, { ...item, quantity: 1 }]);
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  // delete
  function deleteItem(id) {
    setCartItems((prevItem) => prevItem.filter((item) => id !== item.id));
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
