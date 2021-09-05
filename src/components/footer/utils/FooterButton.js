import React from 'react';
import { BookNow, EmailSource } from '../../../resources/Strings';
import "../../../styling/components/footer/utils/FooterButton.css";

function FooterButton () {
    return (
        <button className='footerButton'>
            <a href={EmailSource} className='footerButton__text'>{BookNow}</a>
        </button>
    );
}

export default FooterButton;
