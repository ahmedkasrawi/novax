
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from "../Container"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import "./body.css"
import { Link } from 'react-router-dom';

function HeroSlider() {
    return (
      <div className="hero">
        <Container className="">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide >
              <div className="content absolute left-5 flex flex-col items-center ">
                <h4 className="uppercase text-lg font-normal sm:text-xl md:text-2xl lg:3xl">
                  introduction the new
                </h4>
                <h3>microsoft xbox </h3>
                <p>windows xp/10/7/8 ps3, Tv Box</p>
                <Link to="/" className="btn">
                  shop now
                </Link>
              </div>
              <img src="/banner1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content absolute left-5  flex flex-col items-center ">
                <h4 className="uppercase text-lg font-normal sm:text-xl md:text-2xl lg:3xl">
                  introduction the new
                </h4>
                <h3>microsoft xbox </h3>
                <p>windows xp/10/7/8 ps3, Tv Box</p>
                <Link to="/" className="btn">
                  shop now
                </Link>
              </div>
              <img src="/banner1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content absolute left-5 flex flex-col items-center ">
                <h4 className="uppercase text-lg font-normal sm:text-xl md:text-2xl lg:3xl">
                  introduction the new
                </h4>
                <h3>microsoft xbox </h3>
                <p>windows xp/10/7/8 ps3, Tv Box</p>
                <Link to="/" className="btn">
                  shop now
                </Link>
              </div>
              <img src="/banner3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    );
}

export default HeroSlider 




