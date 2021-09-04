import React from 'react';
import { HomeTagline1, HomeTagline2, Welcome } from '../../resources/Strings';
import '../../styling/components/Home/Tagline.css';

function Tagline() {
    return (
        <div className='tagline'>
            <div className='tagline__title'>{Welcome}</div>
            <div className='tagline__subtitle'>
                <div className='tagline__subtitleText1'>{HomeTagline1}</div>
                <div className='tagline__subtitleText2'>{HomeTagline2}</div>
            </div>
        </div>
    );
}

export default Tagline;
