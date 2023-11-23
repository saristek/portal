import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const base = {
        title: 'Data Ke-Pegawaian'
    };

    return {
        infoPage: base,
    }
};