import React from 'react';
import './styles.css';

export default function Home() {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen text-black"
            style={{
                backgroundImage: 'url(https://images.hdqwalls.com/wallpapers/gradient-blur-minimalism-fh.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%'
            }}
        >
            <h1 className="heading-gradient">
                INVOICE GEN
            </h1>
            <p className="paragraph">
                Effortlessly generate professional invoices in just a few clicks
            </p>
            <a href="/invoice" className="btn-animate">
                <span>Get Started</span>
            </a>
        </div>
    );
}









