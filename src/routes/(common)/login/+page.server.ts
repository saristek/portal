import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
	const base = {
		title: 'Login LPD'
	};

	const session = await getSession();

	if (session) {
		throw redirect(303, '/account');
	}

	return {
		...base,
		url: url.origin
	};
};
