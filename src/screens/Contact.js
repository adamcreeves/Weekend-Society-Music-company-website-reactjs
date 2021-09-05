import React from 'react';
import Header from "../components/head/Header";
import Footer from '../components/foot/Footer';
import ContactBody from '../components/contact/ContactBody';
import '../styling/screens/Contact.css'

function Contact () {
    return (
        <div className='contact__page'>
            <Header className='contact__header'/>
            <ContactBody />
            <Footer className='contact__footer' />
        </div>
    );
}

export default Contact;

