import React from "react";
import Header from "../components/head/Header";
import HomeBody from "../components/homeComps/HomeBody";
import Footer from "../components/foot/Footer";
import "../styling/screens/Home.css";

function Home () {
    return (
        <div className='home__page'>
            <Header className='home__header' />
            <HomeBody />
            <Footer className='home__footer' />
        </div>
    );
}

export default Home;