import React from 'react';
import SectionTitle from './SectionTitle';
import { c_0086, c_0087, c_0088 } from '../../../resources/ClassNames';
import '../../../styling/components/services/sections/CeremonySection.css';

function CeremonySection ({ sectionTitle, details }) {
    return (
        <div className={c_0086}>
            <div className={c_0087}>
                <SectionTitle title={sectionTitle} />
            </div>
            {details.split('\n').map((i, key) => {
                return <div className={c_0088} key={key}>{i}</div>
            })}
        </div>
    );
}

export default CeremonySection;
