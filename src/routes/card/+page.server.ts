import type { PageServerLoad } from './$types';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        const response = await fetch(`${PUBLIC_BACKEND_URL}/api/card`);
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