import React from 'react';
import { 
    Email, 
    EmailSource, 
    FooterTagline, 
    PhoneNumber, 
    PhoneNumberSource } from '../../../resources/Strings';
import ContactMethod from '../../contact/ContactMethod';
import "../../../styling/components/footer/utils/TaglineAndContact.css";

function TaglineAndContact () {
    return (
        <div className='taglineAndContact'>
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
    );
}

export default TaglineAndContact;
