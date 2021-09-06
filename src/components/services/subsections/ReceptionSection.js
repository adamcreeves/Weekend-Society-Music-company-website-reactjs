import React from 'react';
import SectionTitle from './SectionTitle';
import { c_0095, c_0096 } from '../../../resources/ClassNames';
import '../../../styling/components/services/sections/ReceptionSection.css';

function ReceptionSection ( {sectionTitle, detail1, detail2, detail3 }) {
    return (
        <div className={c_0095}>
            <SectionTitle title={sectionTitle} />
            <div className={c_0096}>{detail1}</div>
            <div className={c_0096}>{detail2}</div>
            <div className={c_0096}>{detail3}</div>
        </div>
    );
}

export default ReceptionSection;
