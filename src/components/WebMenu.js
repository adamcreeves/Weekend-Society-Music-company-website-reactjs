import React from 'react';
import "../styling/WebMenu.css";
import { Link } from "react-router-dom";

function WebLinks () {
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
    );
}


export default WebLinks;