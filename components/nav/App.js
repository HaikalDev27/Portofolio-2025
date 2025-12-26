import './index.css';
import React, { useState, useEffect } from 'react';

export default function App() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onRouteOrResize = () => setOpen(false);
        window.addEventListener('resize', onRouteOrResize);
        return () => window.removeEventListener('resize', onRouteOrResize);
    }, []);

    return (
        <header className="nav-header">
            <div className="nav-container">
                <a className="nav-brand" href="#home">Haikaru Portofolio</a>

                <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
                    <a className='nav-link' href="#home" onClick={() => setOpen(false)}>Home</a>
                    <a className='nav-link' href="#about" onClick={() => setOpen(false)}>About</a>
                    <a className='nav-link' href="#projects" onClick={() => setOpen(false)}>Projects</a>
                    <a className='nav-link' href="#skills" onClick={() => setOpen(false)}>Skills</a>
                    <a className='nav-link' href="#contact" onClick={() => setOpen(false)}>Contact</a>
                    <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Resume</a>
                </nav>

                <button
                    className="nav-toggle"
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                    onClick={() => setOpen(prev => !prev)}
                >
                    <span className="sr-only">Menu</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                </button>
            </div>
        </header>
    );
}