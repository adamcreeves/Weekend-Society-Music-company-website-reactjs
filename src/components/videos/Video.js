import React from 'react';
import ReactPlayer from "react-player";
import '../../styling/components/videos/Video.css';

function Video ({ title, url }) {
    return (
        <div className='videos__video'>
            {title !== '' ? <div className='video__title'>{title}</div> : null}            
            <ReactPlayer className='video' url={url} />
        </div>
    );
}

export default Video;
