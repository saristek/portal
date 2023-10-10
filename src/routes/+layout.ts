// junk code... -_-
// const hotspot = process.env.BUILD_ENV == 'HOTSPOT'
// type IPre = boolean | "auto"
// let isPreRendered: IPre = "auto"
// let isSSR = false
// if (hotspot) {
// 	isPreRendered = true; // enable ssg
// }

export const prerender = true
// export const ssr = false; // disable ssr
// export const csr = false; // disable spa

// comment this if you want place build/* to root "/"
// export const trailingSlash = 'always';

export async function load({ url }) {
	return {
		currentPath: url.pathname
	};
}
