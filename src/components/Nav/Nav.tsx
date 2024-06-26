import { useEffect, useState } from 'react';
import './Nav.css';
import '../CardService/CardCollection.css';
import '../CardService/ServiceCard/ServiceCard.css';
import '../CardPackages/PackagesCard/PackagesCard.css';
import '../CardPackages/CardPackages.css';
import '../ExampleBusiness/ExampleBusiness.css';
import '../ExampleBusiness/Accordion/Accordion.css';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

function Nav() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    };
  
    useEffect(() => {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    
    const handleToggleChange = () => {
        setIsChecked(!isChecked);

        let body = document.body.style.backgroundColor = isChecked ? 'var(--coolWhite)' : 'var(--dark)';
        document.body.style.color = isChecked ? 'var(--dark)' : 'var(--coolWhite)';

        let nav = document.getElementById("nav")//if อีกรูปแบบนึง
        nav && (nav.style.backgroundColor = isChecked ? 'var(--coolWhite)' : 'var(--dark)'); //if อีกรูปแบบนึง
        
        let cardCollectionBG = document.getElementsByClassName("cardCollection");
        cardCollectionBG &&  Array.from(cardCollectionBG).forEach((card: Element) => {
            (card as HTMLElement).style.backgroundColor = isChecked ? 'var(--white)' : 'var(--tooDark)';
        });  // วนลูปผ่านการ์ดแต่ละใบและเปลี่ยนสีพื้นหลัง ที่ต้องวนลูปเพราะไอ getElementsByClassName คืนค่าเป็น collection ไม่เหมือน getbyid ที่คืนค่า DOM เดี่ยวๆ

        let cardServiceItem = document.getElementsByClassName("item-service-card");
        let cardPackageItem = document.getElementsByClassName("item-package-card");

        cardServiceItem &&  Array.from(cardServiceItem).forEach((card: Element) => {
            (card as HTMLElement).style.backgroundColor = isChecked ? 'var(--coolWhite)' : 'var(--dark)';
        })
        cardPackageItem &&  Array.from(cardPackageItem).forEach((card: Element) => {
            (card as HTMLElement).style.backgroundColor = isChecked ? 'var(--white)' : 'var(--tooDark)';
            (card as HTMLElement).style.border = isChecked ? '1px solid var(--borderWhite)' : '1px solid var(--borderDark)';
        })

        let textSmall = document.getElementsByClassName("text-small");
         textSmall &&  Array.from(textSmall).forEach((text: Element) => {
            (text as HTMLElement).style.color = isChecked ? 'var(--textColor2)' : 'var(--textSmall)';
        })

        let example = document.getElementsByClassName("example")
        example &&  Array.from(example).forEach((example: Element) => {
            (example as HTMLElement).style.backgroundColor = isChecked ? 'var(--white)' : 'var(--tooDark)';
        })


            
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle: React.CSSProperties = {
        transition: 'background-color 0.1s ease',
    }

    if (isScrolled && !isChecked) {

        navbarStyle.backgroundColor = 'rgba(246, 249, 252, 0.8)';
        navbarStyle.backdropFilter = 'blur(28px) saturate(200%)';
      
    }
    else if (isScrolled && isChecked) {
        navbarStyle.backgroundColor = 'var(--tooDark)';
        navbarStyle.backdropFilter = 'blur(28px) saturate(200%)';
    }
 
    return (
        <nav id="nav" style={navbarStyle}>
            <div className='container'>
                <div className='nav-logo'>
                    <span>JoJo</span>
                    <span>Studio</span>
                </div>
                <div className='nav-menu'>
                    <div className='nav-menu-list'>
                        <input type="checkbox" id="darkmode-toggle" checked={isChecked} onChange={handleToggleChange} />
                        <label htmlFor="darkmode-toggle">
                            <div style={{ color: isChecked ? 'black' : 'var(--mainColor)' }}>
                                <LuSun className='sun' />
                            </div>
                            <div style={{ color: isChecked ? 'var(--mainColor)' : 'black' }}>
                                <IoMoonOutline className='moon' />
                            </div>
                        </label>
                    </div>
                    <div className='nav-menu-btn'>
                        <MdOutlinePhoneInTalk className="phone" />
                        <h4>ปรึกษาฟรี!</h4>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav