import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useFavorites يجب أن تُستدعى داخل نطاق FavoritesProvider فقط",
    );
  }
  return context;
};

export default useAuth;
