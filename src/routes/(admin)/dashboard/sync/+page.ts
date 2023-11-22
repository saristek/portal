import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const base = {
        title: 'Zona Singkronasi'
    };

    return {
        infoPage: base
    }
};