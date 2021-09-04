import React from 'react';
import '../../styling/components/Subcomponents/Banner.css';

function Banner({source, alternate}) {
    return (
        <div className='banner'>
            <img 
                className='banner__image' 
                src={source} 
                alt={alternate} />
        </div>
    );
}

export default Banner;
