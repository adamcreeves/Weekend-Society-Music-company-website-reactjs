import React from 'react';
import { c_0026, c_0027 } from '../../resources/ClassNames';
import '../../styling/components/images/FullPageImage.css';

function FullPageImage({ source, alternate }) {
    return (
        <div className={c_0026}>
            <img className={c_0027} src={source} alt={alternate} />
        </div>
    );
}

export default FullPageImage;
