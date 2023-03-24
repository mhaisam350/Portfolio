import { useEffect, useRef } from 'react';

import styles from '@/styles/Cursor.module.scss';

export default function Cursor() {

    const cursorInner = useRef();
    const cursorOuter = useRef();

    useEffect(() => {
        
        const mouseMoveListener = (e) => {

            cursorInner.current.setAttribute('style',
                `translate: ${e.clientX - 5}px ${innerHeight - e.clientY <= 34 ? innerHeight - 39 : e.clientY - 5}px 0;`
            );

            setTimeout(() => {

                if (cursorOuter.current) {

                    cursorOuter.current.setAttribute('style',
                        `translate: ${(e.clientX - 31)}px ${innerHeight - e.clientY <= 34 ? innerHeight - 65 : e.clientY - 31}px 0;`
                    );

                };

            }, 50);

            // console.log(e.target.tagName);

        };

        const mouseDownListener = (e) => {

            cursorOuter.current.setAttribute('style',
                `translate: ${(e.clientX - 31)}px ${innerHeight - e.clientY <= 34 ? innerHeight - 65 : e.clientY - 31}px 0; scale: 0.8;`
            );

        };

        const mouseUpListener = (e) => {

            cursorOuter.current.setAttribute('style',
                `translate: ${(e.clientX - 31)}px ${innerHeight - e.clientY <= 34 ? innerHeight - 65 : e.clientY - 31}px 0;`
            );

        };

        
        document.addEventListener('mousemove', mouseMoveListener);
        document.addEventListener('mousedown', mouseDownListener);
        document.addEventListener('mouseup', mouseUpListener);

        return () => {

            document.removeEventListener('mousemove', mouseMoveListener);
            document.removeEventListener('mousedown', mouseDownListener);
            document.removeEventListener('mouseup', mouseUpListener);

        };

    });

    return (

        <>

            <div ref={cursorInner} className={styles['cursor-inner']}></div>

            <div ref={cursorOuter} className={styles['cursor-outer']}></div>

        </>

    )

}