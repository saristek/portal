import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ url, depends, data }) => {
	depends('supabase:auth')

	const supabaseClient = createSupabaseLoadClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event: { fetch },
		serverSession: data.session,
	})

	const {
		data: { session: clientSession },
	} = await supabaseClient.auth.getSession()

	return {
		currentPath: url.pathname,
		clientSession,
		supabaseClient,
		modeThemes: data.theme
	}
}