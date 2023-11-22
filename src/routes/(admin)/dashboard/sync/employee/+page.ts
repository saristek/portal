import { client } from "$lib/hook/supabase";
import type { PageLoad } from "./$types";


type IData = {
    id: string,
    name: string,
    born: string,
    birth: string,
    domicile: string,
    gender: string,
    status: string,
    phone: string,
    email: string,
    password: string
}

export const load: PageLoad = async () => {
    const base = {
		title: 'Data Ke-Pegawaian'
	};

    const loadEmployee = async () => {
        const { data } = await client.from('employee').select()
        return data as IData[]
    }

    return {
        infoPage: base,
        employee: loadEmployee()
    }
};