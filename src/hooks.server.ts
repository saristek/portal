// src/hooks.server.ts
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
    let theme: string | null = null
    const newTheme = event.url.searchParams.get('theme');
    const cookieTheme = event.cookies.get("theme");

    if (newTheme) {
        theme = newTheme
    } else if (cookieTheme) {
        theme = cookieTheme
    }
    // if (event.url.pathname.startsWith('/banana')) {
    //     return new Response('🍌')
    // }

    // otherwise use the default behavior
    // return resolve(event)

    event.locals.theme = cookieTheme
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event,
    })

    /**
     * A convenience helper so we can just call await getSession() instead const { data: { session } } = await supabase.auth.getSession()
     */
    event.locals.getSession = async () => {
        const {
            data: { session },
        } = await event.locals.supabase.auth.getSession()
        return session
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range'
        },
    })
}