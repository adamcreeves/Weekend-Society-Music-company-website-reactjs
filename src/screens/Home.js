import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styling/screens/Home.css";
import Pledge from "../components/home/Pledge";
import Tagline from "../components/home/Tagline";
import WhatsOffered from "../components/home/WhatsOffered";
import Banner from "../components/subcomponents/Banner";
import Video from "../components/videos/Video";
import ImageRow from "../components/images/ImageRow";
import { 
    EmptyString, 
    HomeBanner, 
    HomeBannerText, 
    Homepage1Source, 
    Homepage1Text, 
    Homepage2Source, 
    Homepage2Text, 
    HomeVideoSource } from "../resources/Strings";

function Home() {
    return (
        <div className='home__page'>
            <Header className='home__header' />
            <Banner 
                source={HomeBanner} 
                alternate={HomeBannerText} />
            <Tagline />
            <Video title={EmptyString} url={HomeVideoSource} />
            <div className='home__containerVeryBottom'>
                <WhatsOffered />
                <ImageRow 
                    source1={Homepage1Source} 
                    source2={Homepage2Source} 
                    alt1={Homepage1Text} 
                    alt2={Homepage2Text} />
                <Pledge />
            </div>
            <Footer className='home__footer' />
        </div>
    );
}

export default Home;