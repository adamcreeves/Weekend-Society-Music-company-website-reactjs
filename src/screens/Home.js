import React from "react";
import Header from "../components/header/Header";
import HomeBody from "../components/home/HomeBody";
import Footer from "../components/footer/Footer";
import "../styling/screens/Home.css";

function Home() {
    return (
        <div className='home__page'>
            <Header className='home__header' />
            <HomeBody />
            <Footer className='home__footer' />
        </div>
    );
}

export default Home;