import type { Handle } from "@sveltejs/kit";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { Themes } from '$lib/theme';

const common: Handle = async ({ event, resolve }) => {
    // theme block
    let theme: string | null = null;
    const newTheme = event.url.searchParams.get('theme');
    const cookieTheme = event.cookies.get('theme');
    if (newTheme) {
        theme = newTheme;
    } else if (cookieTheme) {
        theme = cookieTheme;
    } else {
        theme = Themes.LIGHT;
        event.cookies.set('theme', Themes.LIGHT);
    }
    event.locals.theme = theme;

    // supabase block
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event
    });

    /**
     * A convenience helper so we can just call await getSession() instead const { data: { session } } = await supabase.auth.getSession()
     */
    event.locals.getSession = async () => {
        const {
            data: { session }
        } = await event.locals.supabase.auth.getSession();
        return session;
    };

    const response = resolve(event, {
        transformPageChunk: ({ html }) => html.replace('class=""', `class="${event.locals.theme}"`),
        filterSerializedResponseHeaders(name) {
            return name === 'content-range';
        }
    });

    return response
};

export default common