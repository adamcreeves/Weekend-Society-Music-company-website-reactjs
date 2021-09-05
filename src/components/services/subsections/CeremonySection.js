import React from 'react';
import SectionTitle from './SectionTitle';
import '../../../styling/components/services/sections/CeremonySection.css';

function CeremonySection ({ sectionTitle, details }) {
    return (
        <div className='services__sectionCeremony'>
            <div className='services__sectionCeremonyTitleContainer'>
                <SectionTitle title={sectionTitle} />
            </div>
            {details.split('\n').map((i, key) => {
                return <div className='services__sectionDetails' key={key}>{i}</div>
            })}
        </div>
    );
}

export default CeremonySection;
