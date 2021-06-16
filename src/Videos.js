import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import './Videos.css';

function Videos() {
    return (
        <div className='videos__page'>
            <div className='videos__header'>
                <Header />
            </div>
            <div className='videos__title'>Videos</div>
            <div className='videos__container'>
                <div className='videos__row'>
                    <iframe 
                        className='videos__video'
                        title='video1'
                        src="https://player.vimeo.com/video/560991462" 
                        width="640" 
                        height="564" 
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen />
                    <iframe 
                        className='videos__video'
                        title='video2' 
                        src="https://player.vimeo.com/video/557864630" 
                        width="640" 
                        height="564" 
                        frameborder="0" 
                        llow="autoplay; fullscreen" 
                        allowfullscreen />
                </div>
                <div className='videos__row'>
                    <iframe 
                        className='videos__video'
                        title='video3' 
                        src="https://player.vimeo.com/video/560094415" 
                        width="640" 
                        height="564" 
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen />
                    <iframe 
                        className='videos__video'
                        title='video4' 
                        src="https://player.vimeo.com/video/555427896" 
                        width="640" 
                        height="564" 
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen />
                </div>
                <div className='videos__row'>
                    <iframe 
                        className='videos__video'
                        title='video5' 
                        src="https://player.vimeo.com/video/561555897" 
                        width="640" 
                        height="564"
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen></iframe>
                    c<iframe 
                        className='videos__video'
                        title='video6' 
                        src="https://player.vimeo.com/video/561558104" 
                        width="640" 
                        height="564" 
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen />
                </div>
                <div className='videos__row'>
                    <iframe 
                        className='videos__video'
                        title='video7' 
                        src="https://player.vimeo.com/video/563801264" 
                        width="640" 
                        height="564" 
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen />
                    <iframe 
                        className='videos__video'
                        title='video8' 
                        src="https://player.vimeo.com/video/563801725" 
                        width="640" 
                        height="564" 
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen />
                </div>
                <div className='videos__row'>
                    <iframe 
                        className='videos__video'
                        title='video9' 
                        src="https://player.vimeo.com/video/563807130" 
                        width="640" 
                        height="564" 
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen />
                </div>
            </div>
            <div className='videos__footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Videos;