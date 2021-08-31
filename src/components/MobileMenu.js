import React from 'react';
import "../styling/MobileMenu.css";
import { Link } from "react-router-dom";

function MobileMenu ({id, count, mobileMenuOff, mobileMenuOn}) {
        return (
            <div id={id} className='mobileMenu__container' style={count === 0 ? mobileMenuOff : mobileMenuOn}>
                <Link to='/' className='mobileMenu__link'>
                    <button className='mobileMenu__button'>
                        <div className='mobileMenu__buttonText'>HOME</div>
                    </button>
                </Link>
                <Link to='/services' className='mobileMenu__link'>
                    <button className='mobileMenu__button'>
                        <div className='header__buttonText'>SERVICES</div>
                    </button>
                </Link>
                <Link to='/videos' className='mobileMenu__link'>
                    <button className='mobileMenu__button'>
                        <div className='mobileMenu__buttonText'>VIDEOS</div>
                    </button>
                </Link>
                <Link to='/about' className='mobileMenu__link'>
                    <button className='mobileMenu__button'>
                        <div className='mobileMenu__buttonText'>ABOUT</div>
                    </button>
                </Link>
                <Link to='/contact' className='mobileMenu__link'>
                    <button className='mobileMenu__button'>
                        <div className='mobileMenu__buttonText'>CONTACT</div>
                    </button>
                </Link>
            </div>
    );
}

export default MobileMenu;
