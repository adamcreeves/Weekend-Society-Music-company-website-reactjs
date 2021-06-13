import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <div className='header__container'>
                <Link to='/' className='header__link'>
                    <button className='header__buttonHome'>
                        <img 
                            className='header__icon' 
                            src='/weekend_icon.png' 
                            alt='Weekend Society Icon' 
                        />
                    </button>
                </Link>
                <div className='header__links'>
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
                    <Link to='/about' className='header__link'>
                        <button className='header__button'>
                            <h3 className='header__buttonText'>ABOUT</h3>
                        </button>
                    </Link>
                    <Link to='/contact' className='header__link'>
                        <button className='header__button'>
                            <h3 className='header__buttonText'>CONTACT</h3>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
