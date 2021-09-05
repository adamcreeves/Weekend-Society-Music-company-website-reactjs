import React from 'react';
import ImageRow from '../images/ImageRow';
import Banner from '../subcomponents/Banner';
import Video from '../videos/Video';
import Pledge from './Pledge';
import Tagline from './Tagline';
import WhatsOffered from './WhatsOffered';
import { 
    EmptyString, 
    HomeBanner, 
    HomeBannerText, 
    Homepage1Source, 
    Homepage1Text, 
    Homepage2Source, 
    Homepage2Text, 
    HomeVideoSource } from '../../resources/Strings';
import '../../styling/components/home/HomeBody.css';

function HomeBody() {
    return (
        <div className='homeBody'>
            <Banner 
                source={HomeBanner} 
                alternate={HomeBannerText} />
            <Tagline />
            <Video title={EmptyString} url={HomeVideoSource} />
            <div className='homeBody__containerVeryBottom'>
                <WhatsOffered />
                <ImageRow 
                    source1={Homepage1Source} 
                    source2={Homepage2Source} 
                    alt1={Homepage1Text} 
                    alt2={Homepage2Text} />
                <Pledge />
            </div>
        </div>
    );
}

export default HomeBody;
