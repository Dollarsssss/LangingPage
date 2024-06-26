import './ExampleBusiness.css'
import Accordion from './Accordion/Accordion'
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../../App';

function ExampleBusiness() {

  const {contents} = useContext(DataContext);
  
  
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
          <h4 className='text-small' >ลูกค้าส่วนหนึ่งจากตามแต่ละประเภทธุรกิจที่ไว้ใจให้เราได้ดูแล</h4>
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