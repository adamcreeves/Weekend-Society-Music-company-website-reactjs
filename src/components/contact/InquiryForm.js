import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { 
    EmptyString, 
    InquiryFormConfirmationMessage, 
    InquiryFormErrorMessage } from '../../resources/Strings';
import "../../styling/components/contact/InquiryForm.css";

function InquiryForm () {
    const [name, setName] = useState(EmptyString);
    const [email, setEmail] = useState(EmptyString);
    const [phone, setPhone] = useState(EmptyString);
    const [eventType, setEventType] = useState(EmptyString);
    const [eventLocation, setEventLocation] = useState(EmptyString);
    const [eventDate, setEventDate] = useState(EmptyString);
    const [guestCount, setGuestCount] = useState(EmptyString);
    const [eventLength, setEventLength] = useState(EmptyString);
    const [notes, setNotes] = useState(EmptyString);
    const [heardAbout, setHeardAbout] = useState(EmptyString);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'weekend_inquiries', 
            'template_dfpxnv1', 
            e.target, 
            'user_BgakDUbNo9ThPcGN0y1JT')
        .then((result) => {
            console.log(result.text);
            setName(EmptyString);
            setPhone(EmptyString);
            setEmail(EmptyString);
            setEventType(EmptyString);
            setEventDate(EmptyString);
            setEventLocation(EmptyString);
            setEventLength(EmptyString);
            setNotes(EmptyString);
            setGuestCount(EmptyString);
            setHeardAbout(EmptyString);
            alert(InquiryFormConfirmationMessage);
        }, (error) => {
            console.log(error.text);
            alert(InquiryFormErrorMessage);
        });
    }
    
    return (
        <form
            className='inquiryForm' 
            onSubmit={sendEmail}>
            <input 
                placeholder='Your Name'
                className='inquiryForm__input'
                name='name'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                required 
            />
            <input 
                placeholder='Phone Number'
                className='inquiryForm__input'
                type='text'
                name='phone'
                minLength={10}
                value={phone}
                onChange={e => setPhone(e.target.value)} 
                required
            />
            <input
                placeholder='Email Address'
                className='inquiryForm__input'
                type='email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)} 
                required
            />
            <input 
                placeholder='Event Type'
                className='inquiryForm__input'
                type='text'
                name='eventType'
                value={eventType}
                onChange={e => setEventType(e.target.value)} 
            />
            <input 
                placeholder='Event Date'
                className='inquiryForm__input'
                type='text'
                name='eventDate'
                value={eventDate}
                onChange={e => setEventDate(e.target.value)} 
            />
            <input 
                placeholder='Event Location'
                className='inquiryForm__input'
                type='text'
                name='eventLocation'
                value={eventLocation}
                onChange={e => setEventLocation(e.target.value)} 
            />
            <input 
                placeholder='Event Length'
                className='inquiryForm__input'
                type='text'
                name='eventLength'
                value={eventLength}
                onChange={e => setEventLength(e.target.value)} 
            />   
            <input 
                placeholder='Notes or other details'
                className='inquiryForm__input'
                type='text'
                name='notes'
                value={notes}
                onChange={e => setNotes(e.target.value)} 
            />
            <input
                placeholder='Guest Count' 
                className='inquiryForm__input'
                type='text'
                name='guestCount'
                value={guestCount}
                onChange={e => setGuestCount(e.target.value)} 
            />
            <input 
                placeholder='How you found us'
                className='inquiryForm__input'
                type='text'
                name='heardAbout'
                value={heardAbout}
                onChange={e => setHeardAbout(e.target.value)} 
            />
            <input className='inquiryForm__submitBtn' type='submit' value='Submit' />
        </form>
    );
}

export default InquiryForm;
