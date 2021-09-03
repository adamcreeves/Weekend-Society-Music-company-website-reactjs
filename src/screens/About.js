import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BandBio1, BandBio2, IsaacBio, IsaacBioTitle } from '../resources/Strings';
import '../styling/About.css';

function About() {
    return (
        <div className='about__page'>
            <Header className='contact__header'/>
            <div className='about__container'>
                <img 
                    className='about__imageTop' 
                    src='/aboutMain.png' 
                    alt='The Weekend Society Music Group' />
                <div className='about__bio'>
                    <div className='about__bandBioText'>
                        {BandBio1}
                        <br />
                        <br />
                        {BandBio2}
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
