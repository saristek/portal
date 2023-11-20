<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Common from '$lib/components/Layout/Common.svelte';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
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

<Common>
	{#key data.currentPath}
		<main
			class="flex-1 grid w-auto bg-gray-100 dark:bg-gray-800 overflow-y-scroll"
			in:fly={{ x: -30, duration: 200, delay: 150 }}
			out:fly={{ x: -30, duration: 150 }}
		>
			<slot />
		</main>
	{/key}
</Common>
