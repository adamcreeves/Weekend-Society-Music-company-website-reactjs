import React from 'react';
import ReceptionSection from '../subsections/ReceptionSection';
import ForAllSignatureInfo from '../subsections/ForAllSignatureInfo';

function ReceptionBody ({ 
    sectionContainerClass, 
    titleClass, 
    mainSectionClass, 
    mainSectionId, 
    columnClass, 
    imageClass }) {
    return (
        <div className={sectionContainerClass}>
            <div className={titleClass}>{'Reception'}</div>
            <div id={mainSectionId} className={mainSectionClass}>
                <div className={columnClass}>
                    <ReceptionSection 
                        sectionTitle={'Signature Premium'} 
                        detail1={'• 4 premium vocalists'} 
                        detail2={'• Rhythm section: Keyboard, Guitar, Bass Guitar, & Drums'} 
                        detail3={'• Full Brass section: Trumpet, Saxophone, & Trombone'} />
                    <ReceptionSection 
                        sectionTitle={'Signature Plus'} 
                        detail1={'• 3 premium vocalists'} 
                        detail2={'• Rhythm section: Keyboard, Guitar, Bass Guitar, & Drums'} 
                        detail3={'• Full Brass section: Trumpet & Saxophone'} />
                    <ReceptionSection 
                        sectionTitle={'Signature'} 
                        detail1={'• 2 premium vocalists'} 
                        detail2={'• Rhythm section: Keyboard, Guitar, Bass Guitar, & Drums'} 
                        detail3={'• 1 Brass player: Saxophone'} />
                </div>
                <div className={columnClass}>
                    <img 
                        className={imageClass} 
                        src='/servicesReceptionImage2.png' 
                        alt={'Couples first dance'} />
                </div>
            </div>
            <ForAllSignatureInfo />
        </div>
    );
}

export default ReceptionBody;
