import React, { useState, useEffect } from 'react';
import { alt_003, src_004, t_08 } from '../../resources/Strings';
import Banner from '../subcomponents/Banner';
import BandBio from './BandBio';
import IsaacBio from './IsaacBio';
import { c_0017 } from '../../resources/ClassNames';
import "../../styling/components/about/AboutBody.css";
import LoadingSpinner from '../subcomponents/LoadingSpinner';

function AboutBody() {
    const [loaderVisible, setLoaderVisible] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoaderVisible(false)
        }, t_08);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={c_0017}>
            {loaderVisible ? 
                <LoadingSpinner isVisible={loaderVisible} />
            : (
                <div className={c_0017}>
                    <Banner source={src_004} alternate={alt_003} />
                    <BandBio />
                    <IsaacBio />
                </div>    
            )}
        </div>
    );
}

export default AboutBody;
