import React from 'react';
import { 
    CantStopTheFeelin, 
    CantStopTheFeelinSource, 
    CrazyInLove, 
    CrazyInLoveSource, 
    DontStartNow, 
    DontStartNowSource, 
    DontStopBelievin, 
    DontStopBelievinSource, 
    FlyMeToTheMoon, 
    FlyMeToTheMoonSource, 
    IfIAintGotYou, 
    IfIAintGotYouSource, 
    IWannaDance, 
    IWannaDanceSource, 
    IWantYouBack, 
    IWantYouBackSource, 
    Kiss, 
    KissSource, 
    RaiseYourGlass, 
    RaiseYourGlassSource, 
    September, 
    SeptemberSource, 
    ShakeYourBody, 
    ShakeYourBodySource, 
    ShutUpAndDance, 
    ShutUpAndDanceSource, 
    SignedSealed, 
    SignedSealedSource, 
    ThatsWhatILike, 
    ThatsWhatILikeSource, 
    YouShookMe, 
    YouShookMeSource} from '../../resources/Strings';
import Video from './Video';
import '../../styling/components/videos/VideosBody.css';

function VideosBody () {
    return (
        <div className='videosBody'>
            <div className='videosBody__row'>
                <Video title={CrazyInLove} url={CrazyInLoveSource} />
                <Video title={ShutUpAndDance} url={ShutUpAndDanceSource} />
            </div>
            <div className='videosBody__row'>
                <Video title={DontStopBelievin} url={DontStopBelievinSource} />
                <Video title={YouShookMe} url={YouShookMeSource} />
            </div>
            <div className='videosBody__row'>
                <Video title={CantStopTheFeelin} url={CantStopTheFeelinSource} />
                <Video title={FlyMeToTheMoon} url={FlyMeToTheMoonSource} />
            </div>
            <div className='videosBody__row'>
                <Video title={DontStartNow} url={DontStartNowSource} />
                <Video title={IfIAintGotYou} url={IfIAintGotYouSource} />
            </div>
            <div className='videosBody__row'>
                <Video title={September} url={SeptemberSource} />
                <Video title={IWantYouBack} url={IWantYouBackSource} />
            </div>
            <div className='videosBody__row'>
                <Video title={SignedSealed} url={SignedSealedSource} />
                <Video title={RaiseYourGlass} url={RaiseYourGlassSource} />
            </div>
            <div className='videosBody__row'>
                <Video title={ShakeYourBody} url={ShakeYourBodySource} />
                <Video title={Kiss} url={KissSource} />
            </div>
            <div className='videosBody__row'>
                <Video title={IWannaDance} url={IWannaDanceSource} />
                <Video title={ThatsWhatILike} url={ThatsWhatILikeSource} />
            </div>
        </div>
    );
}

export default VideosBody;
