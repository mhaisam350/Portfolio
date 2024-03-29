import { useThemeContext } from "@/contexts/NavContext";

import styles from '@/styles/ThemeSwitch.module.scss';

export default function ThemeSwitch() {

    const { theme, setTheme } = useThemeContext();

    const handleClick = () => {

        setTheme( theme === 'light' ? 'dark' : 'light' );

    }

    return (

        <>
        
            <button onClick={handleClick}>Button</button>

        </>

    )

}