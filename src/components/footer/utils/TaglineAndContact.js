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
            <div className='taglineAndContact__info'>{FooterTagline}</div>
            <ContactMethod 
                methodClass={'taglineAndContact__infoContact'}
                linkClass={'taglineAndContact__infoClick'}
                source={PhoneNumberSource}
                text={PhoneNumber} />
            <ContactMethod 
                methodClass={'taglineAndContact__infoContact'}
                linkClass={'taglineAndContact__infoClick'}
                source={EmailSource}
                text={Email} />
        </div>
    );
}

export default TaglineAndContact;
