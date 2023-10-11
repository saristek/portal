import { supabase } from "$lib/supabase/client";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
    const base = {
        title: "LPD | Layanan Portal Digital"
    }

    return {
        ...base,
    }
}
