import { useEffect } from "react";

export default function useMouseEventListener(ref) {

    useEffect(() => {

        const mouseMoveListener = (e) => {
    
          let mouseX = e.clientX - (innerWidth/2);
          let mouseY = e.clientY - (innerHeight/2);

          if (ref.current) {

            ref.current.style.transform = `translate(${-mouseX/100}px, ${-mouseY/500}px)`;

          };
    
        };
    
        window.addEventListener('mousemove', mouseMoveListener);
    
        return () => {
    
          window.removeEventListener('mousemove', mouseMoveListener);
    
        };
    
      });

}