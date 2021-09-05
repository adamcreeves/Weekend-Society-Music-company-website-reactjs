import React from 'react';
import { Link } from "react-router-dom";
import { 
    About, 
    Contact, 
    Home, 
    Services, 
    Videos } from '../../../resources/Strings';
import "../../../styling/components/header/utils/HeaderLinks.css";

function HeaderLinks () {
    return (
        <div className='header__webLinks'>
            <Link to='/' className='header__link'>
                <button className='header__button'>
                    <h3 className='header__buttonText'>{Home}</h3>
                </button>
            </Link>
            <Link to='/services' className='header__link'>
                <button className='header__button'>
                    <h3 className='header__buttonText'>{Services}</h3>
                </button>
            </Link>
            <Link to='/videos' className='header__link'>
                <button className='header__button'>
                    <h3 className='header__buttonText'>{Videos}</h3>
                </button>
            </Link>
            <Link to='/about' className='header__link'>
                <button className='header__button'>
                    <h3 className='header__buttonText'>{About}</h3>
                </button>
            </Link>
            <Link to='/contact' className='header__link'>
                <button className='header__button'>
                    <h3 className='header__buttonText'>{Contact}</h3>
                </button>
            </Link>
        </div>
    );
}


export default HeaderLinks;