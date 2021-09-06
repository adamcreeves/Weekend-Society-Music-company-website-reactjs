import React from 'react';
import { Homepage1Source, Homepage1Text, Homepage2Source, Homepage2Text } from '../../../resources/Strings';
import ImageRow from '../../images/ImageRow';
import Pledge from './Pledge';
import WhatsOffered from './WhatsOffered';
import { c_0073 } from '../../../resources/ClassNames';
import '../../../styling/components/home/HomeBottom.css';

function HomeBottom() {
    return (
        <div className={c_0073}>
            <WhatsOffered />
            <ImageRow 
                source1={Homepage1Source} 
                source2={Homepage2Source} 
                alt1={Homepage1Text} 
                alt2={Homepage2Text} />
            <Pledge />
        </div>
    );
}

export default HomeBottom;
