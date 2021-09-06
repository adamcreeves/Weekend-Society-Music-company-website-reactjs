import React from 'react';
import { c_0033, c_0034 } from '../../resources/ClassNames';
import { BandBio1, BandBio2 } from '../../resources/Strings';
import "../../styling/components/about/BandBio.css";

function BandBio() {
    return (
        <div className={c_0033}>
            <div className={c_0034}>
                {BandBio1}<br /><br />{BandBio2}
            </div>
        </div>
    );
}

export default BandBio;
