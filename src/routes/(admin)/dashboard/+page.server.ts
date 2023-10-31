// import { mikrotik } from '$lib/utils/mikrotik';

export const load = async () => {
	const base = {
		title: 'Dashboard Portal'
	};

	// const [response, error] = await mikrotik('/ip/address/print');
	return {
		...base,
		coba: 'test'
	};
};
