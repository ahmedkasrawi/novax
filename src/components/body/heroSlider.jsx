
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
        <div className="container">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="content">
                <h4>introduction the new</h4>
                <h3>microsoft xbox </h3>
                <p>windows xp/10/7/8 ps3, Tv Box</p>
                <Link to="/" className="btn">
                  shop now
                </Link>
              </div>
              <img src="/banner1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>introduction the new</h4>
                <h3>microsoft xbox </h3>
                <p>windows xp/10/7/8 ps3, Tv Box</p>
                <Link to="/" className="btn">
                  shop now
                </Link>
              </div>
              <img src="/banner1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>introduction the new</h4>
                <h3>microsoft xbox </h3>
                <p>windows xp/10/7/8 ps3, Tv Box</p>
                <Link to="/" className="btn">
                  shop now
                </Link>
              </div>
              <img src="/banner3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
}

export default HeroSlider 




