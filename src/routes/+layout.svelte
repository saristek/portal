<script lang="ts">
	import '../app.postcss';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Layout from '$lib/components/Layout.svelte';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import Switch from '$lib/components/ThemeSwitch/Switch.svelte';
	import { browser } from '$app/environment';

	export let data;

	$: ({ supabaseClient, clientSession } = data);

	// if session is expired, deauth supabase
	onMount(() => {
		const { data } = supabaseClient.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== clientSession?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});

	// auto run on browser imediately
	if (browser) {
		// init localstorage
		localStorage.setItem('theme', $page.data.modeThemes);

		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<svelte:head>
	<title>{$page.data.title ?? 'Portal Sransa | by Saristek'}</title>
</svelte:head>

<Layout>
	{#key data.currentPath}
		<main
			class="flex-1 grid w-auto bg-gray-100 overflow-y-scroll"
			in:fly={{ x: -30, duration: 200, delay: 150 }}
			out:fly={{ x: -30, duration: 150 }}
		>
			<slot />
		</main>
	{/key}
</Layout>
