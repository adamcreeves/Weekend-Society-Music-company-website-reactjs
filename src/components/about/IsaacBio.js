import React from 'react';
import { c_0035, c_0036, c_0037, c_0038, c_0039 } from '../../resources/ClassNames';
import { 
    alt_008,
    src_002, 
    s_112,
    s_113 } from '../../resources/Strings';
import "../../styling/components/about/IsaacBio.css";

function IsaacBio() {
    return (
        <div className={c_0035}>
            <img 
                className={c_0036}
                src={src_002}
                alt={alt_008} />
            <div className={c_0037}>
                <div className={c_0038}>{s_112}</div>
                <div className={c_0039}>{s_113}</div>
            </div>
        </div>
    );
}

export default IsaacBio;
