import React from 'react';
import {
    s_093, 
    s_094, 
    s_095, 
    s_096, 
    s_097, 
    s_098, 
    s_099, 
    s_100, 
    s_101 } from '../../../resources/Strings';
import CeremonySection from '../subsections/CeremonySection';

function CeremonyBody({ 
    sectionContainerClass, 
    titleClass, 
    mainSectionClass,
    rowClass, 
    columnClass }) {
    return (
        <div className={sectionContainerClass}>
            <div className={titleClass}>{s_093}</div>
            <div className={mainSectionClass}>
                <div className={rowClass}>
                    <div className={columnClass}>
                        <CeremonySection
                            sectionTitle={s_094}
                            details={s_095} />
                        <CeremonySection 
                            sectionTitle={s_096}
                            details={s_097} />
                    </div>
                    <div className={columnClass}>
                        <CeremonySection 
                            sectionTitle={s_098}
                            details={s_099} />
                        <CeremonySection 
                            sectionTitle={s_100}
                            details={s_101} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CeremonyBody;
