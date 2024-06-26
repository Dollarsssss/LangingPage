import "./Contact.css";
import ContactCard from "./ContactCard/ContactCard";
import { useContext } from "react";
import { DataContext } from "../../App";

function Contact() {

    const {contacts} = useContext(DataContext)
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-text">
          <div className="contact-text-wrapper">
            <h2>ติดต่อเรา</h2>
            <p>
              <strong>บริษัท แอมจากา สตูดิโอ จำกัด</strong>
              <br />
              555/8 หมู่บ้าน บริทาเนีย เมกะทาวน์ บางนา หมู่ที่ 8 ถนนบัว นครินทร์
              ตำบลบางแก้ว อำเภอบางพลี สมุทรปราการ 10540
            </p>
            <p>E-mail: support@amjakastudio.co.th</p>
            <p>Tel: 087-357-4494</p>
            <div>
              <a href="">
                <img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" />
              </a>
            </div>
            <strong>
              "เพราะ AMJAKA Studio คือทีมงานที่เชี่ยวชาญด้านเว็บไซต์ ที่มี
              <br />
              ประสบการณ์มากกว่า 10 ปี"
            </strong>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card-wrapper">
            <div className="card-left">
                <ContactCard logo={contacts[0].logo} title={contacts[0].title} subtitle={contacts[0].subtitle}/>
                <br />
                <ContactCard logo={contacts[1].logo} title={contacts[1].title} subtitle={contacts[1].subtitle}/>
            </div>
            <div className="card-right">
                <ContactCard logo={contacts[2].logo} title={contacts[2].title} subtitle={contacts[2].subtitle}/>
                <br />
                <ContactCard logo={contacts[3].logo} title={contacts[3].title} subtitle={contacts[3].subtitle}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
