import React, { useState } from 'react';
import HeaderIcon from './utils/HeaderIcon';
import HeaderLinks from './utils/HeaderLinks';
import MobileMenu from './utils/MobileMenu';
import MobileMenuButton from './utils/MobileMenuButton';
import { mobileMenuOff, mobileMenuOn } from './utils/HeaderUtils';
import "../../styling/components/header/HeaderBody.css";

function HeaderBody () {
    const [count, setCount] = useState(0);

    const toggleMenu = () => {
        if(count === 0) {
            document.getElementById('mobileMenu').style = mobileMenuOn;
            setCount(1);
        } else {
            document.getElementById('mobileMenu').style = mobileMenuOff;
            setCount(0);
        }

    }

    return (
        <nav className='header'>
            <div className='header__container'>
                <HeaderIcon />
                <div className='header__links'>
                    <HeaderLinks />
                    <MobileMenuButton menuFunction={toggleMenu} />
                </div>
            </div>
            <div className='header__mobileMenu'>
                <MobileMenu 
                    id={'mobileMenu'} 
                    count={count} 
                    mobileMenuOff={mobileMenuOff} 
                    mobileMenuOn={mobileMenuOn} 
                />
            </div>
        </nav>
    );
}

export default HeaderBody;
