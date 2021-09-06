import React from 'react';
import { c_0097, c_0098 } from '../../../resources/ClassNames';
import '../../../styling/components/services/SectionTitle.css';

function SectionTitle({ title }) {
    return (
        <div className={c_0097}>
            <div className={c_0098}>{title}</div>
        </div>
    );
}

export default SectionTitle;
