import React from 'react';
import ReorderIcon from '@material-ui/icons/Reorder';
import "../../../styling/components/header/utils/MobileMenuButton.css";
import { IconSize } from '../../../resources/Strings';
import { c_0067, c_0068, c_0069 } from '../../../resources/ClassNames';

function MobileMenuButton ({ menuFunction }) {
    return (
        <div className={c_0067}>
            <button className={c_0068} onClick={menuFunction}>
                <ReorderIcon fontSize={IconSize} className={c_0069} />
            </button>
        </div>
    );
}

export default MobileMenuButton;
