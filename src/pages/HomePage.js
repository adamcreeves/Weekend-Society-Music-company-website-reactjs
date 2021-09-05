import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HomeBody from '../components/home/HomeBody';
import "../styling/pages/HomePage.css";

function HomePage () {
    return (
        <div className='home__page'>
            <Header className='home__header' />
            <HomeBody />
            <Footer className='home__footer' />
        </div>
    );
}

export default HomePage;
