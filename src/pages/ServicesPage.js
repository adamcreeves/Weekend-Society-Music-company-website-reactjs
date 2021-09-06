import React from 'react';
import Header from '../components/header/Header';
import ServicesBody from '../components/services/ServicesBody';
import Footer from '../components/footer/Footer';
import '../styling/pages/ServicesPage.css';
import { c_0011, c_0012, c_0013 } from '../resources/ClassNames';

function ServicesPage () {
    return (
        <div className={c_0011}>
            <Header className={c_0012} />
            <ServicesBody />
            <Footer className={c_0013} />
        </div>
    );
}

export default ServicesPage;
