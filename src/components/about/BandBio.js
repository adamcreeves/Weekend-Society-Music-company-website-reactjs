import React from 'react';
import { BandBio1, BandBio2 } from '../../resources/Strings';
import "../../styling/components/about/BandBio.css";

function BandBio () {
    return (
        <div className='bandBio'>
            <div className='bandBio__Text'>
                {BandBio1}<br /><br />{BandBio2}
            </div>
        </div>
    );
}

export default BandBio;
