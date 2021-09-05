import React from 'react';
import { IsaacBioText, IsaacBioTitle } from '../../resources/Strings';
import "../../styling/components/about/IsaacBio.css";

function IsaacBio () {
    return (
        <div className='about__bio'>
            <img 
                className='about__isaacImage'
                src='/isaacpic.png'
                alt='portrait of isaac' />
            <div className='about__isaacColumn'>
                <div className='about__isaacName'>{IsaacBioTitle}</div>
                <div className='about__isaacBioText'>{IsaacBioText}</div>
            </div>
        </div>
    );
}

export default IsaacBio;
