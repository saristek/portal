import { TRPC } from "@sveltering/shtz/server";
import { context } from './context';

const origin = 'http://localhost:5173'

// init
export const t = new TRPC({
    origin,
    bypassOrigin: origin,
    // Path is optional with the default value being /trpc 
    path: '/trpc',
    context
});