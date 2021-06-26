import React, { useState }from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import ReorderIcon from '@material-ui/icons/Reorder';


function Header() {
    const [count, setCount] = useState(0);
    
    const alertMessage = () => {
        alert('Coming Soon!\nThis page is currently under construction');
    }
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
    }

    const renderMobileMenu = () => {
        return (
            <div id='mobileMenu' style={count === 0 ? style__mobileMenuOff : style__mobileMenuOn}>
                <Link to='/' className='header__mobileLink'>
                    <button className='mobileMenu__button'>
                        <div className='header__buttonText'>HOME</div>
                    </button>
                </Link>
                <Link to='/services' className='header__mobileLink'>
                    <button className='mobileMenu__button'>
                        <div className='header__buttonText'>SERVICES</div>
                    </button>
                </Link>
                <Link to='/videos' className='header__mobileLink'>
                    <button className='mobileMenu__button'>
                        <div className='header__buttonText'>VIDEOS</div>
                    </button>
                </Link>
                <Link /*to='/about'*/ className='header__mobileLink' onClick={alertMessage}>
                    <button className='mobileMenu__button'>
                        <div className='header__buttonText'>ABOUT</div>
                    </button>
                </Link>
                <Link /*to='/contact'*/ className='header__mobileLink' onClick={alertMessage}>
                    <button className='mobileMenu__button'>
                        <div className='header__buttonText'>CONTACT</div>
                    </button>
                </Link>
            </div>
        )
    }

    const renderMobileMenuButton = () => {
        return (
            <div className='header__mobileMenuButtonContainer'>
                <button id='menuButton' className='header__mobileMenuButton' onClick={toggleMenu}>
                    <ReorderIcon fontSize='large' className='header__mobileMenuButtonIcon' />
                </button>
            </div>
        );
    }

    const renderWebLinks = () => {
        return (
            <div id='webLinks' className='header__webLinks'>
                <Link to='/' className='header__link'>
                    <button className='header__button'>
                        <h3 className='header__buttonText'>HOME</h3>
                    </button>
                </Link>
                <Link to='/services' className='header__link'>
                    <button className='header__button'>
                        <h3 className='header__buttonText'>SERVICES</h3>
                    </button>
                </Link>
                <Link to='/videos' className='header__link'>
                    <button className='header__button'>
                        <h3 className='header__buttonText'>VIDEOS</h3>
                    </button>
                </Link>
                <Link /*to='/about'*/ className='header__link' onClick={alertMessage}>
                    <button className='header__button'>
                        <h3 className='header__buttonText'>ABOUT</h3>
                    </button>
                </Link>
                <Link /*to='/contact'*/ className='header__link' onClick={alertMessage}>
                    <button className='header__button'>
                        <h3 className='header__buttonText'>CONTACT</h3>
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <nav className='header'>
            <div className='header__container'>
                <Link to='/' className='header__linkHome'>
                    <button className='header__buttonHome'>
                        <img 
                            className='header__icon' 
                            src='/weekend_icon.png' 
                            alt='Weekend Society Icon' 
                        />
                    </button>
                </Link>
                <div className='header__links'>
                    {renderWebLinks()}
                    {renderMobileMenuButton()}
                </div>
            </div>
            {renderMobileMenu()}
        </nav>
    );
}

export default Header
