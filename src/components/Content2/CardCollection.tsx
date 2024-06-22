import './CardCollection.css'
import ServiceCard from './ServiceCard/ServiceCard';

function CardCollection() {

  const services = [
    {
      title: <>บริการออกแบบเว็บไซต์<br/>Web Design</>,
      subtitle: <>รับออกแบบเว็บไซต์ให้สวย พร้อมใช้งานเหมาะสมกับธุรกิจคุณ</>
    },
    {
      title: <>รับทำเว็บไซต์<br/>Web Development</>,
      subtitle: <>รับพัฒนาเว็บไซต์ธุรกิจ ร้านค้าออนไลน์ ฟังก์ชั่นครบทุกการใช้งาน</>
    },
    {
      title: <>รับทำแอปพลิเคชั่น<br/>Mobile Development</>,
      subtitle:<>รับพัฒนาแอปพลิเคชั่น รองรับระบบ Android และ IOS</>
    },
    {
      title: <>บริการ Custom LINE API <br/> LINE DEV</>,
      subtitle: <>ทางออกในการเชื่อมต่อธุรกิจของคุณเข้ากับ LINE OA พิเศษเฉพาะธุรกิจคุณ</>
    }
  ];

  return (
    <section className='cardCollection'>
      <div className="container">
        <div className='card-title'>
          <h1>บริการของเรา</h1>
        </div>
        <div className='grid'>
          <ServiceCard
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
          />
        </div>
      </div>
    </section>
  )
}

export default CardCollection