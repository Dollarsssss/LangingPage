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
          <h4 className='text-small'>เลือกแพ็คเกจสำหรับทำเว็บไซต์  ไม่ว่าธุรกิจเล็กหรือใหญ่</h4>
        </div>
        <div className="card-collection">
           {packages.map((item,index)=>
            <PackagesCard key={index} title={item.title} subTitle={item.subtitle} price={item.price} description={item.description} />
          )}
        </div>
      </div>
    </section>
  )
}

export default CardPackages