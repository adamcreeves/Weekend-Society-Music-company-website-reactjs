import React from 'react';
import { alt_003, src_004 } from '../../resources/Strings';
import Banner from '../subcomponents/Banner';
import BandBio from './BandBio';
import IsaacBio from './IsaacBio';
import { c_0017 } from '../../resources/ClassNames';
import "../../styling/components/about/AboutBody.css";

function AboutBody() {
    return (
        <div className={c_0017}>
            <Banner source={src_004} alternate={alt_003} />
            <BandBio />
            <IsaacBio />
        </div>
    );
}

export default AboutBody;
