// server-only
// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types'

// handle the session on the server-side
export const load: LayoutServerLoad = async ({ locals: { theme, getSession } }) => {

    return {
        theme,
        session: await getSession(),
    }
}