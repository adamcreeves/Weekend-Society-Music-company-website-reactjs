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
            <div className='videos__container'>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <ReactPlayer className='video' url='https://vimeo.com/560991462' />
                        <div className='videoTitle'>Crazy In Love</div>
                    </div>
                    <div className='videos__video'>
                        <ReactPlayer className='video' url='https://vimeo.com/557864630' />
                        <div className='videoTitle'>Shut Up And Dance</div>
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <ReactPlayer className='video' url='https://vimeo.com/560094415' />
                        <div className='videoTitle'>Don't Stop Believin'</div>
                    </div>
                    <div className='videos__video'>
                        <ReactPlayer className='video' url='https://vimeo.com/555427896' />
                        <div className='videoTitle'>You Shook Me All Night Long</div>
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <ReactPlayer className='video' url='https://vimeo.com/561555897' />
                        <div className='videoTitle'>Can't Stop The Feelin'</div>
                    </div>
                    <div className='videos__video'>
                        <ReactPlayer className='video' url='https://vimeo.com/561558104' />
                        <div className='videoTitle'>Fly Me To The Moon</div>
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <ReactPlayer className='video' url='https://vimeo.com/563801264' />
                        <div className='videoTitle'>Don't Start Now</div>
                    </div>
                    <div className='videos__video'>
                        <ReactPlayer className='video' url='https://vimeo.com/563801725' />
                        <div className='videoTitle'>If I Ain't Got You</div>
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <ReactPlayer className='video' url='https://vimeo.com/563807130' />
                        <div className='videoTitle'>September</div>
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