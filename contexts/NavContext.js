import { useState, createContext, useContext } from 'react';

const NavContext = createContext();

export const NavContextProvider = ({ children }) => {

    const [navToggle, setNavtoggle] = useState(false);

    return (

        <NavContext.Provider value={ { navToggle, setNavtoggle } }>
            { children }
        </NavContext.Provider>

    )

}

export const useNavContext = () => {

    return useContext(NavContext);

}