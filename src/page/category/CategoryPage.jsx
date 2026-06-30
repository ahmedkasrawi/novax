import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProducts/Product";

import { ProductsContext } from "../../context/ProductsContext";
import Container from "../../components/Container"
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
    <div className="category-page py-7.5">
      <Container className="">
        <h2 className="capitalize mb-2.5 pb-2.5 border-b border-violet-100 text-(--main-color) text-center text-[4vh] ">
          {" "}
          {category}{" "}
        </h2>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 xl:gap-5 justify-center">
          {relatedProducts.products.map((item, index) => (
            <Product key={index} item={item}></Product>
          ))}
        </div>
      </Container>
    </div>
  );
}
