import React from 'react';
import ReactPlayer from "react-player";
import '../../styling/components/videos/Video.css';

function Video ({ title, url }) {
    return (
        <div className='video'>
            {title !== '' ? <div className='video__title'>{title}</div> : null}            
            <ReactPlayer className='video__video' url={url} />
        </div>
    );
}

export default Video;
