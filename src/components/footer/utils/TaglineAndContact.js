import React from 'react';
import {
    FooterTagline,
    src_012,
    src_013, 
    src_014,
    src_035 } from '../../../resources/Strings';
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
                source={src_012}
                text={src_035} />
            <ContactMethod 
                methodClass={c_0054}
                linkClass={c_0055}
                source={src_013}
                text={src_014} />
        </div>
    );
}

export default TaglineAndContact;
