import React from 'react';
import FooterButton from './utils/FooterButton';
import IconSocialCredit from './utils/IconSocialCredit';
import TaglineAndContact from './utils/TaglineAndContact';
import "../../styling/components/footer/FooterBody.css";

function FooterBody () {
    return (
        <div className='footer'>
            <IconSocialCredit />
            <TaglineAndContact />
            <FooterButton />
        </div>
    )
}

export default FooterBody
