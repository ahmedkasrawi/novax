import {
  createContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { BASE_URL, INITIAL_CATEGORIES } from "../consts/index";
const ProductsContext = createContext();

const ProductsProvider = function ({ children }) {
  const [products, setProducts] = useState({});
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // loading , error
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);
  const [allCategories, setAllCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const results = await Promise.all(
          INITIAL_CATEGORIES.map(async (category) => {
            const res = await fetch(`${BASE_URL}/category/${category}`);
            if (!res.ok)
              throw new Error(`  error in getting data: ${category}`);
            const data = await res.json();
            return { [category]: data.products || [] };
          }),
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (err) {
        console.error("Fetch Initial Products Error:", err);
        setError(err.message || "unexpect error happened in data getting");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const fetchProductById = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${BASE_URL}/${id}`);
      if (!res.ok) throw new Error(`  error in getting product`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error(`Error Fetching Product (${id}):`, err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchProductsByCategory = async (category) => {
    try {
      setLoadingRelatedProducts(true);
      setError(null);
      const res = await fetch(`${BASE_URL}/category/${category}`);
      if (!res.ok) throw new Error(` error in getting related products`);
      const data = await res.json();
      setRelatedProducts(data, []);
    } catch (err) {
      console.error("Error Fetching Related Products:", err);
      setError(err.message);
    } finally {
      setLoadingRelatedProducts(false);
    }
  };

  const getCategories = async () => {
    try {
      setError(null);
      const res = await fetch(`${BASE_URL}/categories`);
      if (!res.ok) throw new Error(" error happened in getting all categories");
      const data = await res.json();
      setAllCategories(data);
    } catch (err) {
      console.error("Error Fetching Categories:", err);
      setError(err.message);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        product,
        fetchProductById,
        fetchProductsByCategory,
        relatedProducts,
        loadingRelatedProducts,
        allCategories,
        getCategories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export { ProductsContext, ProductsProvider };
