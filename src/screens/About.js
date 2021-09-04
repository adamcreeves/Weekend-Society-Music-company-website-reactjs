import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { AboutBanner, AboutBannerText, BandBio1, BandBio2, IsaacBio, IsaacBioTitle } from '../resources/Strings';
import '../styling/screens/About.css';
import Banner from '../components/subcomponents/Banner';

function About() {
    return (
        <div className='about__page'>
            <Header className='contact__header'/>
            <div className='about__container'>
                <Banner source={AboutBanner} alternate={AboutBannerText} />
                <div className='about__bio'>
                    <div className='about__bandBioText'>
                        {BandBio1}<br /><br />{BandBio2}
                    </div>
                </div>
                <div className='about__bio'>
                    <img 
                        className='about__isaacImage'
                        src='/isaacpic.png'
                        alt='portrait of isaac' />
                    <div className='about__isaacColumn'>
                        <div className='about__isaacName'>{IsaacBioTitle}</div>
                        <div className='about__isaacBioText'>{IsaacBio}</div>
                    </div>
                </div>
            </div>
            <Footer className='contact__footer' />
        </div>
    )
}

export default About;
