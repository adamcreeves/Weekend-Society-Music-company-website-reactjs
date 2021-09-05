import React from 'react';
import { CantStopTheFeelin, CrazyInLove, DontStartNow, DontStopBelievin, FlyMeToTheMoon, IfIAintGotYou, IWannaDance, IWantYouBack, Kiss, RaiseYourGlass, September, ShakeYourBody, ShutUpAndDance, SignedSealed, ThatsWhatILike, YouShookMe } from '../../resources/Strings';
import Video from './Video';
import '../../styling/components/videos/VideosBody.css';

function VideosBody () {
    return (
        <div className='videos__container'>
            <div className='videos__row'>
                <Video title={CrazyInLove} url={'https://vimeo.com/560991462'} />
                <Video title={ShutUpAndDance} url={'https://vimeo.com/557864630'} />
            </div>
            <div className='videos__row'>
                <Video title={DontStopBelievin} url={'https://vimeo.com/560094415'} />
                <Video title={YouShookMe} url={'https://vimeo.com/555427896'} />
            </div>
            <div className='videos__row'>
                <Video title={CantStopTheFeelin} url={'https://vimeo.com/561555897'} />
                <Video title={FlyMeToTheMoon} url={'https://vimeo.com/561558104'} />
            </div>
            <div className='videos__row'>
                <Video title={DontStartNow} url={'https://vimeo.com/563801264'} />
                <Video title={IfIAintGotYou} url={'https://vimeo.com/563801725'} />
            </div>
            <div className='videos__row'>
                <Video title={September} url={'https://vimeo.com/563807130'} />
                <Video title={IWantYouBack} url={'https://vimeo.com/567150898'} />
            </div>
            <div className='videos__row'>
                <Video title={SignedSealed} url={'https://vimeo.com/567151670'} />
                <Video title={RaiseYourGlass} url={'https://vimeo.com/567151151'} />
            </div>
            <div className='videos__row'>
                <Video title={ShakeYourBody} url={'https://vimeo.com/576976080'} />
                <Video title={Kiss} url={'https://vimeo.com/576975855'} />
            </div>
            <div className='videos__row'>
                <Video title={IWannaDance} url={'https://vimeo.com/576975954'} />
                <Video title={ThatsWhatILike} url={'https://vimeo.com/576981766'} />
            </div>
        </div>
    );
}

export default VideosBody;
