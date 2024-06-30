import { ChangeEvent, useEffect, useState } from 'react';
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
 
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    
    const setDarkTheme = () =>{
        document.querySelector("html")?.setAttribute("data-theme", "dark")
    }
    const setLightTheme = () =>{
        document.querySelector("html")?.setAttribute("data-theme", "light")
    }

    const toggleTheme = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.checked ? setDarkTheme() : setLightTheme();
        setIsChecked(!isChecked)
    };
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 1) {
                setIsScrolled(true);
                
            } else if (scrollTop <= 0) {    
                setIsScrolled(false)
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
        navbarStyle.backgroundColor = 'rgba(255, 255, 255, 0.75)';
        navbarStyle.backdropFilter = 'blur(30px) saturate(200%)';
    }

    else if (isScrolled && isChecked) {
        navbarStyle.backgroundColor = 'var(--tooDark)';
        navbarStyle.backdropFilter = 'blur(30px) saturate(200%)';
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
                        <input type="checkbox" id="darkmode-toggle" checked={isChecked} onChange={toggleTheme} />
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