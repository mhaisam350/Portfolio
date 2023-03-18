import { useEffect, useRef } from 'react';

import styles from '@/styles/Cursor.module.scss';

export default function Cursor() {

    const cursorInner = useRef();
    const cursorOuter = useRef();

    useEffect(() => {
        
        const mouseMoveListener = (e) => {

            cursorInner.current.setAttribute('style',
                `transform: translate3d(${e.clientX - 5}px, ${innerHeight - e.clientY <= 34 ? innerHeight - 39 : e.clientY - 5}px, 0);`
            );

            // cursorInner.current.setAttribute('style',
            //     `transform: translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0);`
            // );

            setTimeout(() => {

                cursorOuter.current.setAttribute('style',
                    `transform: translate3d(${(e.clientX - 31)}px, ${innerHeight - e.clientY <= 34 ? innerHeight - 65 : e.clientY - 31}px, 0);`
                );

            }, 50);
            console.log(innerHeight, e.clientY, e.clientY-5);

        };


        document.addEventListener('mousemove', mouseMoveListener);

        return () => {

            document.removeEventListener('mousemove', mouseMoveListener);

        };

    });

    return (

        <>

            <div ref={cursorInner} className={styles['cursor-inner']}></div>

            <div ref={cursorOuter} className={styles['cursor-outer']}></div>

        </>

    )

}