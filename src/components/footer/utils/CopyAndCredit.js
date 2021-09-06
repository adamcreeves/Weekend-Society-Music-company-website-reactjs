import React from 'react'
import { c_0043, c_0044 } from '../../../resources/ClassNames';
import { Adam, Trademark, WebsiteCredit } from '../../../resources/Strings';
import "../../../styling/components/footer/utils/CopyAndCredit.css";

function CopyAndCredit () {
    return (
        <div className={c_0043}>
            <div className={c_0044}>{Trademark}</div>
            <div className={c_0044}>{WebsiteCredit}<br />{Adam}</div>
        </div>
    );
}

export default CopyAndCredit;
