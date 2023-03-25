import { useState, createContext, useContext } from 'react';

const NavContext = createContext();

export const NavContextProvider = ({ children }) => {

    const [navToggle, setNavToggle] = useState(false);

    return (

        <NavContext.Provider value={ { navToggle, setNavToggle } }>
            { children }
        </NavContext.Provider>

    )

}

export const useNavContext = () => {

    return useContext(NavContext);

}