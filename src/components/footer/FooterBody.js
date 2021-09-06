import React from 'react';
import FooterButton from './utils/FooterButton';
import IconSocialCredit from './utils/IconSocialCredit';
import TaglineAndContact from './utils/TaglineAndContact';
import { c_0023 } from '../../resources/ClassNames';
import "../../styling/components/footer/FooterBody.css";

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
