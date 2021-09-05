import React from 'react';
import { Link } from "react-router-dom";
import { 
    About, 
    Contact, 
    Home, 
    Services, 
    Videos } from '../../../resources/Strings';
import "../../../styling/components/header/utils/MobileMenu.css";

function MobileMenu ({ id, count, mobileMenuOff, mobileMenuOn }) {
        return (
            <div id={id} className='mobileMenu__container' style={count === 0 ? mobileMenuOff : mobileMenuOn}>
                <Link to='/' className='mobileMenu__link'>
                    <button className='mobileMenu__button'>
                        <div className='mobileMenu__buttonText'>{Home}</div>
                    </button>
                </Link>
                <Link to='/services' className='mobileMenu__link'>
                    <button className='mobileMenu__button'>
                        <div className='header__buttonText'>{Services}</div>
                    </button>
                </Link>
                <Link to='/videos' className='mobileMenu__link'>
                    <button className='mobileMenu__button'>
                        <div className='mobileMenu__buttonText'>{Videos}</div>
                    </button>
                </Link>
                <Link to='/about' className='mobileMenu__link'>
                    <button className='mobileMenu__button'>
                        <div className='mobileMenu__buttonText'>{About}</div>
                    </button>
                </Link>
                <Link to='/contact' className='mobileMenu__link'>
                    <button className='mobileMenu__button'>
                        <div className='mobileMenu__buttonText'>{Contact}</div>
                    </button>
                </Link>
            </div>
    );
}

export default MobileMenu;
