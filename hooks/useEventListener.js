import { useEffect } from "react";

export default function useEventListener(ref) {

    useEffect(() => {

        const mouseMoveListener = (e) => {
    
          let mouseX = e.offsetX - (innerWidth/2);
          let mouseY = e.offsetY - (innerHeight/2);
    
          ref.current.style.transform = `translate(${-mouseX/100}px, ${-mouseY/500}px)`;
    
        };
    
        window.addEventListener('mousemove', mouseMoveListener);
    
        return () => {
    
          window.removeEventListener('mousemove', mouseMoveListener);
    
        };
    
      });

}