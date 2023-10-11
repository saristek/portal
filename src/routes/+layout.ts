// junk code... -_-
// const hotspot = process.env.BUILD_ENV == 'HOTSPOT'
// type IPre = boolean | "auto"
// let isPreRendered: IPre = "auto"
// let isSSR = false
// if (hotspot) {
// 	isPreRendered = true; // enable ssg
// }

import { supabase } from "$lib/supabase/client";
import type { ISiswa } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const prerender = true
// export const ssr = false; // disable ssr
// export const csr = false; // disable spa

// comment this if you want place build/* to root "/"
// export const trailingSlash = 'always';

export const load = async ({ url }) => {
	const table = "siswa"

	try {
		const { data } = await supabase.from(table).select();

		return {
			currentPath: url.pathname,
			siswa: data as ISiswa[] ?? [],
		};
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
}
