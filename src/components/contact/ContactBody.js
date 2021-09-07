import React from 'react';
import { 
    alt_010, 
    ContactFormHeadline, 
    ContactHeadline,
    src_003, 
    src_012, 
    src_013, 
    src_014,
    src_035 } from '../../resources/Strings';
import InquiryForm from './InquiryForm';
import Banner from '../subcomponents/Banner';
import ContactMethod from './ContactMethod';
import { c_0018 } from '../../resources/ClassNames';
import "../../styling/components/contact/ContactBody.css";

function ContactBody() {
    return (
        <div className={c_0018}>
            <Banner source={src_003} alternate={alt_010} />
            <div className='contactBody__headine'>{ContactHeadline}</div>
            <ContactMethod 
                methodClass={'contactBody__phone'}
                linkClass={'contactBody__click'} 
                source={src_012}
                text={src_035} />
            <ContactMethod 
                methodClass={'contactBody__info'}
                linkClass={'contactBody__click'} 
                source={src_013}
                text={src_014} />
            <div className='contactBody__info2'>{ContactFormHeadline}</div>
            <InquiryForm />
        </div>
    );
}

export default ContactBody;
