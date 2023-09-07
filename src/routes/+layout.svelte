<script lang="ts">
	import '../app.css';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import BottomBar from '$lib/components/BottomBar';
	import Layout from '$lib/components/Layout.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$page.data.title ?? 'Saristek'}</title>
</svelte:head>

<Layout>
	<Navbar />
	{#key data.currentPath}
		<div class="flex-1 h-full w-auto flex flex-col justify-center items-center" in:fly={{ y: -30, duration: 200, delay: 150 }} out:fly={{ y: -30, duration: 150 }}>
			<slot />
		</div>
	{/key}
	<BottomBar />
</Layout>
