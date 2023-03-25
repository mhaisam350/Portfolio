import { useEffect } from 'react';

export default function useScrollDisabler(ref) {

  useEffect(() => {

    innerWidth >= 1024 ? ref.current.style.overflow = 'hidden' : ref.current.style.overflowY = 'auto';

  });

}