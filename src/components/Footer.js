import React from 'react';
import "../styling/Footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__leftContainer'>
                <img 
                    className='footer__icon'
                    src='/weekend_icon.png' 
                    alt='Weekend Society Icon' 
                />
                <div className='footer__socialMedia'>
                    <a 
                        href='https://www.instagram.com/weekendsocietymusic/'
                        className='footer__solicalMediaLink'>
                        <IconButton>
                            <InstagramIcon 
                                fontSize='large' 
                                className='footer__socialMediaIcon' />
                        </IconButton>
                    </a>
                    <a
                        href='https://m.facebook.com/weekendsocietymusic'
                        className='footer__solicalMediaLink'>
                        <IconButton>
                            <FacebookIcon 
                                fontSize='large' 
                                className='footer__socialMediaIcon' />
                        </IconButton>
                    </a>
                </div>
                <div className='footer__copyrightAndCredit'>
                    <div className='footer__copyrightAndCreditText'>© 2021 The Weekend Society</div>
                    <div className='footer__copyrightAndCreditText'>Webiste developed by<br />Adam Reeves</div>
                </div>
            </div>
            <div className='footer__centerContainer'>
                <div className='footer__info'>The Weekend Society is located in Los Angeles and loves to travel</div>
                <div className='footer__infoContact'>
                    <a href='tel:+13238802005' className='infoContact__click'>(323) 880-2005</a>
                </div>
                <div className='footer__infoContact'>
                    <a href="mailto:hello@weekendsocietymusic.com" className='infoContact__click'>hello@weekendsocietymusic.com</a>
                </div>
            </div>
            <button className='footer__button'><a href="mailto:hello@weekendsocietymusic.com" className='footer__buttonText'>BOOK NOW!</a></button>     
        </div>
    );
};

export default Footer;
