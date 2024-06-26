import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { PiChats } from "react-icons/pi";

function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="bg-img">
          <img
            src="https://www.amjakastudio.co.th/assets/img/landing/web-studio/footer-wave.png"
            alt="wave"
          />
        </div>
        <div className="container">
          <div className="text-top">
            <div className="text-info-top-left">
              <div className="title">
                <span>JoJo</span>
                <span>Studio</span>
              </div>
              <p>
                บริการออกแบบเว็บไซต์ จัดทำเว็บไซต์ พัฒนา <br />
                ระบบเว็บไซต์ E-Commerce พร้อมบริการการ <br />
                ตลาดออนไลน์
              </p>
              <p>
                <strong>บริษัท แอมจากา สตูดิโอ จำกัด</strong>
                <br />
                555/8 หมู่บ้าน บริทาเนีย เมกะทาวน์ บางนา <br /> หมู่ที่ 8
                ถนนบัวนครินทร์ ตำบลบางแก้ว อำเภอ
                <br /> บางพลี สมุทรปราการ 10540
              </p>
            </div>
            <div className="text-info-top-right">
              <div className="text-item-wrapper">
                <div className="text-item">
                  <h6>Who are we?</h6>
                  <ul>
                    <li>เกี่ยวกับเรา</li>
                    <li>ติดต่อเรา</li>
                    <li>ร่วมงานกับเรา</li>
                    <li>ลูกค้าของเรา</li>
                  </ul>
                </div>
                <div className="text-item">
                  <h6>Support</h6>
                  <ul>
                    <li>วิธีการชำระเงิน</li>
                    <li>แจ้งชำระค่าบริการ</li>
                  </ul>
                </div>
                <div className="text-item">
                  <h6>Contact us</h6>
                  <ul>
                    <li>support@jojostudio.co.th</li>
                    <li>++ 66 87 357 4494</li>
                    <li>++ 66 63 321 1444</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-bottom">
            <p>
                <span>© All rights reserved. AMJAKA Studio Co.,Ltd. </span>
            </p>

            <div className="social">
                <div className="icon">
                    <i><PiChats/></i>
                </div>
                <div className="icon">
                    <i><FaFacebookF/></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
