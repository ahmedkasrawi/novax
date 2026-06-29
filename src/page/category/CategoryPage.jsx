import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProducts/Product";
import "./category.css";
import { ProductsContext } from "../../context/ProductsContext";

export default function CategoryPage() {
  const { category } = useParams();
  const { fetchProductsByCategory, relatedProducts, loadingRelatedProducts } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchProductsByCategory(category);
  }, [category]);

  if (loadingRelatedProducts) {
    return <p> loading...</p>;
  }

  return (
    <div className="category-page">
      <div className="container">
        <h2> {category} </h2>
        <div className="products">
          {relatedProducts.products.map((item, index) => (
            <Product key={index} item={item}></Product>
          ))}
        </div>
      </div>
    </div>
  );
}
