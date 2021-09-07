import React from 'react';
import { 
    Email,
    FooterTagline, 
    PhoneNumber,
    src_013,
    src_014} from '../../../resources/Strings';
import ContactMethod from '../../contact/ContactMethod';
import { c_0052, c_0053, c_0054, c_0055 } from '../../../resources/ClassNames';
import "../../../styling/components/footer/utils/TaglineAndContact.css";

function TaglineAndContact() {
    return (
        <div className={c_0052}>
            <div className={c_0053}>{FooterTagline}</div>
            <ContactMethod 
                methodClass={c_0054}
                linkClass={c_0055}
                source={src_013}
                text={PhoneNumber} />
            <ContactMethod 
                methodClass={c_0054}
                linkClass={c_0055}
                source={src_014}
                text={Email} />
        </div>
    );
}

export default TaglineAndContact;
