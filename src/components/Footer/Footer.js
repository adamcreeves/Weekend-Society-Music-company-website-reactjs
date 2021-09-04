import React from 'react';
import "../../styling/components/footer/Footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import FooterIcon from './FooterIcon';
import { Adam, BookNow, Email, FooterTagline, PhoneNumber, Trademark, WebsiteCredit } from '../../resources/Strings';

function Footer({ className }) {
    return (
        <div className={className}>
            <div className='footer'>
                <div className='footer__leftContainer'>
                    <FooterIcon />
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
                        <div className='footer__copyrightAndCreditText'>{Trademark}</div>
                        <div className='footer__copyrightAndCreditText'>{WebsiteCredit}<br />{Adam}</div>
                    </div>
                </div>
                <div className='footer__centerContainer'>
                    <div className='footer__info'>{FooterTagline}</div>
                    <div className='footer__infoContact'>
                        <a href='tel:+13238802005' className='infoContact__click'>{PhoneNumber}</a>
                    </div>
                    <div className='footer__infoContact'>
                        <a href="mailto:hello@weekendsocietymusic.com" className='infoContact__click'>{Email}</a>
                    </div>
                </div>
                <button className='footer__button'>
                    <a href="mailto:hello@weekendsocietymusic.com" className='footer__buttonText'>{BookNow}</a>
                </button>     
            </div>
        </div>
    );
};

export default Footer;
