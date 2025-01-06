import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	try {
		const response = await fetch(`http://portal.test/api/card/${params.nis}`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const result = await response.json();
		return { result };
	} catch (error) {
		console.error('Fetch error:', error);
		return { data: [] };
	}
};