import './Header.css'
import { FaArrowRight } from "react-icons/fa6";

function Header() {

  const scrollIntoView = () =>{
    const packagesElement = document.getElementById('CardPackages')
    packagesElement && packagesElement.scrollIntoView()
  }

  const scrollToContact = () => {
    const contactElement = document.getElementById('Contact');
    contactElement && contactElement.scrollIntoView();
  };

  return (
    <header>
        <div className="container">
            <div className='header-top'>
               <h1> รับทำเว็บไซต์ และการตลาดออนไลน์ </h1>
            </div>
            <div className='header-mid'>
                <h4>บริการพัฒนาเว็บไซต์ เว็บแอปพลิเคชั่น รองรับทุกการใช้งาน ทุกอุปกรณ์ <br />
                ทีมงานมากด้วยประสบการณ์ 200 ปี ปรึกษาฟรี!</h4>
            </div>
            <div className='header-bottom'>
                <a className='header-package' onClick={scrollIntoView}>
                    <h4>แพ็คเกจของเรา</h4>
                </a>
                <a className='header-contact' onClick={scrollToContact}>
                  <h4>ติดต่อทีมงาน</h4><FaArrowRight className='arrow-right'/>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header