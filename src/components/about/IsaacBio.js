import React from 'react';
import { IsaacBioText, IsaacBioTitle } from '../../resources/Strings';
import "../../styling/components/about/IsaacBio.css";

function IsaacBio () {
    return (
        <div className='isaacBio'>
            <img 
                className='isaacBio__image'
                src='/isaacpic.png'
                alt='portrait of isaac' />
            <div className='isaacBio__column'>
                <div className='isaacBio__name'>{IsaacBioTitle}</div>
                <div className='isaacBio__text'>{IsaacBioText}</div>
            </div>
        </div>
    );
}

export default IsaacBio;
