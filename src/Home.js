import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";
import ReactPlayer from "react-player";

function Home() {

    const renderHeader = () => {
        return (
            <div id='webHeader' className='home__header'>
                <Header />
            </div>
        );
    }

    return (
        <div className='home__page'>
            {renderHeader()}
            <div className='home__containerTop'>
                <img 
                    className='home__imageTop' 
                    src='/weekendsocietybg.jpg' 
                    alt='The Weekend Society Music Group' />
            </div>
            <div className='home__containerCenter'>
                <div className='home__welcomeText'>Welcome</div>
                <div className='home__tagline'>You Dance, You Party, We'll Play</div>
            </div>
            <div className='home__containerBottom'>
                <div className='home__video'>
                    <ReactPlayer className='video' url='https://vimeo.com/555427896' />
                </div>
                {/* <iframe 
                    className='home__demoVideo'
                    title='Second video'
                    src="https://player.vimeo.com/video/555427896" 
                    width="753" 
                    height="400" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen /> */}
            </div>
            <div className='home__footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Home;