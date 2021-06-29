import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
import ReactPlayer from "react-player";

function Home() {

    const renderHeader = () => {
        return (
            <div className='home__header'>
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
            </div>
            <div className='home__containerVeryBottom'>
                <div className='home__whatsOfferedContainer'>
                    <div className='home__whatsOfferedTitle'>What We Offer</div>
                    <div className='home__whatsOfferedDetail'>• Weddings</div>
                    <div className='home__whatsOfferedDetail'>• Corporate Events</div>
                    <div className='home__whatsOfferedDetail'>• Private Parties</div>
                    <div className='home__whatsOfferedDetail'>• Special Events</div>
                </div>
                <div className='home__bottomImageContainer'>
                    <img className='home__bottomImage' src='/homepage1.jpg' alt='Guy getting down'/>
                    <img className='home__bottomImage' src='/homepage2.jpg' alt='Bride and groom on dance floor'/>
                </div>
            </div>
            <div className='home__footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Home;