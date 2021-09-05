import React from 'react';
import { 
    ForAllDetail1,  
    ForAllDetail2, 
    ForAllDetail3, 
    ForAllDetail4, 
    ForAllDetail5, 
    ForAllDetail6, 
    ForAllDetail7, 
    ForAllDetail8, 
    ForAllDetail9,
    ForAllDetail10, 
    ForAllTitle } from '../../../resources/Strings';
import '../../../styling/components/services/sections/ForAllSignatureInfo.css';

function ForAllSignatureInfo () {
    return (
        <div className='infoForAllContainer'>
            <div className='infoForAllTitle'>{ForAllTitle}</div>
            <div className='infoForAllDetails'>{ForAllDetail1}</div>
            <div className='infoForAllDetails'>{ForAllDetail2}</div>
            <div className='infoForAllDetails'>{ForAllDetail3}</div>
            <div className='infoForAllDetails'>{ForAllDetail4}</div>
            <div className='infoForAllDetails'>{ForAllDetail5}</div>
            <div className='infoForAllDetails'>{ForAllDetail6}</div>
            <div className='infoForAllDetails'>{ForAllDetail7}</div>
            <div className='infoForAllDetails'>{ForAllDetail8}</div>
            <div className='infoForAllDetails'>{ForAllDetail9}</div>
            <div className='infoForAllDetails'>{ForAllDetail10}</div>
        </div>
    );
}

export default ForAllSignatureInfo;
