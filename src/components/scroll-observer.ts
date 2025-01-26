// app/components/ScrollObserver.js
'use client';

import { useEffect } from 'react';

const ScrollObserver = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return null; // This component doesn't render anything
};

export default ScrollObserver;
