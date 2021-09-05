import React from 'react';
import CopyAndCredit from './CopyAndCredit';
import FooterIcon from './FooterIcon';
import SocialMedia from './SocialMedia';
import "../../../styling/components/footer/utils/IconSocialCredit.css";

function IconSocialCredit () {
    return (
        <div className='iconSocialCredit'>
            <FooterIcon />
            <SocialMedia />
            <CopyAndCredit />
        </div>
    );
}

export default IconSocialCredit;
