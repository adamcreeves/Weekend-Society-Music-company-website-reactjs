import React from 'react';
import { c_0047 } from '../../../resources/ClassNames';
import { FooterIconAlt, FooterIconSource } from '../../../resources/Strings';
import "../../../styling/components/footer/utils/FooterIcon.css";

function FooterIcon() {
    return (
        <img 
            className={c_0047}
            src={FooterIconSource} 
            alt={FooterIconAlt} 
        />
    );
}

export default FooterIcon;
