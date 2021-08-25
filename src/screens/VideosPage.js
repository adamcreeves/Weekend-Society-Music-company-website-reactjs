import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styling/VideosPage.css';
import Video from "../components/Video";

function VideosPage() {
    return (
        <div className='videos__page'>
            <Header className='videos__header' />
            <div className='videos__container'>
                <div className='videos__row'>
                    <Video title={'Crazy In Love'} url={'https://vimeo.com/560991462'} />
                    <Video title={'Shut Up And Dance'} url={'https://vimeo.com/557864630'} />
                </div>
                <div className='videos__row'>
                    <Video title={'Don\'t Stop Believin\''} url={'https://vimeo.com/560094415'} />
                    <Video title={'You Shook Me All Night Long'} url={'https://vimeo.com/555427896'} />
                </div>
                <div className='videos__row'>
                    <Video title={'Can\'t Stop The Feelin\''} url={'https://vimeo.com/561555897'} />
                    <Video title={'Fly Me To The Moon'} url={'https://vimeo.com/561558104'} />
                </div>
                <div className='videos__row'>
                    <Video title={'Don\'t Start Now'} url={'https://vimeo.com/563801264'} />
                    <Video title={'If I Ain\'t Got You'} url={'https://vimeo.com/563801725'} />
                </div>
                <div className='videos__row'>
                    <Video title={'September'} url={'https://vimeo.com/563807130'} />
                    <Video title={'I Want You Back'} url={'https://vimeo.com/567150898'} />
                </div>
                <div className='videos__row'>
                    <Video title={'Signed, Sealed, Delivered'} url={'https://vimeo.com/567151670'} />
                    <Video title={'Raise Your Glass'} url={'https://vimeo.com/567151151'} />
                </div>
                <div className='videos__row'>
                    <Video title={'Shake Your Body Down'} url={'https://vimeo.com/576976080'} />
                    <Video title={'Kiss'} url={'https://vimeo.com/576975855'} />
                </div>
                <div className='videos__row'>
                    <Video title={'I Wanna Dance With Somebody'} url={'https://vimeo.com/576975954'} />
                    <Video title={'That\'s What I Like'} url={'https://vimeo.com/576981766'} />
                </div>
            </div>
            <Footer className='videos__footer' />
        </div>
    );
}

export default VideosPage;