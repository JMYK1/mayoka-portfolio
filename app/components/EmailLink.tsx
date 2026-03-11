'use client';
import { useState } from 'react';

export default function EmailLink() {
    const [revealed, setRevealed] = useState(false);

    const handleClick = () => {
        const user = 'john';
        const domain = 'mayoka.dev';
        const email = `${user}@${domain}`;
        if (!revealed) {
            setRevealed(true);
        }
        window.location.href = `mailto:${email}`;
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                font: 'inherit',
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'none',
            }}
            className="contact-email-btn"
        >
            {revealed ? 'john@mayoka.dev' : 'john[at]mayoka.dev'}
        </button>
    );
}
