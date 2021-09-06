import React from 'react';
import Header from '../components/header/Header';
import HomeBody from '../components/home/HomeBody';
import Footer from '../components/footer/Footer';
import { c_0008, c_0009, c_0010 } from '../resources/ClassNames';
import "../styling/pages/HomePage.css";

function HomePage() {
    return (
        <div className={c_0008}>
            <Header className={c_0009} />
            <HomeBody />
            <Footer className={c_0010} />
        </div>
    );
}

export default HomePage;
