<script lang="ts">
	import { storeClient } from '$trpc';

	let welcome = storeClient.welcomeSleep.query.$many();

	setTimeout(function () {
		$welcome.call('Yusaf');
	}, 1000);
	setTimeout(function () {
		$welcome.call('Error Name');
	}, 5000);
	setTimeout(function () {
		$welcome.call('Derrick');
	}, 10000);
</script>

{#if $welcome.loading}
	Loading...
{:else if $welcome.error}
	{$welcome.error.message}
{:else if $welcome.success}
	{$welcome.data}
{/if}
