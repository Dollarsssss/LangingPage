import './CardCollection.css'
import ServiceCard from './ServiceCard/ServiceCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext } from 'react';
import { DataContext } from '../../App';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function CardCollection() {

const { services } = useContext (DataContext)


  return (
    <section className='cardCollection'>
      <div className="container">
        <div className='card-title'>
          <h1>บริการของเรา</h1>
        </div>
        <div >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}

            className="mySwiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard
                  logo={service.logo}
                  title={service.title}
                  subtitle={service.subtitle}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default CardCollection

