import Boundary from '#/components/Boundary';
import RevalidateButton from './RevalidateButton';
import { fetchUsersWithTag } from '#/helpers/fetchUsers';

export default async function FullRouteCacheWithInvalidateTag() {
    const users = await fetchUsersWithTag(['full-route-cache-with-revalidate-tag'], {
        next: {
            tags: ['full-route-cache-with-revalidate-tag'],
        }
    });

    return (
        <div>
            <h2 className="py-8 text-2xl font-bold text-center">Full Route Cache with RevalidateTag</h2>
            <Boundary title="Full Route Cache with RevalidateTag">
                {users.join(', ')}
            </Boundary>

            <RevalidateButton />
        </div>
    );
}
