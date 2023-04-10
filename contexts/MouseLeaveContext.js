import { useState, createContext, useContext } from 'react';

const MouseLeaveContext = createContext();

export const MouseLeaveContextProvider = ({ children }) => {

    const [leave, setLeave] = useState(false);

    return (

        <MouseLeaveContext.Provider value={ { leave, setLeave } }>
            { children }
        </MouseLeaveContext.Provider>

    )

}

export const useMouseLeaveContext = () => {

    return useContext(MouseLeaveContext);

}