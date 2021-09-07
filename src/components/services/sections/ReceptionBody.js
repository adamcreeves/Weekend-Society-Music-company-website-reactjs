import React from 'react';
import ReceptionSection from '../subsections/ReceptionSection';
import ForAllSignatureInfo from '../subsections/ForAllSignatureInfo';
import { 
    alt_012,
    Reception, 
    ReceptionImageSource, 
    Signature, 
    SignatureDetail1, 
    SignatureDetail2, 
    SignatureDetail3, 
    SignaturePlus, 
    SignaturePlusDetail1, 
    SignaturePlusDetail2, 
    SignaturePlusDetail3, 
    SignaturePremium, 
    SignaturePremiumDetail1, 
    SignaturePremiumDetail2, 
    SignaturePremiumDetail3 } from '../../../resources/Strings';

function ReceptionBody({ 
    sectionContainerClass, 
    titleClass, 
    mainSectionClass, 
    mainSectionId, 
    columnClass, 
    imageClass }) {
    return (
        <div className={sectionContainerClass}>
            <div className={titleClass}>{Reception}</div>
            <div id={mainSectionId} className={mainSectionClass}>
                <div className={columnClass}>
                    <ReceptionSection 
                        sectionTitle={SignaturePremium} 
                        detail1={SignaturePremiumDetail1} 
                        detail2={SignaturePremiumDetail2} 
                        detail3={SignaturePremiumDetail3} />
                    <ReceptionSection 
                        sectionTitle={SignaturePlus} 
                        detail1={SignaturePlusDetail1} 
                        detail2={SignaturePlusDetail2} 
                        detail3={SignaturePlusDetail3} />
                    <ReceptionSection 
                        sectionTitle={Signature} 
                        detail1={SignatureDetail1} 
                        detail2={SignatureDetail2} 
                        detail3={SignatureDetail3} />
                </div>
                <div className={columnClass}>
                    <img 
                        className={imageClass} 
                        src={ReceptionImageSource} 
                        alt={alt_012} />
                </div>
            </div>
            <ForAllSignatureInfo />
        </div>
    );
}

export default ReceptionBody;
