import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import './Videos.css';
import ReactPlayer from "react-player";

function Videos() {
    return (
        <div className='videos__page'>
            <div className='videos__header'>
                <Header />
            </div>
            <div className='videos__title'>Videos</div>
            <div className='videos__container'>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>Crazy In Love</div>
                        <ReactPlayer className='video' url='https://vimeo.com/560991462' />
                    </div>
                    <div className='videos__video'>
                        <div className='videoTitle'>Shut Up And Dance</div>
                        <ReactPlayer className='video' url='https://vimeo.com/557864630' />
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>Don't Stop Believin'</div>
                        <ReactPlayer className='video' url='https://vimeo.com/560094415' />
                    </div>
                    <div className='videos__video'>
                        <div className='videoTitle'>You Shook Me All Night Long</div>
                        <ReactPlayer className='video' url='https://vimeo.com/555427896' />
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>Can't Stop The Feelin'</div>
                        <ReactPlayer className='video' url='https://vimeo.com/561555897' />
                    </div>
                    <div className='videos__video'>
                        <div className='videoTitle'>Fly Me To The Moon</div>
                        <ReactPlayer className='video' url='https://vimeo.com/561558104' />
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>Don't Start Now</div>
                        <ReactPlayer className='video' url='https://vimeo.com/563801264' />
                    </div>
                    <div className='videos__video'>
                        <div className='videoTitle'>If I Ain't Got You</div>
                        <ReactPlayer className='video' url='https://vimeo.com/563801725' />
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>September</div>
                        <ReactPlayer className='video' url='https://vimeo.com/563807130' />
                    </div>
                </div>
            </div>
            <div className='videos__footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Videos;