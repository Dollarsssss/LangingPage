import './CardPackages.css'
import PackagesCard from './PackagesCard/PackagesCard'

function CardPackages() {

  const packages = [
    {
      title: <>Corporate</>,
      subtitle: <>เว็บไซต์สำหรับองค์กร</>,
      price:<>68,000</>,
      description:<>รับทำเว็บไซต์ขนาดกลาง <br />
      ไปจนถึงขนาดใหญ่<br />
      ระบบจัดการหลังบ้านที่สะดวกและ<br />
      จัดการได้ง่าย<br />
      พร้อมบริการเสริมการตลาด<br />
      ออนไลน์</>
    },
    {
      title: <>E-Commerce</>,
      subtitle: <>เว็บไซต์ร้านค้า ขายของออนไลน์</>,
      price:<>88,000</>,
      description:<>รับทำเว็บไซต์ร้านค้าออนไลน์เปิด <br />
      ขายและรับเงินได้ตลอดเวลา <br />
      รองรับทั้งร้านขนาดเล็กและ<br />
      ขนาดใหญ่</>
    },
    {
      title: <>Custom</>,
      subtitle: <>เว็บไซต์เฉพาะตามธุรกิจ</>,
      price:<>188,000</>,
      description:<>รับทำเว็บไซต์ที่ออกแบบโดยเฉพาะ <br />
      แบรนด์ หรือธุรกิจคุณเพื่อให้เหมาะ <br />
      กับกลุ่มเป้าหมาย และโจทย์ทาง<br />
      ธุรกิจ</>
    },
  ];
  return (
    <section className='cardPackages'>
      <div className="container">
        <div className="cardPackages-title">
          <h1>แพ็คเกจบริการทำเว็บที่เหมาะกับธุรกิจคุณ!</h1>
          <h4>เลือกแพ็คเกจสำหรับทำเว็บไซต์  ไม่ว่าธุรกิจเล็กหรือใหญ่</h4>
        </div>
        <div className="card-collection">
          <PackagesCard title={packages[0].title} subTitle={packages[0].subtitle} price={packages[0].price} description={packages[0].description}/>
          <PackagesCard title={packages[1].title} subTitle={packages[1].subtitle} price={packages[1].price} description={packages[1].description}/>
          <PackagesCard title={packages[2].title} subTitle={packages[2].subtitle} price={packages[2].price} description={packages[2].description}/>
        </div>
      </div>
    </section>
  )
}

export default CardPackages