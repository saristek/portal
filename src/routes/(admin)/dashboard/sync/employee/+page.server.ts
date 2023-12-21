import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const base = {
		title: 'Data Ke-Pegawaian'
	};

	return {
		infoPage: base
	};
};

export const actions: Actions = {
	add: async ({ request, locals }) => {
		const formData = Object.fromEntries(await request.formData());

		const { data, error } = await locals.supabase.from('employee').insert({
			name: formData.name,
			email: formData.email,
			password: formData.password,
			status: formData.status,
			gender: formData.gender,
			domicile: formData.domicile,
			phone: formData.phone,
			born: formData.born,
			birth: formData.birth
		});

		if (error) return new Error(error.message);

		return { success: true };
	},
	edit: async ({ request, locals }) => {
		const formData = Object.fromEntries(await request.formData());

		const { data, error } = await locals.supabase
			.from('employee_type')
			.update({
				// name: formData.name
			})
			.match({ id: formData.id });

		if (error) return new Error(error.message);

		return { success: true };
	}
};
