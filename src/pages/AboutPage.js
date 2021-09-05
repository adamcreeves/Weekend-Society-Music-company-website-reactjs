import React from 'react'
import AboutBody from '../components/about/AboutBody';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import '../styling/pages/AboutPage.css';

function AboutPage () {
    return (
        <div className='about__page'>
            <Header className='contact__header'/>
            <AboutBody />
            <Footer className='contact__footer' />
        </div>
    );
}

export default AboutPage;
