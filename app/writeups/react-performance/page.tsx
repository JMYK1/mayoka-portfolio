import type { Metadata } from 'next';

const title = 'React Performance: Beyond the Basics';
const description =
    'Advanced React optimization — React.memo, useMemo, list virtualization, code splitting, and production profiling techniques for fast web apps.';
const url = 'https://www.mayoka.dev/writeups/react-performance';

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
        title,
        description,
        url,
        type: 'article',
        publishedTime: '2024-09-15T00:00:00Z',
        authors: ['https://www.mayoka.dev'],
    },
    twitter: { title, description },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    author: { '@type': 'Person', name: 'John Mayoka', url: 'https://www.mayoka.dev' },
    publisher: { '@type': 'Person', name: 'John Mayoka', url: 'https://www.mayoka.dev' },
    datePublished: '2024-09-15',
    description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: 'https://www.mayoka.dev/images/og-image.png',
};

export default function ReactPerformancePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="wp-wrap">
                <a href="/#writeups" className="wp-back">← Back to Writeups</a>
                <div className="wp-meta">
                    <span>Sep 15, 2024</span>
                    <span>·</span>
                    <span>7 min read</span>
                    <span>·</span>
                    <span className="wp-tag">React</span>
                    <span className="wp-tag">Performance</span>
                    <span className="wp-tag">Frontend</span>
                </div>
                <h1 className="wp-title">React Performance: Beyond the Basics</h1>
                <div className="wp-body">
                    <p>
                        Most React tutorials cover the basics of performance: don&apos;t mutate state, use keys in lists, and
                        avoid inline functions in render. But real production apps require deeper strategies. When your
                        component tree grows to hundreds of nodes and your state updates fire cascading re-renders, you
                        need a more systematic approach to performance.
                    </p>
                    <h2>Memoization: Use It Wisely</h2>
                    <p>
                        <code>React.memo</code> prevents re-renders when props haven&apos;t changed, but it&apos;s not free — it adds a
                        shallow comparison on every render. Use it on components that receive stable props but sit inside
                        frequently re-rendering parents. Pair it with <code>useMemo</code> for expensive computed values and
                        <code>useCallback</code> for function references passed as props. The key rule: don&apos;t memoize
                        everything blindly. Profile first, then optimize the components that actually cause jank.
                    </p>
                    <h2>Virtualization for Large Lists</h2>
                    <p>
                        Rendering thousands of DOM nodes kills scroll performance. Libraries like <code>react-window</code> and
                        <code>react-virtuoso</code> solve this by only rendering the items currently visible in the viewport,
                        plus a small overscan buffer. I&apos;ve seen this single optimization take a dashboard from 3-second
                        render times to under 50ms. If your list has more than 100 items, virtualize it.
                    </p>
                    <h2>Code Splitting and Lazy Loading</h2>
                    <p>
                        Use <code>React.lazy</code> with <code>Suspense</code> to split heavy components into separate
                        bundles. This is especially powerful for modals, charts, and admin panels that most users never see.
                        In Next.js, use <code>next/dynamic</code> with <code>ssr: false</code> for components that depend on
                        browser APIs. Watch your bundle size with tools like <code>@next/bundle-analyzer</code> — it often
                        reveals surprising culprits like date libraries or icon packs.
                    </p>
                    <h2>Profiling in Production</h2>
                    <p>
                        The React DevTools Profiler shows you which components re-render and why. Enable the
                        &quot;Highlight updates when components render&quot; option to visually spot unnecessary re-renders.
                        For production, use the Profiler API to collect timing data from real users. Combine this with
                        Web Vitals metrics — specifically Interaction to Next Paint (INP) — to understand how your React
                        app performs on actual devices, not just your M3 MacBook.
                    </p>
                    <h2>State Management Patterns</h2>
                    <p>
                        The biggest performance killer in React is often state architecture. Lifting state too high causes
                        entire subtrees to re-render. Consider colocating state closer to where it&apos;s used, using context
                        selectors (via <code>use-context-selector</code>), or adopting atomic state managers like Jotai or
                        Zustand that allow granular subscriptions. The goal is simple: minimize the number of components
                        that re-render when state changes.
                    </p>
                </div>
            </div>
        </>
    );
}
