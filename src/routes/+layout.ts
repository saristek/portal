export const prerender = true; // enable ssg

// export const ssr = false; // disable ssr
// export const csr = false; // disable spa

// comment this if you want place build/* to root "/"
// export const trailingSlash = 'always';

export async function load({ url }) {
	return {
		currentPath: url.pathname
	};
}
