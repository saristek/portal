export const prerender = true;
// export const ssr = false;
// export const trailingSlash = 'always';

export async function load({ url }) {
	return {
		currentPath: url.pathname
	};
}
