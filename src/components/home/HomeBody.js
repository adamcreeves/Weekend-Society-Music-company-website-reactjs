import React from 'react';
import Banner from '../subcomponents/Banner';
import Video from '../videos/Video';
import Tagline from './Tagline';
import { 
    EmptyString, 
    HomeBanner, 
    HomeBannerText, 
    HomeVideoSource } from '../../resources/Strings';
import '../../styling/components/home/HomeBody.css';
import HomeBottom from './HomeBottom';

function HomeBody () {
    return (
        <div className='homeBody'>
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
