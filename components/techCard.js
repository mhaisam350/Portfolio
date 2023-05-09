import { useState, useEffect, useRef } from "react";

import styles from '@/styles/TechCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';

export default function TechCard({ tech, zIndex, setZIndex }) {

    const container = useRef();

    const [dragging, setDragging] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [pTop, setPTop] = useState(0);

    const handleMouseDown = (e) => {

        setDragging(true);

        setPosition({x: e.clientX, y: e.clientY});

        // console.log(container.current.getBoundingClientRect());
        // console.log(e.target.offsetParent.clientWidth);

        setPTop(container.current.parentNode.getBoundingClientRect().top);
        setLeft(container.current.getBoundingClientRect().left);
        setTop(container.current.getBoundingClientRect().top);

        window.scrollTo({ top: container.current.parentNode.offsetTop, behavior: 'smooth' });

        setZIndex(zIndex + 1);

        container.current.style.zIndex = zIndex;

    };

    const handleTouchStart = (e) => {

        setDragging(true);

        let touchPosition = e.targetTouches[0];

        setPosition({x: touchPosition.clientX, y: touchPosition.clientY});

        setPTop(container.current.parentNode.getBoundingClientRect().top)
        setLeft(container.current.getBoundingClientRect().left);
        setTop(container.current.getBoundingClientRect().top);

        setZIndex(zIndex + 1);

        container.current.style.zIndex = zIndex;

    }
    
    useEffect(() => {

        const mouseUpListener = (e) => {

            setDragging(false);

        };

        const mouseMoveListener = (e) => {

            container.current.style.translate = `${Math.max(0, Math.min(left + e.clientX - position.x, innerWidth - 100))}px ${Math.max(0, Math.min(top - pTop + e.clientY - position.y, innerHeight - 50))}px`;

        }

        const touchMoveListener = (e) => {

            let touchPosition = e.targetTouches[0];

            container.current.style.translate = `${Math.max(0, Math.min(left + touchPosition.clientX - position.x, innerWidth - 100))}px ${Math.max(0, Math.min(top - pTop + touchPosition.clientY - position.y, innerHeight - 50))}px`;

        }

        if (dragging) {

            document.addEventListener('mouseup', mouseUpListener);
            document.addEventListener('mousemove', mouseMoveListener);

            document.addEventListener('touchend', mouseUpListener);
            document.addEventListener('touchcancel', mouseUpListener);
            document.addEventListener('touchmove', touchMoveListener);

        }

        return () => {

            document.removeEventListener('mouseup', mouseUpListener);
            document.removeEventListener('mousemove', mouseMoveListener);

            document.removeEventListener('touchend', mouseUpListener);
            document.removeEventListener('touchcancel', mouseUpListener);
            document.removeEventListener('touchmove', touchMoveListener);

        }

    }, [dragging]);

    useEffect(() => {

        container.current.style.translate = `${Math.max(0, Math.random() * innerWidth - 200)}px ${Math.max(100, Math.random() * innerHeight - 200)}px`;

    }, []);

    return (

        <div ref={container} className={styles.container} onMouseDown={(e) => handleMouseDown(e)} onTouchStart={(e) => handleTouchStart(e)}>

            <span className={styles['text']}>{tech}</span>

            <FontAwesomeIcon className={styles['icon']} icon={faThumbTack} bounce={false} />

        </div>

    )

}