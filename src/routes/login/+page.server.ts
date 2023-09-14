export async function load() {
    return {
        chap: {
            id: `$(chap-id)`,
            ch: `$(chap-challenge)`
        },
        link: {
            login: `$(link-login-only)`,
            orig: `$(link-orig)`,
            esc: `$(link-orig-esc)`
        },
        auth: {
            user: `$(username)`,
            pass: `$(password)`,
            mac: `$(mac-esc)`
        },
        opt: {
            error: `$(error)`,
            trial: `$(trial)`,
            // isPop: true
        }
    }
}
