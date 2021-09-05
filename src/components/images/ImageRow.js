import React from 'react';
import '../../styling/components/images/ImageRow.css';

function ImageRow ({ source1, source2, alt1, alt2 }) {
    return (
        <div className='imageRow'>
            <img 
                className='imageRow__image' 
                src={source1}
                alt={alt1} />
            <img 
                className='imageRow__image' 
                src={source2} 
                alt={alt2} />
        </div>
    );
}

export default ImageRow;
