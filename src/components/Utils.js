import React from 'react';

export const renderImage = (className, source, altText) => {
    return (
        <img 
            className={className}
            src={source} 
            alt={altText} />
    );
}
