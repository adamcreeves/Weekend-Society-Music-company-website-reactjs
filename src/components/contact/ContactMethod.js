import React from 'react';

function ContactMethod({ methodClass, source, text, linkClass }) {
    return (
        <div className={methodClass}>
            <a href={source} className={linkClass}>{text}</a>
        </div>
    );
}

export default ContactMethod;
