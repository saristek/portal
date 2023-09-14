<script lang="ts">
	import '../app.css';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header';
	import Navbar from '$lib/components/Navbar';
	import Layout from '$lib/components/Layout.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$page.data.title ?? 'Portal Sransa | by Saristek'}</title>
</svelte:head>

<Layout>
	<Header />
	{#key data.currentPath}
		<main
			class="flex-1 grid w-auto"
			in:fly={{ y: -30, duration: 200, delay: 150 }}
			out:fly={{ y: -30, duration: 150 }}
		>
			<slot />
		</main>
	{/key}
	<Navbar />
</Layout>
