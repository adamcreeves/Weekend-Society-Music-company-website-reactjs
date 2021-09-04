import React from 'react';
import { 
    CorporateEvents, 
    PrivateParties, 
    SpecialEvents, 
    Weddings, 
    WhatWeOffer } from '../../resources/Strings';
import '../../styling/components/Home/WhatsOffered.css';

function WhatsOffered() {
    return (
        <div className='whatsOffered'>
            <div className='whatsOffered__title'>{WhatWeOffer}</div>
            <div className='whatsOffered__detailContainer'>
                <div className='whatsOffered__detail'>{Weddings}</div>
                <div className='whatsOffered__detail'>{CorporateEvents}</div>
                <div className='whatsOffered__detail'>{PrivateParties}</div>
                <div className='whatsOffered__detail'>{SpecialEvents}</div>
            </div>
        </div>
    );
}

export default WhatsOffered;
