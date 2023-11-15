import { client } from '$lib/hook/supabase.js';
import { json } from '@sveltejs/kit'

// /api/newsletter GET

export async function GET(event) {
    const {data} = await event.locals.supabase.from('items_electronics').select()
    
    const options: ResponseInit = {
        status: 418,
        headers: {
            X: 'Gon give it to ya',
        }
    }

    console.log(data)

    return new Response('Hello', options)
}   