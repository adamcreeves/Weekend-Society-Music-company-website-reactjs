import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <div className='header__container'>
                <Link to='/' className='header__link'>
                    <button className='header__button'>
                        <img 
                            className='header__icon' 
                            src='/weekend_icon.png' 
                            alt='Weekend Society Icon' 
                            width='120' height='100' 
                        />
                    </button>
                </Link>
                <div className='header__links'>
                    <Link to='/about' className='header__link'>
                        <button className='header__button'>
                            <h3 className='header__buttonText'>ABOUT</h3>
                        </button>
                    </Link>
                    <Link to='/gallery' className='header__link'>
                        <button className='header__button'>
                            <h3 className='header__buttonText'>GALLERY</h3>
                        </button>
                    </Link>
                    <Link to='/book' className='header__link'>
                        <button className='header__button'>
                            <h3 className='header__buttonText'>BOOK US</h3>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
