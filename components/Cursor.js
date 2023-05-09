import { useEffect, useRef } from 'react';

import styles from '@/styles/Cursor.module.scss';

import { useHoverContext } from '@/contexts/HoverContext';
import { useMouseLeaveContext } from '@/contexts/MouseLeaveContext';

export default function Cursor() {

    const { hover } = useHoverContext();
    const { hide } = useMouseLeaveContext();

    const cursorInner = useRef();
    const cursorOuter = useRef();

    useEffect(() => {

        hide ? cursorInner.current.style.opacity = '0' : cursorInner.current.style.opacity = '1';

    })

    useEffect(() => {
        
        const mouseMoveListener = (e) => {

            if (cursorInner.current) {

                cursorInner.current.setAttribute('style',
                    `translate: ${e.clientX - 5}px ${e.clientY - 5}px 0; opacity: ${hover ? '0' : '1'};`
                );

            };

            if (cursorOuter.current) {

                cursorOuter.current.setAttribute('style',
                    `translate: ${(e.clientX - 31)}px ${e.clientY - 31}px 0; opacity: ${hover ? '0.5' : '0'};`
                );

            }

            // const timeout = setTimeout(() => {

            //     if (cursorOuter.current) {

            //         cursorOuter.current.setAttribute('style',
            //             `translate: ${(e.clientX - 31)}px ${e.clientY - 31}px 0; scale: ${hover ? '1.3' : '1'};`
            //         );

            //     };

            // }, 50);

            // return () => {
            //     clearTimeout(timeout);
            // }

        };

        const mouseDownListener = (e) => {

            if (cursorInner.current && !hover) {

                cursorInner.current.setAttribute('style',
                    `translate: ${(e.clientX - 5)}px ${e.clientY - 5}px 0; scale: 0.5;`
                );

            };

        };

        const mouseUpListener = (e) => {

            cursorInner.current.setAttribute('style',
                `translate: ${(e.clientX - 5)}px ${e.clientY - 5}px 0; opacity: ${hover ? '0' : '1'};`
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