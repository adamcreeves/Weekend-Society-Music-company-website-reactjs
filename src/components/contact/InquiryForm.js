import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
    FormBtnLabel, 
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
    k_01, 
    k_02, 
    k_03,
    s_001,
    s_002,
    s_003,
    s_004,
    s_005,
    s_006,
    s_007,
    s_008,
    s_009,
    s_010,
    s_011,
    t_01, 
    t_02,
    t_03 } from '../../resources/Strings';
import { c_0040, c_0041, c_0042 } from '../../resources/ClassNames';
import "../../styling/components/contact/InquiryForm.css";

function InquiryForm() {
    const [name, setName] = useState(s_001);
    const [email, setEmail] = useState(s_001);
    const [phone, setPhone] = useState(s_001);
    const [eventType, setEventType] = useState(s_001);
    const [eventLocation, setEventLocation] = useState(s_001);
    const [eventDate, setEventDate] = useState(s_001);
    const [guestCount, setGuestCount] = useState(s_001);
    const [eventLength, setEventLength] = useState(s_001);
    const [notes, setNotes] = useState(s_001);
    const [heardAbout, setHeardAbout] = useState(s_001);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            k_01, 
            k_02, 
            e.target, 
            k_03)
        .then((result) => {
            console.log(result.text);
            setName(s_001);
            setPhone(s_001);
            setEmail(s_001);
            setEventType(s_001);
            setEventDate(s_001);
            setEventLocation(s_001);
            setEventLength(s_001);
            setNotes(s_001);
            setGuestCount(s_001);
            setHeardAbout(s_001);
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
                name={s_002}
                type={t_01}
                value={name}
                onChange={e => setName(e.target.value)}
                required 
            />
            <input 
                placeholder={InputPH_02}
                className={c_0041}
                type={t_01}
                name={s_003}
                minLength={10}
                value={phone}
                onChange={e => setPhone(e.target.value)} 
                required
            />
            <input
                placeholder={InputPH_03}
                className={c_0041}
                type={t_02}
                name={s_004}
                value={email}
                onChange={e => setEmail(e.target.value)} 
                required
            />
            <input 
                placeholder={InputPH_04}
                className={c_0041}
                type={t_01}
                name={s_005}
                value={eventType}
                onChange={e => setEventType(e.target.value)} 
            />
            <input 
                placeholder={InputPH_05}
                className={c_0041}
                type={t_01}
                name={s_006}
                value={eventDate}
                onChange={e => setEventDate(e.target.value)} 
            />
            <input 
                placeholder={InputPH_06}
                className={c_0041}
                type={t_01}
                name={s_007}
                value={eventLocation}
                onChange={e => setEventLocation(e.target.value)} 
            />
            <input 
                placeholder={InputPH_07}
                className={c_0041}
                type={t_01}
                name={s_008}
                value={eventLength}
                onChange={e => setEventLength(e.target.value)} 
            />   
            <input 
                placeholder={InputPH_08}
                className={c_0041}
                type={t_01}
                name={s_009}
                value={notes}
                onChange={e => setNotes(e.target.value)} 
            />
            <input
                placeholder={InputPH_09} 
                className={c_0041}
                type={t_01}
                name={s_010}
                value={guestCount}
                onChange={e => setGuestCount(e.target.value)} 
            />
            <input 
                placeholder={InputPH_10}
                className={c_0041}
                type={t_01}
                name={s_011}
                value={heardAbout}
                onChange={e => setHeardAbout(e.target.value)} 
            />
            <input className={c_0042} type={t_03} value={FormBtnLabel} />
        </form>
    );
}

export default InquiryForm;
