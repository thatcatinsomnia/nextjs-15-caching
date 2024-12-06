import Link from '#/components/Link';

export default function MenuLinks() {
    return (
        <div>
            <div className='bg-black/50 fixed inset-0 backdrop-blur-sm'></div>

            <ul className="p-8 pl-8 fixed top-4 left-4 bg-[#1f1f29] list-disc rounded-md space-y-1">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/01-memoization">Memoization</Link></li>
                <li><Link href="/02-deduplicate-request">Deduplicate Request</Link></li>
                <li><Link href="/03-data-cache">Data Cache</Link></li>
                <li><Link href="/04-cache-and-next-revalidate-options">Cache and Next Revalidate Options</Link></li>
                <li><Link href="/05-how-data-cache-works">How Data Cache Works</Link></li>
                <li><Link href="/06-full-route-cache">Full Route Cache</Link></li>
                <li><Link href="/07-router-cache">Router Cache</Link></li>
                <li><Link href="/08-how-cache-interaction">How Cache Interaction Works</Link></li>
                <li><Link href="/examples">Examples</Link></li>
            </ul>
        </div>
    );
}
