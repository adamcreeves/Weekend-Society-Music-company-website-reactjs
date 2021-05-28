import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__copyright'>© 2021 The Weekend Society</div>
            <button className='footer__button'><a href="mailto:info@weekendsocietymusic.com" className='footer__buttonText'>BOOK NOW</a></button> 
            <div className='footer__email'>info@weekendsocietymusic.com</div>           
        </div>
    );
};

export default Footer;
