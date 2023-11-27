import { t } from '$trpc/init';
import routes from '$trpc/routes';
import type { TRPCLocalCreate } from '@sveltering/shtz/types';

export type Router = typeof routes;
export const handleHook = t.hookCreate(routes);

export const handlefetchHook = t.handleFetchCreate();
export type TRPCLocals = TRPCLocalCreate<typeof t, typeof routes>;