import { ReactNode  } from "react";

//service object
export interface Service {
    logo: ReactNode;
    title: ReactNode;
    subtitle: ReactNode;
  }
export const services: Service[] = [
    {
      logo: <svg className="d-block mx-auto mb-4" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path style={{ color: '#08c5f9' }} className="text-sub" d="M50,15.1V8.7c0-2.1-1.7-3.9-3.9-3.9H9.9C7.7,4.8,6,6.5,6,8.7v6.4H50z M35.7,10h7.7c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3h-7.7c-0.7,0-1.3-0.6-1.3-1.3C34.4,10.5,35,10,35.7,10z M22.8,10c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3C21.6,10.5,22.1,10,22.8,10z M17.7,10c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3C16.4,10.5,17,10,17.7,10z M12.5,10c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3C11.2,10.5,11.8,10,12.5,10z" fill="currentColor"></path>
        <path style={{ color: '#1638d8' }} className="text-main" d="M6,17.7v27.1c0,2.1,1.7,3.9,3.9,3.9h36.3c2.1,0,3.9-1.7,3.9-3.9V17.7H6z M21.1,36c0.6,0.4,0.6,1.3,0.2,1.8c-0.4,0.6-1.3,0.6-1.8,0.2L13,32.9c-0.6-0.5-0.6-1.5,0-2l6.4-5.2c0.6-0.4,1.4-0.4,1.8,0.2c0.4,0.6,0.4,1.4-0.2,1.8l-5.2,4.1L21.1,36z M33.1,23.4l-7.7,18c-0.3,0.7-1,1-1.7,0.7c-0.7-0.3-1-1-0.7-1.7l7.7-18c0.3-0.7,1-1,1.7-0.7S33.3,22.7,33.1,23.4z M43,32.9L36.5,38c-0.6,0.4-1.4,0.4-1.8-0.2c-0.4-0.6-0.4-1.4,0.2-1.8l5.2-4.1l-5.2-4.1c-0.6-0.4-0.6-1.3-0.2-1.8c0.4-0.6,1.3-0.6,1.8-0.2l6.4,5.2C43.6,31.4,43.6,32.4,43,32.9z" fill="currentColor"></path>
      </svg>,
      title: <>บริการออกแบบเว็บไซต์<br />Web Design</>,
      subtitle: <>รับออกแบบเว็บไซต์ให้สวย พร้อมใช้งานเหมาะสมกับธุรกิจคุณ</>
    },
    {
      logo: <svg className="d-block mx-auto mb-4" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path style={{ color: '#08c5f9' }} className="text-sub" d="M50,15.1V8.7c0-2.1-1.7-3.9-3.9-3.9H9.9C7.7,4.8,6,6.5,6,8.7v6.4H50z M35.7,10h7.7c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3h-7.7c-0.7,0-1.3-0.6-1.3-1.3C34.4,10.5,35,10,35.7,10z M22.8,10c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3C21.6,10.5,22.1,10,22.8,10z M17.7,10c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3C16.4,10.5,17,10,17.7,10z M12.5,10c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3C11.2,10.5,11.8,10,12.5,10z" fill="currentColor"></path>
        <path style={{ color: '#1638d8' }} className="text-main" d="M6,17.7v27.1c0,2.1,1.7,3.9,3.9,3.9h36.3c2.1,0,3.9-1.7,3.9-3.9V17.7H6z M21.1,36c0.6,0.4,0.6,1.3,0.2,1.8c-0.4,0.6-1.3,0.6-1.8,0.2L13,32.9c-0.6-0.5-0.6-1.5,0-2l6.4-5.2c0.6-0.4,1.4-0.4,1.8,0.2c0.4,0.6,0.4,1.4-0.2,1.8l-5.2,4.1L21.1,36z M33.1,23.4l-7.7,18c-0.3,0.7-1,1-1.7,0.7c-0.7-0.3-1-1-0.7-1.7l7.7-18c0.3-0.7,1-1,1.7-0.7S33.3,22.7,33.1,23.4z M43,32.9L36.5,38c-0.6,0.4-1.4,0.4-1.8-0.2c-0.4-0.6-0.4-1.4,0.2-1.8l5.2-4.1l-5.2-4.1c-0.6-0.4-0.6-1.3-0.2-1.8c0.4-0.6,1.3-0.6,1.8-0.2l6.4,5.2C43.6,31.4,43.6,32.4,43,32.9z" fill="currentColor"></path>
      </svg>,
      title: <>รับทำเว็บไซต์<br />Web Development</>,
      subtitle: <>รับพัฒนาเว็บไซต์ธุรกิจ ร้านค้า <br />ออนไลน์ ฟังก์ชั่นครบทุกการใช้งาน</>
    },
    {
      logo: <svg className="d-block mx-auto mb-4" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path style={{ color: '#1638d8' }} className="text-main" d="M39.2,0H16.8c-3.1,0-5.6,2.5-5.6,5.6V9h33.6V5.6C44.8,2.5,42.3,0,39.2,0z M30.2,6.7h-4.5c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h4.5c0.6,0,1.1,0.5,1.1,1.1S30.9,6.7,30.2,6.7z" fill="currentColor"></path>
        <path style={{ color: '#1638d8' }} className="text-main" d="M11.2,47v3.4c0,3.1,2.5,5.6,5.6,5.6h22.4c3.1,0,5.6-2.5,5.6-5.6V47H11.2L11.2,47z M28,51.5c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C29.1,51,28.6,51.5,28,51.5z" fill="currentColor"></path>
        <path style={{ color: '#08c5f9' }} className="text-sub" d="M11.2,11.2v33.6h33.6V11.2H11.2z M23.6,30.8c0.3,0.3,0.4,0.8,0.1,1.2s-0.9,0.5-1.2,0.3l-4.2-3.5c-0.4-0.4-0.4-1,0-1.4l4.2-3.5c0.4-0.3,0.9-0.3,1.2,0.1c0.3,0.3,0.3,0.9-0.1,1.2L20.2,28L23.6,30.8z M31.3,22.3l-5,12.2c-0.2,0.4-0.7,0.6-1.1,0.5c-0.4-0.1-0.6-0.7-0.4-1.1l5-12.2c0.2-0.5,0.7-0.7,1.1-0.5C31.3,21.3,31.5,21.9,31.3,22.3z M37.7,28.7l-4.2,3.5c-0.3,0.3-0.9,0.2-1.2-0.3C32,31.6,32,31,32.4,30.7l3.4-2.8l-3.4-2.8c-0.3-0.3-0.4-0.8-0.1-1.2c0.3-0.3,0.8-0.4,1.2-0.1l4.2,3.5C38.1,27.7,38.1,28.3,37.7,28.7z" fill="currentColor"></path>
      </svg>,
      title: <>รับทำแอปพลิเคชั่น<br />Mobile Development</>,
      subtitle: <>รับพัฒนาแอปพลิเคชั่น รองรับ <br />ระบบ Android และ IOS</>
    },
    {
      logo: <svg className="d-block mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
        <g id="Group_148" data-name="Group 148" transform="translate(-3980 -1907)">
          <g style={{ color: '#1638d8' }} className="text-main" id="Group_147" data-name="Group 147" fill="currentColor">
            <path id="Path_130" data-name="Path 130" d="M39.2,0H16.8a5.591,5.591,0,0,0-5.6,5.6V9H44.8V5.6A5.591,5.591,0,0,0,39.2,0Zm-9,6.7H25.7a1.1,1.1,0,1,1,0-2.2h4.5a1.11,1.11,0,0,1,1.1,1.1A1.049,1.049,0,0,1,30.2,6.7Z" transform="translate(3977.8 1907)"></path>
            <path id="Path_131" data-name="Path 131" d="M11.2,47v3.4A5.591,5.591,0,0,0,16.8,56H39.2a5.591,5.591,0,0,0,5.6-5.6V47ZM28,51.5a1.1,1.1,0,1,1,1.1-1.1A1.11,1.11,0,0,1,28,51.5Z" transform="translate(3977.8 1907)"></path>
          </g>
          <g style={{ color: '#08c5f9' }} className="text-sub" id="Group_146" data-name="Group 146" fill="currentColor">
            <path id="Exclusion_1" data-name="Exclusion 1" d="M33.6,33.6H0V0H33.6V33.6ZM16.8,6.275c-6.091,0-11.047,4.021-11.047,8.964,0,4.417,3.885,8.136,9.239,8.844.376.081.851.241.973.544a2.127,2.127,0,0,1,.036,1c0,.008-.13.781-.158.945l0,.025a.81.81,0,0,0,.057.613.368.368,0,0,0,.3.115,1.669,1.669,0,0,0,.608-.157,35.336,35.336,0,0,0,8.679-6.413,8.019,8.019,0,0,0,2.367-5.515C27.846,10.3,22.891,6.275,16.8,6.275Z" transform="translate(3989 1918.2)"></path>
            <path id="Path_134" data-name="Path 134" d="M149.187,68.753h-3.1a.211.211,0,0,1-.211-.211v0h0V63.726h0v0a.211.211,0,0,1,.211-.211h3.1a.211.211,0,0,1,.211.211V64.5a.211.211,0,0,1-.211.211h-2.109v.813h2.109a.212.212,0,0,1,.211.211v.783a.211.211,0,0,1-.211.211h-2.109v.813h2.109a.212.212,0,0,1,.211.211v.783a.211.211,0,0,1-.211.211" transform="translate(3863.983 1867.541)"></path>
            <path id="Path_135" data-name="Path 135" d="M38.313,68.753a.211.211,0,0,0,.211-.211v-.783a.212.212,0,0,0-.211-.211H36.2V63.721a.211.211,0,0,0-.211-.211H35.21a.211.211,0,0,0-.211.211v4.817h0v0a.211.211,0,0,0,.211.211h3.1Z" transform="translate(3963.378 1867.541)"></path>
            <path id="Path_136" data-name="Path 136" d="M76.445,63.51h-.783a.211.211,0,0,0-.211.211v4.821a.211.211,0,0,0,.211.211h.783a.211.211,0,0,0,.211-.211V63.721a.211.211,0,0,0-.211-.211" transform="translate(3927.114 1867.541)"></path>
            <path id="Path_137" data-name="Path 137" d="M98.736,63.51h-.783a.211.211,0,0,0-.211.211v2.863l-2.206-2.979-.017-.022v0l-.013-.013,0,0-.011-.01-.006,0-.011-.008-.006,0-.012-.006-.007,0-.012-.005-.007,0-.013,0-.008,0-.013,0h-.818a.211.211,0,0,0-.211.211v4.821a.211.211,0,0,0,.211.211h.783a.211.211,0,0,0,.211-.211V65.679l2.208,2.982a.214.214,0,0,0,.054.053l0,0,.013.008.006,0,.01,0,.01,0,.007,0,.015,0h0a.215.215,0,0,0,.055.007h.779a.211.211,0,0,0,.211-.211V63.721a.211.211,0,0,0-.211-.211" transform="translate(3910.157 1867.541)"></path>
          </g>
        </g>
      </svg>,
      title: <>บริการ Custom LINE API <br /> LINE DEV</>,
      subtitle: <>โซลูชั่นในการเชื่อมต่อธุรกิจของ <br /> คุณเข้ากับ LINE OA พิเศษเฉพาะ <br />ธุรกิจคุณ</>
    },
    {
      logo: <svg className="d-block mx-auto mb-4" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group_510" data-name="Group 510" transform="translate(-5611.868 -999)">
          <path style={{ color: '#1638d8' }} className="text-main" d="M51,17V10.125A4.089,4.089,0,0,0,46.957,6H9.043A4.089,4.089,0,0,0,5,10.125V17ZM36.086,11.5h8.086a1.375,1.375,0,0,1,0,2.75H36.086a1.375,1.375,0,0,1,0-2.75Zm-13.476,0a1.375,1.375,0,1,1-1.348,1.375A1.362,1.362,0,0,1,22.609,11.5Zm-5.391,0a1.375,1.375,0,1,1-1.348,1.375A1.362,1.362,0,0,1,17.219,11.5Zm-5.391,0a1.375,1.375,0,1,1-1.348,1.375A1.362,1.362,0,0,1,11.828,11.5Z" transform="translate(5607.008 993)" fill="currentColor"></path>
          <path style={{ color: '#08c5f9' }} className="text-sub" d="M42.6,29.1H3.873A3.883,3.883,0,0,1,0,25.228V0H46.468V25.228A3.883,3.883,0,0,1,42.6,29.1ZM32.05,9a5.489,5.489,0,0,0-1.96.336,4.179,4.179,0,0,0-1.512.98,4.481,4.481,0,0,0-.98,1.575A5.99,5.99,0,0,0,27.247,14a6.093,6.093,0,0,0,.35,2.128,4.466,4.466,0,0,0,.98,1.582,4.165,4.165,0,0,0,1.512.979,5.876,5.876,0,0,0,3.92,0,4.165,4.165,0,0,0,1.512-.979,4.491,4.491,0,0,0,.98-1.582A6.094,6.094,0,0,0,36.851,14a5.992,5.992,0,0,0-.349-2.107,4.507,4.507,0,0,0-.98-1.575,4.179,4.179,0,0,0-1.512-.98A5.5,5.5,0,0,0,32.05,9Zm-20.2,6.832L10,16.35a3.5,3.5,0,0,0,.49,1.1,3.2,3.2,0,0,0,.847.847,3.961,3.961,0,0,0,1.226.539,6.381,6.381,0,0,0,1.624.189,6.62,6.62,0,0,0,1.407-.154,4.064,4.064,0,0,0,1.274-.5,2.807,2.807,0,0,0,.917-.917,2.589,2.589,0,0,0,.35-1.379,2.019,2.019,0,0,0-.357-1.226,2.936,2.936,0,0,0-.9-.8,5.689,5.689,0,0,0-1.191-.511c-.45-.137-.852-.256-1.231-.364-.282-.088-.56-.178-.826-.266a4.167,4.167,0,0,1-.652-.273,1.314,1.314,0,0,1-.419-.337.721.721,0,0,1-.148-.454.917.917,0,0,1,.455-.819,2.255,2.255,0,0,1,1.211-.287,2.188,2.188,0,0,1,1.435.427,1.887,1.887,0,0,1,.651,1.057l1.947-.532a3.555,3.555,0,0,0-.448-1.106,3.06,3.06,0,0,0-.8-.847,3.6,3.6,0,0,0-1.19-.546A6.232,6.232,0,0,0,14.06,9a5.923,5.923,0,0,0-1.414.168,3.883,3.883,0,0,0-1.218.517,2.83,2.83,0,0,0-.861.882,2.356,2.356,0,0,0-.329,1.26A2.028,2.028,0,0,0,10.56,13a2.936,2.936,0,0,0,.812.791,5.032,5.032,0,0,0,1.078.532c.391.14.768.272,1.12.392l.614.194.006,0,.394.125a5.332,5.332,0,0,1,.75.294,1.564,1.564,0,0,1,.469.336.677.677,0,0,1,.161.463.966.966,0,0,1-.526.9,1.822,1.822,0,0,1-.56.189,3.768,3.768,0,0,1-.665.056,2.808,2.808,0,0,1-1.575-.413A1.8,1.8,0,0,1,11.848,15.832Zm7.532-6.72v9.8H26.3v-1.75H21.382V14.824H25.54V13.2H21.382V10.862H26.3V9.112Zm12.67,8.162a2.574,2.574,0,0,1-1.078-.224,2.354,2.354,0,0,1-.84-.644,3.043,3.043,0,0,1-.546-1.029,4.529,4.529,0,0,1-.2-1.38,4.4,4.4,0,0,1,.2-1.358,3.056,3.056,0,0,1,.546-1.021,2.367,2.367,0,0,1,.84-.644,2.706,2.706,0,0,1,2.156,0,2.367,2.367,0,0,1,.84.644,3.088,3.088,0,0,1,.546,1.021,4.4,4.4,0,0,1,.2,1.358,4.531,4.531,0,0,1-.2,1.38,3.075,3.075,0,0,1-.546,1.029,2.354,2.354,0,0,1-.84.644A2.574,2.574,0,0,1,32.05,17.274Z" transform="translate(5611.868 1012.586)" fill="currentColor"></path>
        </g>
      </svg>,
      title: <>รับทำ SEO<br />Search Engine Optimization</>,
      subtitle: <>บริการ SEO Suggestion ให้ เว็บไซต์ของคุณ มีโอกาสติดอันดับบน google</>
    }
  ];

//Packages object
export interface Packages {
    title: ReactNode;
    subtitle: ReactNode;
    price: ReactNode;
    description:ReactNode;
}
export const packages = [
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


//Content object
export interface Contents {
    id: number;
    title: ReactNode;
    content: ReactNode;
  }

export const contents:Contents[] = [
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
      title: <>เว็บไซต์ธุรกิจกีฬา</>,
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

//Contact object 
export interface Contacts{
    logo:ReactNode
    title:ReactNode
    subtitle:ReactNode
}

export const contacts:Contacts[] = [
  {
    logo: <svg className="d-block mb-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="text-main" d="M31.5412 14.6389C30.9843 23.6874 23.7303 30.927 14.6641 31.4828V35.9999H36.0671V14.6389H31.5412Z" fill="currentColor"></path>
    <path className="text-primary" d="M13.5469 27.0373C21.0277 27.0373 27.0922 20.9848 27.0922 13.5186H13.5469V27.0373Z" fill="currentColor"></path>
    <path className="text-main" d="M26.3276 9.03734C24.475 3.77395 19.4522 0 13.5453 0C6.06443 0 0 6.0525 0 13.5187C0 19.4139 3.78139 24.4269 9.05514 26.2758V9.03734H26.3276Z" fill="currentColor"></path>
    </svg>,
    title:<>ปรึกษาฟรีตลอด <br />การใช้งาน</>,
    subtitle:<>ไม่ว่าคุณเป็นลูกค้าของเราหรือไม่ ก็สามารถปรึกษาด้านเว็บไซต์กับเราได้ฟรี เราพร้อมแนะนำให้คุณ</>
  },
  {
    logo:<svg className="d-block mb-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7496 11.4756C25.3743 8.85089 25.3743 4.59539 22.7496 1.97068C20.1249 -0.654032 15.8694 -0.654033 13.2447 1.97068C10.6199 4.59539 10.6199 8.85089 13.2447 11.4756C15.8694 14.1003 20.1249 14.1003 22.7496 11.4756Z" fill="white"></path>
    <path className="text-main" d="M13.2173 26.3746C14.0903 24.3107 15.2282 22.395 16.6119 20.6516C12.48 16.1818 6.56698 13.3827 0 13.3827V36H11.2733C11.2733 32.6628 11.9274 29.4243 13.2173 26.3746Z" fill="currentColor"></path>
    <path className="text-main" d="M36.0001 36.0001V13.3828C23.5089 13.3828 13.3828 23.5089 13.3828 36.0001H36.0001Z" fill="currentColor"></path>
    </svg>,
    title:<>ระบบจัดการหลัง <br />บ้านใช้งานง่าย</>,
    subtitle:<>เรามีระบบจัดการหลังบ้านใช้งานได้ <br />อย่างง่าย ให้สามารถจัดการได้ทุกที่ ทุก <br />เวลา</>
  },
  {
    logo:<svg className="d-block mb-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.4844 22.4814H36.0031V36.0001H22.4844V22.4814Z" fill="white"></path>
    <path className="text-main" d="M8.96266 18C8.96266 13.0088 13.0088 8.96266 18 8.96266C22.9912 8.96266 27.0373 13.0088 27.0373 18H36C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36V27.0373C13.0088 27.0373 8.96266 22.9912 8.96266 18Z" fill="currentColor"></path>
    </svg>,
    title:<>ผู้ช่วยส่วนตัว</>,
    subtitle:<>แม้ในบางบริการ ทางเราอาจจะไม่ครอบคลุมได้หมด แต่เราสามารถเป็นตัวแทนในการจัดให้คุณได้ เสมือนเป็นผู้ช่วยส่วนตัวให้กับคุณ</>
  },
  {
    logo:<svg className="d-block mb-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="text-main" d="M31.5412 14.6389C30.9843 23.6874 23.7303 30.927 14.6641 31.4828V35.9999H36.0671V14.6389H31.5412Z" fill="currentColor"></path>
    <path className="text-primary" d="M13.5469 27.0373C21.0277 27.0373 27.0922 20.9848 27.0922 13.5186H13.5469V27.0373Z" fill="currentColor"></path>
    <path className="text-main" d="M26.3276 9.03734C24.475 3.77395 19.4522 0 13.5453 0C6.06443 0 0 6.0525 0 13.5187C0 19.4139 3.78139 24.4269 9.05514 26.2758V9.03734H26.3276Z" fill="currentColor"></path>
    </svg>,
    title:<>บริการครบวงจร</>,
    subtitle:<>ไม่เพียงแต่จะทำแค่เว็บไซต์ แต่เรา <br />บริการให้ครบวงจร โดยที่คุณไม่ต้องมี <br />ทีมเทคนิค หรือฝ่ายไอทีของคุณเอง ให้ <br />เราดูแลคุณเอง</>
  },
]
