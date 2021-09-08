import React from 'react'
import { c_0043, c_0044 } from '../../../resources/ClassNames';
import { s_022, s_023, s_024 } from '../../../resources/Strings';
import "../../../styling/components/footer/utils/CopyAndCredit.css";

function CopyAndCredit() {
    return (
        <div className={c_0043}>
            <div className={c_0044}>{s_022}</div>
            <div className={c_0044}>{s_023}<br />{s_024}</div>
        </div>
    );
}

export default CopyAndCredit;
