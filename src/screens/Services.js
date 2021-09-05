import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import '../styling/screens/Services.css';
import ServicesBody from '../components/services/ServicesBody';

function Services () {
    return (
        <div className='services__page'>
            <Header className='services__header' />
            <ServicesBody />
            <Footer className='services__footer' />
        </div>
    );
}

export default Services;
