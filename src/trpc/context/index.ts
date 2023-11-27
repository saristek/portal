import type { RequestEvent } from "@sveltejs/kit"

export const context = async (event: RequestEvent) => ({
    welcome: 'Hello and welcome!',
    cookies: event.cookies
})