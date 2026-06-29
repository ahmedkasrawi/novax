import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import UserProvider from "./context/AuthContext.jsx"
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/">
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </CartProvider>
      </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
