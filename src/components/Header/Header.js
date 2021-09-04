import React, { useState }from 'react';
import "../../styling/components/Header/Header.css";
import HeaderLinks from './HeaderLinks';
import HeaderIcon from './HeaderIcon';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';


function Header({className}) {
    const [count, setCount] = useState(0);

    const toggleMenu = () => {
        if(count === 0) {
            document.getElementById('mobileMenu').style = style__mobileMenuOn;
            setCount(1);
        } else {
            document.getElementById('mobileMenu').style = style__mobileMenuOff;
            setCount(0);
        }

    }

    const style__mobileMenuOn = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const style__mobileMenuOff = {
        display: 'none',
    };

    return (
        <div className={className}>
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
                        mobileMenuOff={style__mobileMenuOff} 
                        mobileMenuOn={style__mobileMenuOn} 
                    />
                </div>
            </nav>
        </div>
    );
}

export default Header;
