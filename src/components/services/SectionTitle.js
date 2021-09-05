import React from 'react';
import '../../styling/components/services/SectionTitle.css';

function SectionTitle ({ title }) {
    return (
        <div className='sectionTitle'>
            <div className='sectionTitle__text'>{title}</div>
        </div>
    );
}

export default SectionTitle;
