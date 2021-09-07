import React from 'react';
import Banner from '../subcomponents/Banner';
import Video from '../videos/Video';
import Tagline from './sections/Tagline';
import { 
    alt_002,
    EmptyString,
    src_005,
    src_017} from '../../resources/Strings';
import HomeBottom from './sections/HomeBottom';
import { c_0019 } from '../../resources/ClassNames';
import '../../styling/components/home/HomeBody.css';

function HomeBody() {
    return (
        <div className={c_0019}>
            <Banner 
                source={src_005} 
                alternate={alt_002} />
            <Tagline />
            <Video title={EmptyString} url={src_017} />
            <HomeBottom />
        </div>
    );
}

export default HomeBody;
