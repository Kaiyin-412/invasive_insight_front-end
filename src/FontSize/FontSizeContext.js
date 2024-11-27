// handle the change in font size 

import React , {createContext, useState} from 'react';

// create a context
export const FontSizeContext = createContext();

// the element that is wrapped by FontSizeProvider will be modify by the font size 
export const FontSizeProvider = ({children}) => {
    const [fontSize, setFontSize]=useState('');

    const changeFontSize = (size) => {
        setFontSize(size);
    }

    return (
        <FontSizeContext.Provider value={{fontSize,changeFontSize}}>
            {children}
        </FontSizeContext.Provider>
    );

};