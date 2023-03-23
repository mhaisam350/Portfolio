import { useEffect } from "react";

import { useNavContext } from '@/contexts/NavContext';

export default function useMobileNavTransition(ref) {

    const { navToggle } = useNavContext()

    useEffect(() => {

        navToggle ? ref.current.style.translate = '-70%' : ref.current.style.translate = '0';

    }, [navToggle]);

}