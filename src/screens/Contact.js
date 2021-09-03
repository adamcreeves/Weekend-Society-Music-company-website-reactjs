import React, { useState } from 'react';
import Header from "../components/Header";
import '../styling/Contact.css'
import emailjs from 'emailjs-com';
import Footer from '../components/Footer';
import { ContactFormHeadline, ContactHeadline, Email, PhoneNumber } from '../resources/Strings';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [guestCount, setGuestCount] = useState('');
    const [eventLength, setEventLength] = useState('');
    const [notes, setNotes] = useState('');
    const [heardAbout, setHeardAbout] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('weekend_inquiries', 'template_dfpxnv1', e.target, 'user_BgakDUbNo9ThPcGN0y1JT')
        .then((result) => {
            console.log(result.text);
            setName('');
            setPhone('');
            setEmail('');
            setEventType('');
            setEventDate('');
            setEventLocation('');
            setEventLength('');
            setNotes('');
            setGuestCount('');
            setHeardAbout('');
            alert('Your information has been sent\nYou will hear from us soon')
        }, (error) => {
            console.log(error.text);
            alert('Something went wrong. Please try again.')
        });
    }

    const renderForm = () => {
        return (
            <form
                className='contact__form' 
                onSubmit={sendEmail}>
                <input 
                    placeholder='Your Name'
                    className='contact__formInput'
                    name='name'
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required 
                />
                <input 
                    placeholder='Phone Number'
                    className='contact__formInput'
                    type='text'
                    name='phone'
                    minLength={10}
                    value={phone}
                    onChange={e => setPhone(e.target.value)} 
                    required
                />
                <input
                    placeholder='Email Address'
                    className='contact__formInput'
                    type='email'
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    required
                />
                <input 
                    placeholder='Event Type'
                    className='contact__formInput'
                    type='text'
                    name='eventType'
                    value={eventType}
                    onChange={e => setEventType(e.target.value)} 
                />
                <input 
                    placeholder='Event Date'
                    className='contact__formInput'
                    type='text'
                    name='eventDate'
                    value={eventDate}
                    onChange={e => setEventDate(e.target.value)} 
                />
                <input 
                    placeholder='Event Location'
                    className='contact__formInput'
                    type='text'
                    name='eventLocation'
                    value={eventLocation}
                    onChange={e => setEventLocation(e.target.value)} 
                />
                <input 
                    placeholder='Event Length'
                    className='contact__formInput'
                    type='text'
                    name='eventLength'
                    value={eventLength}
                    onChange={e => setEventLength(e.target.value)} 
                />   
                <input 
                    placeholder='Notes or other details'
                    className='contact__formInput'
                    type='text'
                    name='notes'
                    value={notes}
                    onChange={e => setNotes(e.target.value)} 
                />
                <input
                    placeholder='Guest Count' 
                    className='contact__formInput'
                    type='text'
                    name='guestCount'
                    value={guestCount}
                    onChange={e => setGuestCount(e.target.value)} 
                />
                <input 
                    placeholder='How you found us'
                    className='contact__formInput'
                    type='text'
                    name='heardAbout'
                    value={heardAbout}
                    onChange={e => setHeardAbout(e.target.value)} 
                />
                <input className='contact__formSubmitBtn' type='submit' value='Submit' />
            </form>
        );
    }

    return (
        <div className='contact__page'>
            <Header className='contact__header'/>
            <div className='contact__container'>
                <img 
                    className='contact__imageTop' 
                    src='/contactMain.jpg' 
                    alt='Guy and girl dancing' />
                <div className='contact__infoHeader'>{ContactHeadline}</div>
                <div className='contact__infoPhone'>
                    <a href='tel:+13238802005' className='infoContact__click'>{PhoneNumber}</a>
                </div>
                <div className='contact__info'>
                    <a href="mailto:hello@weekendsocietymusic.com" className='infoContact__click'>{Email}</a>
                </div>
                <div className='contact__info2'>{ContactFormHeadline}</div>
                {renderForm()}
            </div>
            <Footer className='contact__footer' />
        </div>
    );
}

export default Contact;

