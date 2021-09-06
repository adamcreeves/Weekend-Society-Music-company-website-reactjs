import React from 'react';
import { c_0028, c_0029 } from '../../resources/ClassNames';
import '../../styling/components/images/ImageRow.css';

function ImageRow({ source1, source2, alt1, alt2 }) {
    return (
        <div className={c_0028}>
            <img 
                className={c_0029} 
                src={source1}
                alt={alt1} />
            <img 
                className={c_0029} 
                src={source2} 
                alt={alt2} />
        </div>
    );
}

export default ImageRow;
