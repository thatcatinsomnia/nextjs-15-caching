'use server';

import { revalidateTag } from 'next/cache';

export const revalidateAction = async () => {
    revalidateTag('full-route-cache-with-revalidate-tag');
};
