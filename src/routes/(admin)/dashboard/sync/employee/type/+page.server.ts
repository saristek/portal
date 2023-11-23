import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const base = {
        title: 'Jenis Ke-Pegawaian'
    };

    return {
        infoPage: base,
    }
};

export const actions: Actions = {
    addNew: async ({ request, locals }) => {
        const formData = Object.fromEntries(await request.formData())

        const { data, error } = await locals.supabase.from('employee_type').insert({
            name: formData.name
        })

        if (error) return new Error(error.message)


        return { success: true };
    }
};