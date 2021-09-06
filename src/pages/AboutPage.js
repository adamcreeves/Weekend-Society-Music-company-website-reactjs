import React from 'react'
import Header from '../components/header/Header';
import AboutBody from '../components/about/AboutBody';
import Footer from '../components/footer/Footer';
import '../styling/pages/AboutPage.css';
import { c_0002, c_0003, c_0004 } from '../resources/ClassNames';

function AboutPage () {
    return (
        <div className={c_0002}>
            <Header className={c_0003} />
            <AboutBody />
            <Footer className={c_0004} />
        </div>
    );
}

export default AboutPage;
