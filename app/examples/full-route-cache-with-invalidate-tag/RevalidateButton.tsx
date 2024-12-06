'use client';

import { revalidateAction } from './actions';


export default function RevalidateButton() {
    return (
        <button 
            className="mt-4 px-4 py-2 bg-slate-800 text-sm rounded-md"
            onClick={revalidateAction}
        >
            revalidate
        </button>
    );
}
