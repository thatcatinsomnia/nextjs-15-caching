import Link from "next/link";

const examples = [
    {
        title: 'full route cache with dynamic api',
        href: '/examples/full-route-cache-with-dynamic-api',
    },
    {
        title: 'full route cache with invalidate tag',
        href: '/examples/full-route-cache-with-invalidate-tag',
    },
    {
        title: 'full route cache with child',
        href: '/examples/full-route-cache-with-child',
    },
    {
        title: 'data cache without full route cache',
        href: '/examples/data-cache-without-full-route-cache'
    },
    {
        title: 'client side router cache',
        href: '/examples/client-side-router-cache',
    },
];

export default function ExamplesPage() {
    return (
        <div>
            <h2 className="py-8 text-2xl font-bold text-center">Examples</h2>

            <section className="flex flex-col gap-4 items-center">
                {examples.map((example) => (
                    <Link key={example.href} href={example.href} target="_blank" className="inline-block underline text-blue-500">
                        {example.title}
                    </Link>
                ))}
            </section>
        </div>
    );
}
