
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from "../Container"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles

import { Link } from 'react-router-dom';

function HeroSlider() {
    return (
      <div className=" ">
        <Container className="w-full h-62.5 md:h-75">
          <Swiper
            className=" w-full h-full ="
            pagination={true}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="flex items-center justify-center text-center text-[18px]">
              <div className="absolute left-5 h-full justify-center flex flex-col items-center ">
                <h4 className="uppercase text-lg font-normal sm:text-xl md:text-2xl lg:3xl">
                  introduction the new
                </h4>
                <h3 className="text-(--main-color) text-2xl">
                  microsoft xbox{" "}
                </h3>
                <p className="text-(--p-color) text-sm md:text-lg">
                  windows xp/10/7/8 ps3, Tv Box
                </p>
                <Link to="/" className="btn mt-2">
                  shop now
                </Link>
              </div>
              <img
                src="/banner1.jpg"
                alt="banner1"
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center text-center text-[18px]">
              <div className=" absolute left-5 h-full flex flex-col justify-center items-center gap-1 ">
                <h4 className="uppercase text-lg font-normal sm:text-xl md:text-2xl lg:3xl">
                  introduction the new
                </h4>
                <h3 className="text-(--main-color) text-2xl">
                  microsoft xbox{" "}
                </h3>
                <p className="text-(--p-color) text-sm md:text-lg">
                  windows xp/10/7/8 ps3, Tv Box
                </p>
                <Link to="/" className="btn mt-2">
                  shop now
                </Link>
              </div>
              <img
                src="/banner2.jpg"
                alt="banner2"
                className="h-full w-full  object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center text-center text-[18px]">
              <div className=" absolute left-5  h-full justify-center flex flex-col items-center ">
                <h4 className="uppercase text-lg font-normal sm:text-xl md:text-2xl lg:3xl">
                  introduction the new
                </h4>
                <h3 className="text-(--main-color) text-2xl">
                  microsoft xbox{" "}
                </h3>
                <p className="text-(--p-color) text-sm md:text-lg">
                  windows xp/10/7/8 ps3, Tv Box
                </p>
                <Link to="/" className="btn mt-2">
                  shop now
                </Link>
              </div>
              <img
                src="/banner3.jpg"
                alt="banner3"
                className="h-full object-cover w-full "
              />
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    );
}

export default HeroSlider 




