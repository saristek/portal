import type { Actions } from "@sveltejs/kit";
import { z } from 'zod';

import type { PageServerLoad } from "./$types";

type IData = {
    id: string;
    name: string;
}[]

export const load: PageServerLoad = async ({locals}) => {
    const {data} = await locals.supabase.from('employee_type').select(`id, name`)
    return {
        jenisPegawai: data as IData
    }
};

const forms = z.object({
    fullname: z.string().min(1).max(64).trim(),
    nip: z.string().min(1).max(18),
    address: z.string().min(4).max(64),
    email: z.string().min(1).max(64).email(),
    password: z.string().min(6).max(32).trim()
})

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData())
        console.log(formData)
        // try {
        //     const result = forms.parse(formData)
        //     console.log(result)
        // } catch (error) {
        //     console.log(error)
        // }
    }
};