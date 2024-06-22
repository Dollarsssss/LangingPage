import './CardCollection.css'
import ServiceCard from './ServiceCard/ServiceCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function CardCollection() {

  const services = [
    {
      title: <>บริการออกแบบเว็บไซต์<br />Web Design</>,
      subtitle: <>รับออกแบบเว็บไซต์ให้สวย พร้อมใช้งานเหมาะสมกับธุรกิจคุณ</>
    },
    {
      title: <>รับทำเว็บไซต์<br />Web Development</>,
      subtitle: <>รับพัฒนาเว็บไซต์ธุรกิจ ร้านค้าออนไลน์ ฟังก์ชั่นครบทุกการใช้งาน</>
    },
    {
      title: <>รับทำแอปพลิเคชั่น<br />Mobile Development</>,
      subtitle: <>รับพัฒนาแอปพลิเคชั่น รองรับระบบ Android และ IOS</>
    },
    {
      title: <>บริการ Custom LINE API <br /> LINE DEV</>,
      subtitle: <>ทางออกในการเชื่อมต่อธุรกิจของคุณเข้ากับ LINE OA พิเศษเฉพาะธุรกิจคุณ</>
    },
    {
      title: <>รับทำ SEO<br />Search Engine Optimization</>,
      subtitle: <>บริการ SEO Suggestion ให้ เว็บไซต์ของคุณ มีโอกาสติดอันดับบน google</>
    }
  ];

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
              <SwiperSlide><ServiceCard
                title={services[0].title}
                subtitle={services[0].subtitle}
              /></SwiperSlide>
              <SwiperSlide><ServiceCard
                title={services[1].title}
                subtitle={services[1].subtitle}
              /></SwiperSlide>
              <SwiperSlide><ServiceCard
                title={services[2].title}
                subtitle={services[2].subtitle}
              /></SwiperSlide>
              <SwiperSlide><ServiceCard
                title={services[3].title}
                subtitle={services[3].subtitle}
              /></SwiperSlide>
              <SwiperSlide> <SwiperSlide><ServiceCard
                title={services[4].title}
                subtitle={services[4].subtitle}
              /></SwiperSlide></SwiperSlide>
            </Swiper>
      
        </div>
      </div>
    </section>
  )
}

export default CardCollection


{/* <ServiceCard
title={services[0].title}
subtitle={services[0].subtitle}
/>
<ServiceCard
title={services[1].title}
subtitle={services[0].subtitle}
/>
<ServiceCard
title={services[2].title}
subtitle={services[0].subtitle}
/>
<ServiceCard
title={services[3].title}
subtitle={services[0].subtitle}
/> */}