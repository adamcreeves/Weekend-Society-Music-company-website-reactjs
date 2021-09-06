import React from 'react';
import { c_0024, c_0025 } from '../../resources/ClassNames';
import '../../styling/components/subcomponents/Banner.css';

function Banner ({ source, alternate }) {
    return (
        <div className={c_0024}>
            <img 
                className={c_0025} 
                src={source} 
                alt={alternate} />
        </div>
    );
}

export default Banner;
