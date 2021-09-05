import React from 'react';
import CeremonySection from './sections/CeremonySection';

function CeremonyBody({ 
    sectionContainerClass, 
    titleClass, 
    mainSectionClass,
    rowClass, 
    columnClass }) {
    return (
        <div className={sectionContainerClass}>
            <div className={titleClass}>{'Ceremony'}</div>
            <div className={mainSectionClass}>
                <div className={rowClass}>
                    <div className={columnClass}>
                        <CeremonySection
                            sectionTitle={'Solo'}
                            details={'• Keys \n • Guitar \n • Saxophone \n • Violin'} />
                        <CeremonySection 
                            sectionTitle={'Duo'}
                            details={'• Keys & Saxophone \n • Keys & Guitar \n • Violin & Cello \n • Violin & Keys'} />
                    </div>
                    <div className={columnClass}>
                        <CeremonySection 
                            sectionTitle={'Trio'}
                            details={'• Keys, Saxophone, Guitar \n • Violin, Cello, & Viola'} />
                        <CeremonySection 
                            sectionTitle={'String Quartet'}
                            details={'• 2 Violins, Cello, & Viola'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CeremonyBody;
