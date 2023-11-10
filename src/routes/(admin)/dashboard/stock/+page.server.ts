import type { Actions } from "./$types";

export const actions: Actions = {
    default: async () => {
        console.log("trigger")
    },
    addUser: async ({ request }) => {
        // Add user action implementation
    },
    getBrand: async ({ request }) => {
        // Get user action implementation
        const formData = await request.formData();
        const email = formData.get('email');
        console.log(email)

        return { success: true };
    },
};