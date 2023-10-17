// server-only
// src/routes/+layout.server.ts
// handle the session on the server-side
export const load = async ({ locals: { getSession } }) => {
    return {
        session: await getSession(),
    }
}