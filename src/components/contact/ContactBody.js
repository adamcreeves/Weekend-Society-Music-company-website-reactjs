import React, { useState, useEffect } from 'react';
import { 
    alt_010, 
    ContactFormHeadline, 
    ContactHeadline,
    src_003, 
    src_012, 
    src_013, 
    src_014,
    src_035 } from '../../resources/Strings';
import InquiryForm from './InquiryForm';
import Banner from '../subcomponents/Banner';
import ContactMethod from './ContactMethod';
import { c_0018, c_0114, c_0115, c_0116, c_0117, c_0118 } from '../../resources/ClassNames';
import "../../styling/components/contact/ContactBody.css";
import LoadingSpinner from '../subcomponents/LoadingSpinner';
import { int_02 } from '../../resources/Integers';

function ContactBody() {
    const [loaderVisible, setLoaderVisible] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoaderVisible(false)
        }, int_02);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={c_0018}>
            {loaderVisible ? 
                <LoadingSpinner isVisible={loaderVisible} />
            : (
                <div className={c_0018}>
                    <Banner source={src_003} alternate={alt_010} />
                    <div className={c_0114}>{ContactHeadline}</div>
                    <ContactMethod 
                        methodClass={c_0115}
                        linkClass={c_0116} 
                        source={src_012}
                        text={src_035} />
                    <ContactMethod 
                        methodClass={c_0117}
                        linkClass={c_0116} 
                        source={src_013}
                        text={src_014} />
                    <div className={c_0118}>
                        {ContactFormHeadline}
                    </div>
                    <InquiryForm />
                </div>
            )}
        </div>
    );
}

export default ContactBody;
