import React from 'react';
import SectionTitle from '../SectionTitle';
import '../../../styling/components/services/sections/ReceptionSection.css';

function ReceptionSection ( {sectionTitle, detail1, detail2, detail3 }) {
    return (
        <div className='services__section'>
            <SectionTitle title={sectionTitle} />
            <div className='services__sectionDetails'>
                {detail1}
            </div>
            <div className='services__sectionDetails'>
                {detail2}
            </div>
            <div className='services__sectionDetails'>
                {detail3}
            </div>
        </div>
    );
}

export default ReceptionSection;
