import {  useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./product.css";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import ProductLoading from "./ProductLoading";
import ProductInfo from "./ProductInfo";
import ProductImages from "./ProductImages";
import PageTransition from "../../components/PageTransition";
import useProducts from "../../hooks/products";
import Container from "../../components/Container";
import Button  from "../../components/Button";
function ProductDetails() {
  const {
    fetchProductById,
    loading,
    product,
    relatedProducts,
    fetchProductsByCategory,
    loadingRelatedProducts,
  } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetchProductsByCategory(product.category);
  }, [product?.category]);

  
  if (loading) {
    return (
      <div>
        <ProductLoading />
      </div>
    );
  }
  if (product == null) {
    return (
      <div className="bg-gray-200 flex justify-center gap-5 flex-col h-[calc(100vh-110px)] items-center">
        <p className="font-bold text-2xl"> product not found</p>
        <Link to="/home">
        <Button className="text-white bg-(--main-color)"> back to home </Button>
        </Link>
      </div>
    );
  }

  return (
    <PageTransition key={id}>
      <Container className=" box-border py-10">
        {loading ? (
          <div>
            <ProductLoading />
          </div>
        ) : (
          <div>
            <div className=" flex justify-between flex-col items-center gap-10 md:flex-row border-2 border-gray-500 p-5 rounded-md">
              <ProductImages product={product} className="flex-2 w-full" />
              <ProductInfo product={product} className="flex-3 w-full h-full" />
            </div>
          </div>
        )}
        <div className="related">
          {loadingRelatedProducts ? (
            <p>loading</p>
          ) : (
            <SlideProduct
              title={"related products"}
              data={relatedProducts.products}
            ></SlideProduct>
          )}
        </div>
      </Container>
    </PageTransition>
  );
}

export default ProductDetails;
