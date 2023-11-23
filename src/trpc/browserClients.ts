import type { ProcedureReturnType } from '@sveltering/shtz/browser';
import type { Router } from '$trpc/hooks';
import {
    loadClientCreate,
    storeClientCreate,
    browserClientCreate
} from '@sveltering/shtz/browser';

const origin = 'http://localhost:5173'
const url = origin + "/trpc";

export const loadClient = loadClientCreate<Router>({
    url
});

export const storeClient = storeClientCreate<Router>({
    url
});

export const browserClient = browserClientCreate<Router>({
    url
});

export type { ProcedureReturnType };