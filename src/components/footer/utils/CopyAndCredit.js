import React from 'react'
import { Adam, Trademark, WebsiteCredit } from '../../../resources/Strings';
import "../../../styling/components/footer/utils/CopyAndCredit.css";

function CopyAndCredit () {
    return (
        <div className='copyrightAndCredit'>
            <div className='copyrightAndCredit__text'>{Trademark}</div>
            <div className='copyrightAndCredit__text'>{WebsiteCredit}<br />{Adam}</div>
        </div>
    );
}

export default CopyAndCredit;
