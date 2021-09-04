import React from 'react';
import '../../styling/components/images/FullPageImage.css';

function FullPageImage({ source, alternate }) {
    return (
        <div className='fullPageImage'>
            <img className='fullPageImage__image' src={source} alt={alternate} />
        </div>
    );
}

export default FullPageImage;
