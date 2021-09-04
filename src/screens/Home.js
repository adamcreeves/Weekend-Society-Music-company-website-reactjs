import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styling/screens/Home.css";
import Pledge from "../components/home/Pledge";
import Tagline from "../components/home/Tagline";
import WhatsOffered from "../components/home/WhatsOffered";
import Banner from "../components/subcomponents/Banner";
import Video from "../components/videos/Video";
import { HomeBanner, HomeBannerText } from "../resources/Strings";

function Home() {
    return (
        <div className='home__page'>
            <Header className='home__header' />
            <Banner 
                source={HomeBanner} 
                alternate={HomeBannerText} />
            <Tagline />
            <Video title={''} url={'https://vimeo.com/572268414'} />
            <div className='home__containerVeryBottom'>
                <WhatsOffered />
                <div className='home__bottomImageContainer'>
                    <img 
                        className='home__bottomImage' 
                        src='/homepage1.jpg' 
                        alt='Guy getting down'/>
                    <img 
                        className='home__bottomImage' 
                        src='/homepage2.jpg' 
                        alt='Bride and groom on dance floor'/>
                </div>
                <Pledge />
            </div>
            <Footer className='home__footer' />
        </div>
    );
}

export default Home;