import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
// import { supabase } from "$lib/supabase/client";
// import type { ISiswa } from "$lib/types";
// import type { PageServerLoad } from "./$types";

// export const prerender = true
// export const ssr = false; // disable ssr
// export const csr = false; // disable spa

// comment this if you want place build/* to root "/"
// export const trailingSlash = 'always';


// client-side
export const load = async ({ url, depends, data }) => {
	// const table = "siswa"
	// try {
	// 	const { data } = await supabase.from(table).select();
	// 	return {
	// 		currentPath: url.pathname,
	// 		siswa: data as ISiswa[] ?? [],
	// 	};
	// } catch (error) {
	// 	console.error(`Error in load function for /: ${error}`);
	// }

	depends('supabase:auth')

	const supabase = createSupabaseLoadClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event: { fetch },
		serverSession: data.session,
	})

	const {
		data: { session },
	} = await supabase.auth.getSession()

	return {
		currentPath: url.pathname,
		supabase,
		session
	}

}


// junk code... -_-
// const hotspot = process.env.BUILD_ENV == 'HOTSPOT'
// type IPre = boolean | "auto"
// let isPreRendered: IPre = "auto"
// let isSSR = false
// if (hotspot) {
// 	isPreRendered = true; // enable ssg
// }