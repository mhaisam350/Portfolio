import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    return (

        <ThemeContext.Provider value={ { theme, setTheme } }>
            { children }
        </ThemeContext.Provider>

    )

}

export const useThemeContext = () => {

    return useContext(ThemeContext);

}