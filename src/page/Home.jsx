import SlideProduct from "../components/slideProducts/SlideProduct";
import HeroSlider from "../components/body/heroSlider";

import SlideLoading from "../components/slideProducts/SlideLoading";
import PageTransition from "../components/PageTransition";
import { INITIAL_CATEGORIES } from "../consts/index";
import useProducts from "../hooks/products";

function Home() {
  const { products, loading } = useProducts();
  
  const categoriesList = INITIAL_CATEGORIES?.map((category) => {
    return (
      <SlideProduct
        key={category}
        title={category.replace("-", " ")}
        data={products[category]}
      />
    );
  });

  const categoriesListLoading = INITIAL_CATEGORIES?.map((category) => {
    return <SlideLoading key={category} />;
  });
  // api error

  return (
    <PageTransition>
      <div className="mt-5">
        <HeroSlider />
        {loading ? categoriesListLoading : categoriesList}
      </div>
    </PageTransition>
  );
}

export default Home;
