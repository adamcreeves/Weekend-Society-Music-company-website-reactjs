import React from 'react';
import { c_0035, c_0036, c_0037, c_0038, c_0039 } from '../../resources/ClassNames';
import { 
    IsaacBioPicAlt, 
    IsaacBioPicSource, 
    IsaacBioText, 
    IsaacBioTitle } from '../../resources/Strings';
import "../../styling/components/about/IsaacBio.css";

function IsaacBio () {
    return (
        <div className={c_0035}>
            <img 
                className={c_0036}
                src={IsaacBioPicSource}
                alt={IsaacBioPicAlt} />
            <div className={c_0037}>
                <div className={c_0038}>{IsaacBioTitle}</div>
                <div className={c_0039}>{IsaacBioText}</div>
            </div>
        </div>
    );
}

export default IsaacBio;
