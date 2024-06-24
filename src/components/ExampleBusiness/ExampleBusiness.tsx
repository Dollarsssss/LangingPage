import './ExampleBusiness.css'
import Accordion from './Accordion/Accordion'
import { useState } from 'react';

function ExampleBusiness() {

  const contents = [
    {
      id: 1,
      title: <>เว็บไซต์ธุรกิจยานยนต์</>,
      content: <>หากคุณมีโชว์รูม หรือหน้าร้าน อยากสร้างตัวตน อยากมีแคตตาล็อกหรือโบรชัวร์ <br />
        ให้ลูกค้าคุณชมบนออนไลน์ ก้สามารถเป็นได้ได้อย่างง่าย เช่นเดียวกับโชว์รูม <br />
        รถยนต์แบรนด์ Mercedes Benz ภายใต้สังกัด BenzBKK Group</>,

    },
    {
      id: 2,
      title: <>เว็บไซต์ธุรกิจอุตสาหกรรม</>,
      content: <>หากคุณมีธุรกิจอุตสาหกรรมและมีเว็บไซต์ จะทำให้ธุรกิจของคุณมีโอกาสเติบโต <br />
        ได้มากขึ้นทั้งในประเทศ และนอกประเทศ เพราะเว็บไซต์ สามารถเข้าถึงได้ทั่วทุก <br />
        มุมโลก และรองรับได้หลากหลายภาษาตามต้องการ</>,
    },
    {
      id: 3,
      title: <>เว็บไซต์ธุรกีฬา</>,
      content: <>ปัจจุบันธุรกิจด้านสุขภาพเติมโตอย่างรวดเร็วในปัจจุบัน โดยเฉพาะอย่างยิ่งทาง <br />
        ด้านกีฬา หรือแม้แต่ธุรกิจที่เกี่ยวกับการจัดงาน การแข่งขัน อีเว้นท์ เราสามารถ <br />
        ออกแบบและพัฒนาระบบให้ลูกค้าสมัครเข้างานได้อย่างง่ายดาย</>,
    },
    {
      id: 4,
      title: <>เว็บไซต์ธุรกิจร้านค้าออนไลน์</>,
      content: <>หากคุณมีธุรกิจออนไลน์ หรืออยากจะเปิดธุรกิจออนไลน์ ก็สามารถเป็นได้ได้อย่าง <br />
        ง่าย ๆ ด้วยระบบ E-Commerce ที่ตอบโจทย์การทำงานของคุณ ไม่ว่าจะเป็น <br />
        ระบบจัดการคลังสินค้า ระบบสั่งซื้อ ระบบชำระเงิน ระบบขนส่ง และอื่นๆ</>,
    },
  ]

  const [openAccordionId, setOpenAccordionId] = useState<number | null>(1);
  const [openImg , setOpenImgId] = useState<number>(1)


  const handleAccordionToggle = (id: number) => {
    if (id === openAccordionId) {
      setOpenAccordionId(null); // ปิด Accordion ถ้ากดซ้ำ
     

    } else {
      setOpenAccordionId(id); // เปิด Accordion ใหม่
      setOpenImgId(id)

    }
  };
  return (
    <section className='example'>
      <div className="container">
        <div className="example-title">
          <h1>ตัวอย่างเว็บไซต์ตามประเภทธุรกิจ</h1>
          <h4>ลูกค้าส่วนหนึ่งจากตามแต่ละประเภทธุรกิจที่ไว้ใจให้เราได้ดูแล</h4>
        </div>
        <div className='example-content'>
          <div className="accordion-content">
            <div className="accordion-container">
              {contents.map((item, index) => (
                <Accordion key={index} id={item.id} title={item.title} content={item.content} isOpen={openAccordionId === item.id} onToggle={handleAccordionToggle} />
              ))}
            </div>
          </div>
          <div className="binded-content">
            <div className="binded-wrapper">
              <img id="img-1" className={`binded-img ${(openImg == 1) ? "open" :""}`} src="https://www.amjakastudio.co.th/assets/images/portfolio/benzbkk.jpg" alt="" />
              <img id="img-2" className={`binded-img ${(openImg == 2) ? "open" : ""}`} src="https://www.amjakastudio.co.th/assets/images/portfolio/splus.jpg" alt="" />
              <img id="img-3" className={`binded-img ${(openImg == 3) ? "open" : ""}`} src="https://www.amjakastudio.co.th/assets/images/portfolio/tca.jpg" alt="" />
              <img id="img-4" className={`binded-img ${(openImg == 4) ? "open" : ""}`} src="https://www.amjakastudio.co.th/assets/images/portfolio/sportforlife.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExampleBusiness