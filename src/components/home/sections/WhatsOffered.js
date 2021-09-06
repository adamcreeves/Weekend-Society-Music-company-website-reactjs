import React from 'react';
import { c_0082, c_0083, c_0084, c_0085 } from '../../../resources/ClassNames';
import { 
    CorporateEvents, 
    PrivateParties, 
    SpecialEvents, 
    Weddings, 
    WhatWeOffer } from '../../../resources/Strings';
import '../../../styling/components/home/WhatsOffered.css';

function WhatsOffered() {
    return (
        <div className={c_0082}>
            <div className={c_0083}>{WhatWeOffer}</div>
            <div className={c_0084}>
                <div className={c_0085}>{Weddings}</div>
                <div className={c_0085}>{CorporateEvents}</div>
                <div className={c_0085}>{PrivateParties}</div>
                <div className={c_0085}>{SpecialEvents}</div>
            </div>
        </div>
    );
}

export default WhatsOffered;
