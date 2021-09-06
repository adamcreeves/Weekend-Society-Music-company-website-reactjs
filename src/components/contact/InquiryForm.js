import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { 
    EmptyString, 
    FormBtnLabel, 
    InputName_01, 
    InputName_02, 
    InputName_03, 
    InputName_04, 
    InputName_05, 
    InputName_06, 
    InputName_07, 
    InputName_08, 
    InputName_09, 
    InputName_10, 
    InputPH_01, 
    InputPH_02,
    InputPH_03,
    InputPH_04, 
    InputPH_05, 
    InputPH_06, 
    InputPH_07, 
    InputPH_08, 
    InputPH_09, 
    InputPH_10, 
    InquiryFormConfirmationMessage, 
    InquiryFormErrorMessage, 
    ServiceEmailKey, 
    ServiceEmailName, 
    ServiceEmailTemplate, 
    TypeEmail, 
    TypeSubmit, 
    TypeText} from '../../resources/Strings';
import { c_0040, c_0041, c_0042 } from '../../resources/ClassNames';
import "../../styling/components/contact/InquiryForm.css";

function InquiryForm() {
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
            ServiceEmailName, 
            ServiceEmailTemplate, 
            e.target, 
            ServiceEmailKey)
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
            className={c_0040} 
            onSubmit={sendEmail}>
            <input 
                placeholder={InputPH_01}
                className={c_0041}
                name={InputName_01}
                type={TypeText}
                value={name}
                onChange={e => setName(e.target.value)}
                required 
            />
            <input 
                placeholder={InputPH_02}
                className={c_0041}
                type={TypeText}
                name={InputName_02}
                minLength={10}
                value={phone}
                onChange={e => setPhone(e.target.value)} 
                required
            />
            <input
                placeholder={InputPH_03}
                className={c_0041}
                type={TypeEmail}
                name={InputName_03}
                value={email}
                onChange={e => setEmail(e.target.value)} 
                required
            />
            <input 
                placeholder={InputPH_04}
                className={c_0041}
                type={TypeText}
                name={InputName_04}
                value={eventType}
                onChange={e => setEventType(e.target.value)} 
            />
            <input 
                placeholder={InputPH_05}
                className={c_0041}
                type={TypeText}
                name={InputName_05}
                value={eventDate}
                onChange={e => setEventDate(e.target.value)} 
            />
            <input 
                placeholder={InputPH_06}
                className={c_0041}
                type={TypeText}
                name={InputName_06}
                value={eventLocation}
                onChange={e => setEventLocation(e.target.value)} 
            />
            <input 
                placeholder={InputPH_07}
                className={c_0041}
                type={TypeText}
                name={InputName_07}
                value={eventLength}
                onChange={e => setEventLength(e.target.value)} 
            />   
            <input 
                placeholder={InputPH_08}
                className={c_0041}
                type={TypeText}
                name={InputName_08}
                value={notes}
                onChange={e => setNotes(e.target.value)} 
            />
            <input
                placeholder={InputPH_09} 
                className={c_0041}
                type={TypeText}
                name={InputName_09}
                value={guestCount}
                onChange={e => setGuestCount(e.target.value)} 
            />
            <input 
                placeholder={InputPH_10}
                className={c_0041}
                type={TypeText}
                name={InputName_10}
                value={heardAbout}
                onChange={e => setHeardAbout(e.target.value)} 
            />
            <input className={c_0042} type={TypeSubmit} value={FormBtnLabel} />
        </form>
    );
}

export default InquiryForm;
