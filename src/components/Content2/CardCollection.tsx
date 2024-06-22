import './CardCollection.css'
import { FaArrowRight } from "react-icons/fa6";

function CardCollection() {
  return (
    <section className='cardCollection'>
      <div className="container">
        <div className='card-title'>
          <h1>บริการของเรา</h1>
        </div>
        <div className='grid'>
          <div className="item">
            <div className='item-wrapper'>
              <div className='card-top'>
                Your logo
              </div>
              <div className='card-mid'>
                <h3>บริการออกแบบเว็บไซต์ <br /> Web Design</h3>
                <br />
                <h4>รับออกแบบเว็บไซต์ให้สวย พร้อม<br /> ใช้งานเหมาะสมกับธุรกิจคุณ</h4>
              </div>
            </div>
            <div className='card-footer'>
              <FaArrowRight className='arrow-right' />
            </div>
          </div>
          <div className="item">
            <div className='item-wrapper'>
              <div className='card-top'>
                Your logo
              </div>
              <div className='card-mid'>
                <h3>รับทำเว็บไซต์ <br /> Web Development</h3>
                <br />
                <h4>รับพัฒนาเว็บไซต์ธุรกิจ ร้านค้าออนไลน์ ฟังก์ชั่นครบทุกการใช้งาน </h4>
              </div>
            </div>
            <div className='card-footer'>
              <FaArrowRight className='arrow-right' />
            </div>
          </div>
          <div className="item">
            <div className='item-wrapper'>
              <div className='card-top'>
                Your logo
              </div>
              <div className='card-mid'>
                <h3> รับทำแอปพลิเคชั่น <br /> Mobile Development</h3>
                <br />
                <h4>รับพัฒนาแอปพลิเคชั่น รองรับ <br />ระบบ Android และ IOS</h4>
              </div>
            </div>
            <div className='card-footer'>
              <FaArrowRight className='arrow-right' />
            </div>
          </div>
          <div className="item">
            <div className='item-wrapper'>
              <div className='card-top'>
                Your logo
              </div>
              <div className='card-mid'>
                <h3>บริการ Custom LINE API <br /> LINE DEV</h3>
                <br />
                <h4>ทางออกในการเชื่อมต่อธุรกิจของคุณเข้ากับ LINE OA พิเศษเฉพาะธุรกิจคุณ</h4>
              </div>
            </div>
            <div className='card-footer'>
              <FaArrowRight className='arrow-right' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardCollection