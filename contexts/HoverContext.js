import { useState, createContext, useContext } from 'react';

const HoverContext = createContext();

export const HoverContextProvider = ({ children }) => {

    const [hover, setHover] = useState(false);

    return (

        <HoverContext.Provider value={ { hover, setHover } }>
            { children }
        </HoverContext.Provider>

    )

}

export const useHoverContext = () => {

    return useContext(HoverContext);

}