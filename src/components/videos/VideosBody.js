import React, { useState, useEffect } from 'react';
import {
    src_019, 
    src_020, 
    src_021, 
    src_022, 
    src_023, 
    src_024, 
    src_025, 
    src_026, 
    src_027, 
    src_028, 
    src_029, 
    src_030, 
    src_031, 
    src_032, 
    src_033, 
    src_034, 
    s_036, 
    s_037, 
    s_038, 
    s_039, 
    s_040, 
    s_041, 
    s_042, 
    s_043, 
    s_044, 
    s_045, 
    s_046, 
    s_047, 
    s_048, 
    s_049, 
    s_050, 
    s_051 } from '../../resources/Strings';
import Video from './Video';
import { c_0021 } from '../../resources/ClassNames';
import '../../styling/components/videos/VideosBody.css';
import LoadingSpinner from '../subcomponents/LoadingSpinner';
import { int_02 } from '../../resources/Integers';

function VideosBody() {
    const [loaderVisible, setLoaderVisible] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoaderVisible(false)
        }, int_02);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={c_0021}>
            {loaderVisible ? 
                <LoadingSpinner isVisible={loaderVisible} />
            : (
                <div className={c_0021}>
                    <div className='videosBody__row'>
                        <Video title={s_036} url={src_019} />
                        <Video title={s_037} url={src_020} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={s_038} url={src_021} />
                        <Video title={s_039} url={src_022} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={s_040} url={src_023} />
                        <Video title={s_041} url={src_024} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={s_042} url={src_025} />
                        <Video title={s_043} url={src_026} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={s_044} url={src_027} />
                        <Video title={s_045} url={src_028} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={s_046} url={src_029} />
                        <Video title={s_047} url={src_030} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={s_048} url={src_031} />
                        <Video title={s_049} url={src_032} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={s_050} url={src_033} />
                        <Video title={s_051} url={src_034} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideosBody;
