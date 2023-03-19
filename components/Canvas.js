import { useState, useEffect, useRef } from "react";

import styles from '@/styles/Canvas.module.scss';

export default function Canvas() {

    const canvas = useRef();

    // console.log(canvas);

    useEffect(() => {

        // console.log(canvas.current);

        const canvasContext = canvas.current.getContext('2d');

        canvasContext.canvas.width = innerWidth;
        canvasContext.canvas.height = innerHeight;

        const resizeListener = () => {

            canvasContext.canvas.width = innerWidth;
            canvasContext.canvas.height = innerHeight;

        };

        let particleArray;

        function Particle (x, y, dX, dY, size) {

            this.x = x;
            this.y = y;
            this.dX = dX;
            this.dY = dY;
            this.size = size;

        };

        Particle.prototype.draw = function() {

            canvasContext.beginPath();
            canvasContext.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            canvasContext.fillStyle = '#fff';
            canvasContext.fill();

        };

        Particle.prototype.update = function() {

            if (this.x + this.size > canvas.current.width || this.x - this.size < 0) {
                this.dX = -this.dX;
            };

            if (this.y + this.size > canvas.current.height || this.y - this.size < 0) {
                this.dY = -this.dY;
            };

            this.x += this.dX;
            this.y += this.dY;

            this.draw();

        };

        // console.log(canvas.current.width);

        function init() {

            particleArray = [];

            for (let i = 0; i < 100; i++) {

                let size = Math.random() * 1;
                let x = Math.random() * (innerWidth - size * 2);
                let y = Math.random() * (innerHeight - size * 2);
                let dX = (Math.random() * 0.2) - 0.1;
                let dY = (Math.random() * 0.2) - 0.1;

                particleArray.push(new Particle(x, y, dX, dY, size));

            };

        };

        function animate() {

            requestAnimationFrame(animate);
            canvasContext.clearRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < particleArray.length; i++) {
                particleArray[i].update();
            };

        };

        init();
        animate();

        const mouseMoveListener = (e) => {
            
            let mouseX = e.clientX - (innerWidth/2);
            let mouseY = e.clientY - (innerHeight/2);

            // for (let i = 0; i < particleArray.length; i++) {
            //     particleArray[i].dX += mouseX/100000;
            //     particleArray[i].dY += mouseY/100000;
            // };

            canvas.current.style.transform = `perspective(1000px) rotateX(${-mouseY/1000}deg)  rotateY(${mouseX/1000}deg)`;

        };

        window.addEventListener('resize', resizeListener);
        window.addEventListener('mousemove', mouseMoveListener);

        return () => {

            window.removeEventListener('resize', resizeListener);
            window.removeEventListener('mousemove', mouseMoveListener);

        };

    });

    return (

        <canvas ref={canvas} id={styles.canvas}></canvas>

    )

}