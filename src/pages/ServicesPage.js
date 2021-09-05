import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import ServicesBody from '../components/services/ServicesBody';
import '../styling/pages/ServicesPage.css';

function ServicesPage () {
    return (
        <div className='services__page'>
            <Header className='services__header' />
            <ServicesBody />
            <Footer className='services__footer' />
        </div>
    );
}

export default ServicesPage;
