<script lang="ts">
	import PageCenter from '$lib/components/Layout/PageCenter.svelte';
	import Hotspot from '$lib/components/Home/Hotspot.svelte';
	import { goto } from '$app/navigation';
	export let data;
</script>

<!-- bg-red-200 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-2 rounded-lg sm:rounded-xl sm:px-10 -->
<PageCenter>
	<div class="mx-auto max-w-md">
		{#if data.clientSession?.user}
			<Hotspot />
		{:else}
			<h1>maaf anda belum login</h1>
			<button class="bg-gray-800 text-white rounded p-4" on:click={() => goto('/login')}
				>Login</button
			>
		{/if}
	</div>
</PageCenter>
