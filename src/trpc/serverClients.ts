import { serverClientCreate } from '@sveltering/shtz/server';
import { t } from '$trpc';
import type { Router } from '$trpc/hooks';

export const serverClient = serverClientCreate<Router>(t);
