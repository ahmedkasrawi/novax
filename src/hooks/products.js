import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";


const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      "useProducts يجب أن تُستدعى داخل نطاق ProductsProvider فقط",
    );
  }
  return context;
};

export default useProducts;
