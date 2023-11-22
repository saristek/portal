import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    addNew: async ({ request , locals}) => {
        const formData = Object.fromEntries(await request.formData())

        const {data, error} = await locals.supabase.from('employee_type').insert({
            name: formData.name
        })

        if (error) {
            return new Error
        }

        
        console.log(data)
        console.log(formData)
    }
};