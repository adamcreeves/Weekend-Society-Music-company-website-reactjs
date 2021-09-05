import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import '../styling/screens/Services.css';
import ReactPlayer from "react-player";
import ReceptionSection from '../components/services/sections/ReceptionSection';
import CocktailSection from '../components/services/sections/CocktailSection';
import CeremonySection from '../components/services/sections/CeremonySection';
import ForAllSignatureInfo from '../components/services/sections/ForAllSignatureInfo';

function Services () {
    return (
        <div className='services__page'>
            <Header className='services__header' />
            <div className='services__container'>
                <div className='services__sectionContainer'>
                    <div className='services__title'>Reception</div>
                    <div id='mainSection1' className='services__mainSection'>
                        <div className='services__mainSectionColumn'>
                            <ReceptionSection 
                                sectionTitle={'Signature Premium'} 
                                detail1={'• 4 premium vocalists'} 
                                detail2={'• Rhythm section: Keyboard, Guitar, Bass Guitar, & Drums'} 
                                detail3={'• Full Brass section: Trumpet, Saxophone, & Trombone'} />
                            <ReceptionSection 
                                sectionTitle={'Signature Plus'} 
                                detail1={'• 3 premium vocalists'} 
                                detail2={'• Rhythm section: Keyboard, Guitar, Bass Guitar, & Drums'} 
                                detail3={'• Full Brass section: Trumpet & Saxophone'} />
                            <ReceptionSection 
                                sectionTitle={'Signature'} 
                                detail1={'• 2 premium vocalists'} 
                                detail2={'• Rhythm section: Keyboard, Guitar, Bass Guitar, & Drums'} 
                                detail3={'• 1 Brass player: Saxophone'} />
                        </div>
                        <div className='services__mainSectionColumn'>
                            <img 
                                className='services__mainSectionImage' 
                                src='/servicesReceptionImage2.png' 
                                alt='Couples first dance'/>
                        </div>
                    </div>
                    <ForAllSignatureInfo />
                </div>
                <div className='services__sectionContainer'>
                    <div className='services__title'>Cocktail Hour</div>
                    <div className='services__titleUnderText'>(Named after some of our favorite cocktails)</div>
                    <div className='services__mainSectionCocktail'>
                        <div className='services__mainSectionCocktailColumn'>
                            <CocktailSection 
                                sectionTitle={'Trio'} 
                                details={'• Old-Fashioned - Keys, Drums, & Saxophone \n • Penecillin - Saxophone, Drums, & Upright Bass \n • Sazerac - Guitar, Drums, & Saxophone \n • Manhattan - Keys, Guitar, & Drums'} />
                            <CocktailSection 
                                sectionTitle={'Quartet'} 
                                details={'• Classic Martini - Keys, Upright Bass, Saxophone, & Drums \n • Gimlet - Keys, Upright Bass, Trumpet, & Drums \n • Gin & Tonic - Guitar, Upright Bass, Keys, & Drums \n • Bramble - Guitar, Upright Bass, Saxophone, & Drums'} />
                            <CocktailSection 
                                sectionTitle={'Quintet'} 
                                details={'• Margarita - Keys, Upright Bass, Saxophone, Trumpet, & Drums \n • Paloma - Guitar, Keys, Upright Bass, Saxophone, & Drums \n • Infante - Keys, Guitar, Upright Bass, Drums, & Male or Female Vocalist \n • Night Crawler - Guitar, Upright Bass, Trumpet, Saxophone, & Drums'} />
                        </div>
                        <div className='videos__video'>
                            <div className='videoTitle'>Cocktail Hour (Blue Bossa)</div>
                            <ReactPlayer className='video' url='https://vimeo.com/569581619' />
                        </div>
                    </div>
                </div>
                <div className='services__sectionContainer'>
                    <div className='services__title'>Ceremony</div>
                    <div className='services__mainSectionCeremony'>
                        <div className='services__mainSectionCeremonyRow'>
                            <div className='services__mainSectionCeremonyColumn'>
                                <CeremonySection
                                    sectionTitle={'Solo'}
                                    details={'• Keys \n • Guitar \n • Saxophone \n • Violin'} />
                                <CeremonySection 
                                    sectionTitle={'Duo'}
                                    details={'• Keys & Saxophone \n • Keys & Guitar \n • Violin & Cello \n • Violin & Keys'} />
                            </div>
                            <div className='services__mainSectionCeremonyColumn'>
                                <CeremonySection 
                                    sectionTitle={'Trio'}
                                    details={'• Keys, Saxophone, Guitar \n • Violin, Cello, & Viola'} />
                                <CeremonySection 
                                    sectionTitle={'String Quartet'}
                                    details={'• 2 Violins, Cello, & Viola'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer className='services__footer' />
        </div>
    );
}

export default Services;
