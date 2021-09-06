import React from 'react';
import Banner from '../subcomponents/Banner';
import Video from '../videos/Video';
import Tagline from './Tagline';
import { 
    EmptyString, 
    HomeBanner, 
    HomeBannerText, 
    HomeVideoSource } from '../../resources/Strings';
import HomeBottom from './HomeBottom';
import { c_0019 } from '../../resources/ClassNames';
import '../../styling/components/home/HomeBody.css';

function HomeBody () {
    return (
        <div className={c_0019}>
            <Banner 
                source={HomeBanner} 
                alternate={HomeBannerText} />
            <Tagline />
            <Video title={EmptyString} url={HomeVideoSource} />
            <HomeBottom />
        </div>
    );
}

export default HomeBody;
