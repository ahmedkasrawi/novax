import Home from "./page/Home";
import "./App.css";
import MainLayout from "./components/MainLayout";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./page/productDetails/ProductDetails";
import Cart from "./page/cart/Cart";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "motion/react";
import CategoryPage from "./page/category/CategoryPage";
import About from "./page/about/About";
import Contact from "./page/about/Contact";
import FavoritesPage from "./page/favorites/FavoritesPage";
import NotFoundPage from "./page/NotFound.page";
import LoginPage from "./page/login/Login.page";
function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
