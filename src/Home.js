import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className='home__page'>
            <div className='home__containerTop'>
                <iframe 
                    className='home__demoVideo'
                    title='Second video'
                    src="https://player.vimeo.com/video/555427896" 
                    width="753" 
                    height="400" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='home__containerBottom'>
                <img 
                    className='home__logo' 
                    src='/weekend_logo1.png' 
                    alt='The Weekend Society Music Logo' />
            </div>
        </div>
    );
};

export default Home;