import React, { useState } from 'react';
import './styles.css';

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (isHovered) {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const x = (clientX - centerX) / centerX;
            const y = (clientY - centerY) / centerY;
            setMousePosition({ x, y });
        }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
    };

    const transformStyle = isHovered
        ? {
            transform: `perspective(1000px) rotateX(${mousePosition.y * 20}deg) rotateY(${-mousePosition.x * 20}deg)`
        }
        : {};

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen text-white"
            style={{
                backgroundImage: 'url(https://cdn.pika.style/wallpapers/series-two/series-2-pika-wallpaper-3.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%'
            }}
            onMouseMove={handleMouseMove}
        >
            <div
                className="div-hover p-24 bg-white bg-opacity-5 rounded-lg shadow-lg text-center"
                style={transformStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h1 className="heading-gradient mb-4">
                    INVOICE GEN
                </h1>
                <p className="paragraph">
                    Effortlessly generate professional invoices in just a few clicks
                </p>
                <a href="/invoice" className="btn-animate">
                    <span>Get Started</span>
                </a>
            </div>
        </div>
    );
}






