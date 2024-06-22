import { useEffect, useState } from 'react';
import './Nav.css'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

function Nav() {

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    
    const handleToggleChange = () => {
        setIsChecked(!isChecked);
        document.body.style.backgroundColor = isChecked ? '#f6f9fc' : '#191c20';
        document.body.style.color = isChecked ? '#191c20' : '#f6f9fc';
        let nav = document.getElementById("nav")
        nav && (nav.style.backgroundColor = isChecked ? '#f6f9fc' : '#191c20'); //if อีกรูปแบบนึง
        
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
        navbarStyle.backgroundColor = '#121519';
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
                            <div style={{ color: isChecked ? 'black' : '#31B7E9' }}>
                                <LuSun className='sun' />
                            </div>
                            <div style={{ color: isChecked ? '#31B7E9' : 'black' }}>
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