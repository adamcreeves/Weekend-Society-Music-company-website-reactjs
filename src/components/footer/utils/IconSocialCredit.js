import React from 'react';
import CopyAndCredit from './CopyAndCredit';
import FooterIcon from './FooterIcon';
import SocialMedia from './SocialMedia';
import { c_0048 } from '../../../resources/ClassNames';
import "../../../styling/components/footer/utils/IconSocialCredit.css";

function IconSocialCredit () {
    return (
        <div className={c_0048}>
            <FooterIcon />
            <SocialMedia />
            <CopyAndCredit />
        </div>
    );
}

export default IconSocialCredit;
