import React from 'react';
import { ContactBanner, ContactBannerText, ContactFormHeadline, ContactHeadline, Email, EmailSource, PhoneNumber, PhoneNumberSource } from '../../resources/Strings';
import InquiryForm from './InquiryForm';
import Banner from '../subcomponents/Banner';
import "../../styling/components/contact/ContactBody.css";

function ContactBody () {
    return (
        <div className='contactBody'>
            <Banner source={ContactBanner} alternate={ContactBannerText} />
            <div className='contactBody__headine'>{ContactHeadline}</div>
            <div className='contactBody__phone'>
                <a 
                    href={PhoneNumberSource} 
                    className='contactBody__click'>
                        {PhoneNumber}
                </a>
            </div>
            <div className='contactBody__info'>
                <a 
                    href={EmailSource} 
                    className='contactBody__click'>
                        {Email}
                </a>
            </div>
            <div className='contactBody__info2'>{ContactFormHeadline}</div>
            <InquiryForm />
        </div>
    );
}

export default ContactBody;
