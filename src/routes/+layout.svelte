<script lang="ts">
	import '../app.postcss';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Layout from '$lib/components/Layout.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$page.data.title ?? 'Portal Sransa | by Saristek'}</title>
</svelte:head>

<Layout>
	{#key data.currentPath}
		<main
			class="flex-1 grid w-auto"
			in:fly={{ y: -30, duration: 200, delay: 150 }}
			out:fly={{ y: -30, duration: 150 }}
		>
			<slot />
		</main>
	{/key}
</Layout>
