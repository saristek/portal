import type { PageServerLoad } from './$types';
import { BACKEND_API_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch, params }) => {
	try {
		const response = await fetch(`${BACKEND_API_URL}/card/${params.nis}`);
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		const result = await response.json();
		return { result };
	} catch (error) {
		let errorMessage = 'An unknown error occurred';
		if (error instanceof Error) {
			errorMessage = error.message;
		}
		console.error('Error fetching data:', errorMessage);
		return { data: [], error: errorMessage };
	}
};