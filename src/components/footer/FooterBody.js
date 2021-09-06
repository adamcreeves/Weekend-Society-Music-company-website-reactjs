import React from 'react';
import FooterButton from './utils/FooterButton';
import IconSocialCredit from './utils/IconSocialCredit';
import TaglineAndContact from './utils/TaglineAndContact';
import "../../styling/components/footer/FooterBody.css";
import { c_0023 } from '../../resources/ClassNames';

function FooterBody () {
    return (
        <div className={c_0023}>
            <IconSocialCredit />
            <TaglineAndContact />
            <FooterButton />
        </div>
    );
}

export default FooterBody;
