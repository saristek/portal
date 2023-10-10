import { mikrotik } from '$lib/utils/mikrotik'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
    const [response, error] = await mikrotik("/ip/address/print")
    console.log(response)
    return {
        response,
    }
}