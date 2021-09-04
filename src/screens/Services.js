import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import '../styling/screens/Services.css';
import ReactPlayer from "react-player";

function Services() {

    const RenderSectionTitle = ({title}) => {
        return (
            <div className='services__sectionTitle'>
                <div className='services__sectionTitleText'>{title}</div>
            </div>
        );
    }

    const RenderReceptionSection = ({sectionTitle, detail1, detail2, detail3}) => {
        return (
            <div className='services__section'>
                <RenderSectionTitle title={sectionTitle} />
                <div className='services__sectionDetails'>
                    {detail1}
                </div>
                <div className='services__sectionDetails'>
                    {detail2}
                </div>
                <div className='services__sectionDetails'>
                    {detail3}
                </div>
            </div>
        );
    }

    const RenderCocktailSection = ({sectionTitle, details}) => {
        return (
            <div className='services__sectionCocktail'>
                <div className='services__sectionCocktailTitleContainer'>
                    <RenderSectionTitle title={sectionTitle} />
                </div>
                {details.split('\n').map((i, key) => {
                    return <div className='services__sectionDetails' key={key}>{i}</div>
                })}
            </div>
        );
    }

    const RenderCeremonySection = ({sectionTitle, details}) => {
        return (
            <div className='services__sectionCeremony'>
                <div className='services__sectionCeremonyTitleContainer'>
                    <RenderSectionTitle title={sectionTitle} />
                </div>
                {details.split('\n').map((i, key) => {
                    return <div className='services__sectionDetails' key={key}>{i}</div>
                })}
            </div>
        );
    }

    const RenderInfoForAll = () => {
        return (
            <div className='infoForAllContainer'>
                <div className='infoForAllTitle'>
                    All Signature Services Include
                </div>
                <div className='infoForAllDetails'>
                    • 4 hours of Curated Music
                </div>
                <div className='infoForAllDetails'>
                    • High quality professional musicians in event appropriate attire  
                </div>
                <div className='infoForAllDetails'>
                    • Carefully selected song list based on your vision and our industry expertise   
                </div>
                <div className='infoForAllDetails'>
                    • Premium sound {'&'} lighting design   
                </div>
                <div className='infoForAllDetails'>
                    • Professional producer to work with your event coordinator throughout the
                        event to ensure your vision is executed in a timely manner
                </div>
                <div className='infoForAllDetails'>
                    • Pre-event music consultation to discuss your preferences
                </div>
                <div className='infoForAllDetails'>
                    • Continuous music during band breaks to match the atmosphere
                </div>
                <div className='infoForAllDetails'>
                    • Up to four(4) personalized song selections outside of our repertoire
                </div>
                <div className='infoForAllDetails'>
                    • Setup (2-3 hours), teardown, {'&'} travel included
                </div>
                <div className='infoForAllDetails'>
                    • An electric slide {'&'} chicken dance free dance floor
                </div>
            </div>
        );
    }

    return (
        <div className='services__page'>
            <Header className='services__header' />
            <div className='services__container'>
                <div className='services__sectionContainer'>
                    <div className='services__title'>Reception</div>
                    <div id='mainSection1' className='services__mainSection'>
                        <div className='services__mainSectionColumn'>
                            <RenderReceptionSection 
                                sectionTitle={'Signature Premium'} 
                                detail1={'• 4 premium vocalists'} 
                                detail2={'• Rhythm section: Keyboard, Guitar, Bass Guitar, & Drums'} 
                                detail3={'• Full Brass section: Trumpet, Saxophone, & Trombone'} />
                            <RenderReceptionSection 
                                sectionTitle={'Signature Plus'} 
                                detail1={'• 3 premium vocalists'} 
                                detail2={'• Rhythm section: Keyboard, Guitar, Bass Guitar, & Drums'} 
                                detail3={'• Full Brass section: Trumpet & Saxophone'} />
                            <RenderReceptionSection 
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
                    <RenderInfoForAll />
                </div>
                <div className='services__sectionContainer'>
                    <div className='services__title'>Cocktail Hour</div>
                    <div className='services__titleUnderText'>(Named after some of our favorite cocktails)</div>
                    <div className='services__mainSectionCocktail'>
                        <div className='services__mainSectionCocktailColumn'>
                            <RenderCocktailSection 
                                sectionTitle={'Trio'} 
                                details={'• Old-Fashioned - Keys, Drums, & Saxophone \n • Penecillin - Saxophone, Drums, & Upright Bass \n • Sazerac - Guitar, Drums, & Saxophone \n • Manhattan - Keys, Guitar, & Drums'} />
                            <RenderCocktailSection 
                                sectionTitle={'Quartet'} 
                                details={'• Classic Martini - Keys, Upright Bass, Saxophone, & Drums \n • Gimlet - Keys, Upright Bass, Trumpet, & Drums \n • Gin & Tonic - Guitar, Upright Bass, Keys, & Drums \n • Bramble - Guitar, Upright Bass, Saxophone, & Drums'} />
                            <RenderCocktailSection 
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
                                <RenderCeremonySection 
                                    sectionTitle={'Solo'}
                                    details={'• Keys \n • Guitar \n • Saxophone \n • Violin'} />
                                <RenderCeremonySection 
                                    sectionTitle={'Duo'}
                                    details={'• Keys & Saxophone \n • Keys & Guitar \n • Violin & Cello \n • Violin & Keys'} />
                            </div>
                            <div className='services__mainSectionCeremonyColumn'>
                                <RenderCeremonySection 
                                    sectionTitle={'Trio'}
                                    details={'• Keys, Saxophone, Guitar \n • Violin, Cello, & Viola'} />
                                <RenderCeremonySection 
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