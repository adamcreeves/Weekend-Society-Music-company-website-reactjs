import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__leftContainer'>
                <img 
                    className='footer__icon'
                    src='/weekend_icon.png' 
                    alt='Weekend Society Icon' 
                />
                <div className='footer__copyrightText'>© 2021 The Weekend Society</div>
            </div>
            <div className='footer__centerContainer'>
                <div className='footer__info'>The Weekend Society is located in Los Angeles</div>
                <div className='footer__info'>(323) 880-2005</div>
                <div className='footer__info'>hello@weekendsocietymusic.com</div>
            </div>
            <button className='footer__button'><a href="mailto:hello@weekendsocietymusic.com" className='footer__buttonText'>BOOK NOW!</a></button>     
        </div>
    );
};

export default Footer;
