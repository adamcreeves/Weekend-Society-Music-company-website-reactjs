import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import './Contact.css'

function Contact() {
    const renderHeader = () => {
        return (
            <div className='contact__header'>
                <Header />
            </div>
        );
    }
    const renderFooter = () => {
        return (
            <div className='contact__footer'>
                <Footer />
            </div>
        );
    }

    return (
        <div className='contact__page'>
            {renderHeader()}
            <div className='contact__container'>

            </div>
            {renderFooter()}
        </div>
    );
}

export default Contact;
