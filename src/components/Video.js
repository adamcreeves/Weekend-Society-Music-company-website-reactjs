import React from 'react';
import ReactPlayer from "react-player";
import '../styling/Video.css';

function Video({title, url}) {
    return (
        <div className='videos__video'>
            <div className='video__title'>{title}</div>
            <ReactPlayer className='video' url={url} />
        </div>
    );
}

export default Video;
