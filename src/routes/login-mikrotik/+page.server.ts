export async function load() {
	return {
		title: 'Login',
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
			linkTrial: `$(link-login-only)?dst=$(link-orig-esc)&amp;username=T-$(mac-esc)`,
			error: `$(error)`,
			trial: `$(trial)`
			// isPop: true
		}
	};
}
