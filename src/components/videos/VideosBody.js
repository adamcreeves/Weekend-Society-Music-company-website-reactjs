import React, { useState, useEffect } from 'react';
import { 
    CantStopTheFeelin, 
    CrazyInLove, 
    DontStartNow, 
    DontStopBelievin,  
    FlyMeToTheMoon,  
    IfIAintGotYou, 
    IWannaDance, 
    IWantYouBack, 
    Kiss, 
    RaiseYourGlass, 
    September, 
    ShakeYourBody, 
    ShutUpAndDance,  
    SignedSealed, 
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
    ThatsWhatILike, 
    t_08, 
    YouShookMe } from '../../resources/Strings';
import Video from './Video';
import { c_0021 } from '../../resources/ClassNames';
import '../../styling/components/videos/VideosBody.css';
import LoadingSpinner from '../subcomponents/LoadingSpinner';

function VideosBody() {
    const [loaderVisible, setLoaderVisible] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoaderVisible(false)
        }, t_08);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={c_0021}>
            {loaderVisible ? 
                <LoadingSpinner isVisible={loaderVisible} />
            : (
                <div className={c_0021}>
                    <div className='videosBody__row'>
                        <Video title={CrazyInLove} url={src_019} />
                        <Video title={ShutUpAndDance} url={src_020} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={DontStopBelievin} url={src_021} />
                        <Video title={YouShookMe} url={src_022} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={CantStopTheFeelin} url={src_023} />
                        <Video title={FlyMeToTheMoon} url={src_024} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={DontStartNow} url={src_025} />
                        <Video title={IfIAintGotYou} url={src_026} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={September} url={src_027} />
                        <Video title={IWantYouBack} url={src_028} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={SignedSealed} url={src_029} />
                        <Video title={RaiseYourGlass} url={src_030} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={ShakeYourBody} url={src_031} />
                        <Video title={Kiss} url={src_032} />
                    </div>
                    <div className='videosBody__row'>
                        <Video title={IWannaDance} url={src_033} />
                        <Video title={ThatsWhatILike} url={src_034} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideosBody;
