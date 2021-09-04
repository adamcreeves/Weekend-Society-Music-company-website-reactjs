import React from 'react';
import Header from "../components/header/Header";
import '../styling/screens/Contact.css'
import Footer from '../components/footer/Footer';
import Banner from '../components/subcomponents/Banner';
import InquiryForm from '../components/contact/InquiryForm';
import { 
    ContactBanner, 
    ContactBannerText, 
    ContactFormHeadline, 
    ContactHeadline, 
    Email, 
    EmailSource, 
    PhoneNumber, 
    PhoneNumberSource } from '../resources/Strings';

function Contact() {
    return (
        <div className='contact__page'>
            <Header className='contact__header'/>
            <div className='contact__container'>
                <Banner source={ContactBanner} alternate={ContactBannerText} />
                <div className='contact__infoHeader'>{ContactHeadline}</div>
                <div className='contact__infoPhone'>
                    <a 
                        href={PhoneNumberSource} 
                        className='infoContact__click'>
                            {PhoneNumber}
                    </a>
                </div>
                <div className='contact__info'>
                    <a 
                        href={EmailSource} 
                        className='infoContact__click'>
                            {Email}
                    </a>
                </div>
                <div className='contact__info2'>{ContactFormHeadline}</div>
                <InquiryForm />
            </div>
            <Footer className='contact__footer' />
        </div>
    );
}

export default Contact;

