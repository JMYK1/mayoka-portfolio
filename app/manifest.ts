import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'John Mayoka | Security Engineer & Full-Stack Developer',
        short_name: 'John Mayoka',
        description:
            'Self-taught full-stack web developer and cybersecurity engineer based in New York City.',
        start_url: '/',
        display: 'standalone',
        background_color: '#080c0f',
        theme_color: '#00ff88',
        icons: [
            {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
