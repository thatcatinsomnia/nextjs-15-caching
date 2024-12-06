'use client';

import { useState, useEffect } from 'react';
import MenuLinks from './MenuLinks';

export default function HelperMenu() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            console.log(event.key);
            if (event.key === 't') {
                setIsOpen(isOpen => !isOpen);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return isOpen && <MenuLinks />;
}
