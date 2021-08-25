import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styling/Home.css";
import ReactPlayer from "react-player";

function Home() {

    return (
        <div className='home__page'>
            <Header className='home__header' />
            <div className='home__containerTop'>
                <img 
                    className='home__imageTop' 
                    src='/weekendsocietybg.jpg' 
                    alt='The Weekend Society Music Group' />
            </div>
            <div className='home__containerCenter'>
                <div className='home__welcomeText'>Welcome</div>
                <div className='home__tagline'><div className='home__taglineText'>You Dance, You Party, </div><div className='home__taglinePlay'>We'll Play</div></div>
            </div>
            <div className='home__containerBottom'>
                <div className='home__video'>
                    <ReactPlayer className='video' url='https://vimeo.com/572268414' />
                </div>
            </div>
            <div className='home__containerVeryBottom'>
                <div className='home__whatsOfferedContainer'>
                    <div className='home__whatsOfferedTitle'>What We Offer</div>
                    <div className='home__whatsOfferedDetailContainer'>
                        <div className='home__whatsOfferedDetail'>Weddings</div>
                        <div className='home__whatsOfferedDetail'>Corporate Events</div>
                        <div className='home__whatsOfferedDetail'>Private Parties</div>
                        <div className='home__whatsOfferedDetail'>Special Events</div>
                    </div>
                </div>
                <div className='home__bottomImageContainer'>
                    <img className='home__bottomImage' src='/homepage1.jpg' alt='Guy getting down'/>
                    <img className='home__bottomImage' src='/homepage2.jpg' alt='Bride and groom on dance floor'/>
                </div>
                <div className='home__pledge'>
                    <div className='home__pledgeTitle'>Our<br />Pledge</div>
                    <div className='home__pledgeDetails'>
                        We will play the best music to fit the mood of your guests<br />
                        We will read the audience and build energy accordingly<br />
                        We will take you seamlessly from dinner to the dance party<br />
                        We will make your friends envious<br />
                        We will make you dance your face off<br />
                        We will make you "air guitar" solo<br />
                        <br /> 
                        We will not be diva artists that only play what "we" want to play<br />
                        We will not play the chicken dance, macarena, or electric slide, (unless that's your thing)<br />
                        We will not take a break every 15 minutes<br />
                        We will not tell terrible jokes<br />
                    </div>
                </div>
            </div>
            <Footer className='home__footer' />
        </div>
    );
}

export default Home;