import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import './Services.css'

function Services() {
    const renderHeader = () => {
        return (
            <div className='services__header'>
                <Header />
            </div>
        );
    }
    const renderFooter = () => {
        return (
            <div className='services__footer'>
                <Footer />
            </div>
        );
    }

    return (
        <div className='services__page'>
            {renderHeader()}
            <div className='services__container'>

            </div>
            {renderFooter()}
        </div>
    );
}

export default Services;
