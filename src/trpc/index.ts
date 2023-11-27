import type { ProcedureReturnType } from '@sveltering/shtz/browser';
import type { Router } from '$trpc/hooks';
import { context } from './context';

import {
    loadClientCreate,
    storeClientCreate,
    browserClientCreate
} from '@sveltering/shtz/browser';
import { TRPC } from '@sveltering/shtz/server';

const origin = 'http://localhost:5173'
const url = origin + "/trpc";

// init
export const t = new TRPC({
    origin,
    bypassOrigin: origin,
    // Path is optional with the default value being /trpc 
    path: '/trpc',
    context
});

// method
export const loadClient = loadClientCreate<Router>({
    url
});
export const storeClient = storeClientCreate<Router>({
    url
});
export const browserClient = browserClientCreate<Router>({
    url
});

// generic
export type { ProcedureReturnType };