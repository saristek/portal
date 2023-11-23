import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { RequestEvent, ResolveOptions } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';
import { Themes } from '$lib/theme';

// we're not using the event parameter is this example,
// hence the eslint-disable rule
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createContext(event: RequestEvent) {

    // theme configuration
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

    // supabase configuration
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event
    });
    event.locals.getSession = async () => {
        const {
            data: { session }
        } = await event.locals.supabase.auth.getSession();
        return session;
    };

    return {
        // context information
    };
}

export type Context = inferAsyncReturnType<typeof createContext>;
