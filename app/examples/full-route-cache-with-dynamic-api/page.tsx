import { fetchUsers } from "#/helpers/fetchUsers";
import Boundary from "#/components/Boundary";

// export const dynamic = 'force-dynamic';
// export const revalidate = 10;
// export const fetchCache = 'default-no-store';

export default async function FullRouteCacheWithDynamicAPIPage() {
    const users = await fetchUsers();

    return (
        <div>
            <h2 className="py-8 text-2xl font-bold">Example of full route cache with dynamic api</h2>

            <Boundary title="Full Route Cache with Dynamic API">
                {users.join(', ')}
            </Boundary>
        </div>
    );
}
