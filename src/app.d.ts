import { SupabaseClient, Session } from '@supabase/supabase-js';
import type { Themes } from './hooks.server';
import type { Database } from '$types/supabase';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			// resolve ssr middleware
			// hooks.server.ts
			theme: string | null;
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			// +routes.server.ts.data
			serverSession: Session | null;
			modeThemes: string;
		}
		// interface Platform {}
	}
}

declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/pro-solid-svg-icons';
}

export {};
