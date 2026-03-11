'use client';

import { useEffect, useState } from 'react';

interface RepoData {
    name: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
}

interface Props {
    owner: string;
    repo: string;
    accentColor: string;
}

/* ── language-color map ── */
const LANG_COLORS: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    MDX: '#fcb32c',
    Markdown: '#083fa1',
};

function timeAgo(dateStr: string): string {
    const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
    const mins = Math.floor(seconds / 60);
    const hrs = Math.floor(mins / 60);
    const days = Math.floor(hrs / 24);
    const months = Math.floor(days / 30);
    if (months > 0) return `Updated ${months} month${months > 1 ? 's' : ''} ago`;
    if (days > 0) return `Updated ${days} day${days > 1 ? 's' : ''} ago`;
    if (hrs > 0) return `Updated ${hrs} hour${hrs > 1 ? 's' : ''} ago`;
    if (mins > 0) return `Updated ${mins} min${mins > 1 ? 's' : ''} ago`;
    return 'Updated just now';
}

export default function GitHubRepoCard({ owner, repo, accentColor }: Props) {
    const [data, setData] = useState<RepoData | null>(null);

    useEffect(() => {
        let cancelled = false;
        fetch(`https://api.github.com/repos/${owner}/${repo}`)
            .then((r) => r.json())
            .then((d) => { if (!cancelled) setData(d); })
            .catch(() => { });
        return () => { cancelled = true; };
    }, [owner, repo]);

    const accent = accentColor;

    /* ── skeleton ── */
    if (!data) {
        return (
            <div
                className="gh-repo-card"
                style={{
                    '--accent': accent,
                    '--accent-rgb': hexToRgb(accent),
                } as React.CSSProperties}
            >
                <div className="gh-grid-bg" />
                <div className="gh-skeleton">
                    <div className="gh-skel-line w60" />
                    <div className="gh-skel-line w90" />
                    <div className="gh-skel-line w40" />
                </div>
                <div className="gh-accent-line" />
            </div>
        );
    }

    const langColor = data.language ? LANG_COLORS[data.language] || '#8b949e' : null;

    return (
        <div
            className="gh-repo-card"
            style={{
                '--accent': accent,
                '--accent-rgb': hexToRgb(accent),
            } as React.CSSProperties}
        >
            <div className="gh-grid-bg" />

            <div className="gh-content">
                {/* ── top row ── */}
                <div className="gh-top-row">
                    <div className="gh-repo-name">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="gh-icon">
                            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5z" />
                            <path d="M10.68 2H4.5a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9.5h6.18V2z" />
                        </svg>
                        <span>{data.name}</span>
                    </div>
                    <span className="gh-public-badge">Public</span>
                </div>

                {/* ── description ── */}
                <p className="gh-description">
                    {data.description || 'No description provided.'}
                </p>

                {/* ── bottom stats ── */}
                <div className="gh-stats-row">
                    {data.language && (
                        <span className="gh-stat">
                            <span className="gh-lang-dot" style={{ background: langColor || '#8b949e' }} />
                            {data.language}
                        </span>
                    )}
                    <span className="gh-stat">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                        </svg>
                        {data.stargazers_count}
                    </span>
                    <span className="gh-stat">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                        </svg>
                        {data.forks_count}
                    </span>
                    <span className="gh-stat gh-updated">
                        {timeAgo(data.updated_at)}
                    </span>
                </div>
            </div>

            <div className="gh-accent-line" />
        </div>
    );
}

/* ── helper ── */
function hexToRgb(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}
