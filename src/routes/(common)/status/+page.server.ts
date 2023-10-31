export async function load() {
	return {
		title: 'Hotspot Terhubung',
		system: {
			ip: `$(ip)`,
			byteIn: `$(bytes-in-nice)`,
			byteOut: `$(bytes-out-nice)`,
			uptime: `$(uptime)`,
			session: `$(session-time-left)`
		},
		chap: {
			id: `$(chap-id)`,
			ch: `$(chap-challenge)`
		},
		link: {
			login: `$(link-login-only)`,
			orig: `$(link-orig)`,
			esc: `$(link-orig-esc)`,
			logout: `$(link-logout)`,
			advert: `$(link-advert)`
		},
		auth: {
			user: `$(username)`,
			pass: `$(password)`,
			mac: `$(mac-esc)`,
			byMac: `$(login-by-mac)`
		},
		opt: {
			error: `$(error)`,
			trial: `$(trial)`,
			by: `$(login-by)`,
			// isPop: true,
			blocked: `$(blocked)`,
			timeout: `$(refresh-timeout)`
		}
	};
}
