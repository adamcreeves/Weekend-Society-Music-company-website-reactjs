import React from 'react';
import Header from "./Header";
import './Contact.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";

function Contact() {
    const renderHeader = () => {
        return (
            <div className='contact__header'>
                <Header />
            </div>
        );
    }

    return (
        <div className='contact__page'>
            {renderHeader()}
            <div className='contact__container'>
                <div className='contact__infoLine'>
                    The Weekend Society is located in Los Angeles and loves to travel
                </div>
                <div className='contact__infoPhone'>
                    <a href='tel:+13238802005' className='infoContact__click'>(323) 880-2005</a>
                </div>
                <div className='contact__infoEmail'>
                    <a href="mailto:hello@weekendsocietymusic.com" className='infoContact__click'>hello@weekendsocietymusic.com</a>
                </div>
                <div className='contact__socialMedia'>
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
            </div>
        </div>
    );
}

export default Contact;
