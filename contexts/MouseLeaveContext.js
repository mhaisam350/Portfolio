import { useState, createContext, useContext } from 'react';

const MouseLeaveContext = createContext();

export const MouseLeaveContextProvider = ({ children }) => {

    const [hide, setHide] = useState(false);

    return (

        <MouseLeaveContext.Provider value={ { hide, setHide } }>
            { children }
        </MouseLeaveContext.Provider>

    )

}

export const useMouseLeaveContext = () => {

    return useContext(MouseLeaveContext);

}