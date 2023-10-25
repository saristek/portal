import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
	const base = {
		title: 'Layanan Portal Digital'
	};

	// based on server side
	const session = await getSession();

	if (session) {
		throw redirect(303, '/account');
	}

	return {
		...base,
		url: url.origin
	};
};

export const actions: Actions = {
	setTheme: async ({ cookies, locals, url }) => {
		const theme = locals.theme == 'light' ? 'dark' : 'light';

		if (theme) {
			cookies.set('theme', theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}

		// work's every layout routes
		throw redirect(303, url.searchParams.get('redirectTo') ?? '/');
	}
};
