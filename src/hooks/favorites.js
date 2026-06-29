import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";


const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavorites يجب أن تُستدعى داخل نطاق FavoritesProvider فقط",
    );
  }
  return context;
};

export default useFavorites;
