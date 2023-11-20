<script>
	import { page } from '$app/stores';

	import Dashboard from '$lib/components/Layout/Dashboard.svelte';
</script>

<svelte:head>
	<title>{$page.data.title ?? 'Portal Sransa | by Saristek'}</title>
</svelte:head>
<Dashboard>
	<slot />
</Dashboard>
