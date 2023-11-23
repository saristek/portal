import { TRPC } from '@sveltering/shtz/server';
import { context } from './context';
import type { RequestEvent } from '@sveltejs/kit';

export const t = new TRPC({
    // Path is optional with the default value being /trpc 
    path: '/trpc',
    context: async (event: RequestEvent) => context
});