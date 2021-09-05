import React from 'react';
import { 
    Ceremony, 
    CeremonyDuoDetails, 
    CeremonySoloDetails, 
    CeremonyTrioDetails, 
    Duo,  
    Solo, 
    StringQuartet, 
    StringQuartetDetails, 
    Trio,  } from '../../../resources/Strings';
import CeremonySection from '../subsections/CeremonySection';

function CeremonyBody ({ 
    sectionContainerClass, 
    titleClass, 
    mainSectionClass,
    rowClass, 
    columnClass }) {
    return (
        <div className={sectionContainerClass}>
            <div className={titleClass}>{Ceremony}</div>
            <div className={mainSectionClass}>
                <div className={rowClass}>
                    <div className={columnClass}>
                        <CeremonySection
                            sectionTitle={Solo}
                            details={CeremonySoloDetails} />
                        <CeremonySection 
                            sectionTitle={Duo}
                            details={CeremonyDuoDetails} />
                    </div>
                    <div className={columnClass}>
                        <CeremonySection 
                            sectionTitle={Trio}
                            details={CeremonyTrioDetails} />
                        <CeremonySection 
                            sectionTitle={StringQuartet}
                            details={StringQuartetDetails} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CeremonyBody;
