import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";

function Home() {
    return (
        <div className='home__page'>
            <div className='home__header'>
                <Header />
            </div>
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
                <iframe 
                    className='home__demoVideo'
                    title='Second video'
                    src="https://player.vimeo.com/video/555427896" 
                    width="753" 
                    height="400" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen />
            </div>
            <div className='home__footer'>
                <Footer />
            </div>
        </div>
    );
};

export default Home;