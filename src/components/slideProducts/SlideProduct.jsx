import Product from "./Product";
import "./slide.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

function SlideProduct({ title, data }) {
  let productsList = data?.map((item) => {
    return (
      <SwiperSlide>
        <Product category={title} item={item} />
      </SwiperSlide>
    );
  });

  return (
    <div className="slide-products slide">
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <Swiper
          style={{ height: "auto" }}
          slidesPerView={4}
          spaceBetween={20}
          className="mySwiper"
          modules={[Autoplay]}
          loop={data?.length > 5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            520: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1400: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {productsList}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
