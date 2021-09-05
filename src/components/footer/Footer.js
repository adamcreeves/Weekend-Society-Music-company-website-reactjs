import React from 'react';
import FooterIcon from './FooterIcon';
import { 
    Adam, 
    BookNow, 
    Email,  
    EmailSource,  
    FooterTagline,  
    PhoneNumber, 
    PhoneNumberSource, 
    Trademark, 
    WebsiteCredit } from '../../resources/Strings';
import SocialMedia from './SocialMedia';
import ContactMethod from '../contact/ContactMethod';
import "../../styling/components/footer/Footer.css";

function Footer ({ className }) {
    return (
        <div className={className}>
            <div className='footer'>
                <div className='footer__leftContainer'>
                    <FooterIcon />
                    <SocialMedia />
                    <div className='footer__copyrightAndCredit'>
                        <div className='footer__copyrightAndCreditText'>{Trademark}</div>
                        <div className='footer__copyrightAndCreditText'>{WebsiteCredit}<br />{Adam}</div>
                    </div>
                </div>
                <div className='footer__centerContainer'>
                    <div className='footer__info'>{FooterTagline}</div>
                    <ContactMethod 
                        methodClass={'footer__infoContact'}
                        linkClass={'infoContact__click'}
                        source={PhoneNumberSource}
                        text={PhoneNumber} />
                    <ContactMethod 
                        methodClass={'footer__infoContact'}
                        linkClass={'infoContact__click'}
                        source={EmailSource}
                        text={Email} />
                </div>
                <button className='footer__button'>
                    <a href={EmailSource} className='footer__buttonText'>{BookNow}</a>
                </button>     
            </div>
        </div>
    );
};

export default Footer;
