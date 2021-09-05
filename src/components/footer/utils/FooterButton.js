import React from 'react';
import { BookNow, EmailSource } from '../../../resources/Strings';
import "../../../styling/components/footer/utils/FooterButton.css";

function FooterButton () {
    return (
        <button className='footer__button'>
            <a href={EmailSource} className='footer__buttonText'>{BookNow}</a>
        </button>
    );
}

export default FooterButton;
