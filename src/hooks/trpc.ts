import { handleHook } from "$trpc/hooks";
import type { Handle } from "@sveltejs/kit";

const trpc: Handle = async ({ event, resolve }) => {
    const TRPCResponse = await handleHook(event);
    if (TRPCResponse) {
        return TRPCResponse;
    }

    const response = await resolve(event);
    return response;
}

export default trpc