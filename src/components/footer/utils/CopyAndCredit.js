import React from 'react'
import { Adam, Trademark, WebsiteCredit } from '../../../resources/Strings';
import "../../../styling/components/footer/utils/CopyAndCredit.css";

function CopyAndCredit () {
    return (
        <div className='footer__copyrightAndCredit'>
            <div className='footer__copyrightAndCreditText'>{Trademark}</div>
            <div className='footer__copyrightAndCreditText'>{WebsiteCredit}<br />{Adam}</div>
        </div>
    );
}

export default CopyAndCredit;
