// src/routes/+layout.server.ts
// server-only
export const load = async ({ locals: { getSession } }) => {
    return {
        session: await getSession(),
    }
}