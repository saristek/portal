import { SupabaseClient, Session } from '@supabase/supabase-js'
import type { Themes } from './hooks.server'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			// resolve ssr middleware
			// hooks.server.ts
			theme: string | null
			supabase: SupabaseClient
			getSession(): Promise<Session | null>
		}
		interface PageData {
			// +page.server.ts
			session: Session | null
		}
		// interface Platform {}
	}
}

export { };
