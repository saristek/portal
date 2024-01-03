import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import type { LayoutLoad } from './$types';
import type { Database } from '$types/supabase';

export const load: LayoutLoad = async ({ fetch, url, depends, data }) => {
	depends('supabase:auth');

	// consume serverSession to supabaseLoadClient
	const supabaseClient = createSupabaseLoadClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event: { fetch },
		serverSession: data.serverSession
	});

	// revalidate session server-client via server only getSession function
	const {
		data: { session: clientSession }
	} = await supabaseClient.auth.getSession();

	return {
		currentPath: url.pathname,
		modeThemes: data.theme,
		supabaseClient,
		clientSession
	};
};
