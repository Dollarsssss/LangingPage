import { useState } from 'react';
import './Nav.css'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

function Nav() {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleToggleChange = () => {
        setIsChecked(!isChecked);
        document.body.style.backgroundColor = isChecked ? '#fff' : '#191c20';
        document.body.style.color = isChecked ? '#191c20' : '#fff';
        
    };

    return (
        <nav>
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