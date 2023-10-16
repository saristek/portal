<script lang="ts">
	import '../app.postcss';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Layout from '$lib/components/Layout.svelte';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	export let data;
	
	const { supabase, session } = data
	// $: ({ supabase, session } = data)


	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})

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
