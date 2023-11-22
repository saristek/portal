<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
</script>

<div class="h-full flex flex-col justify-between overflow-y-auto">
	<div id="head_main" class="h-10 flex font-semibold justify-between items-stretch bg-gray-300">
		<button class="bg-blue-300 px-2" on:click|preventDefault={() => goto('/dashboard/sync')}
			>« kembali</button
		>
		<span class="p-2">{$page.data.infoPage.title}</span>
	</div>
	<slot />
</div>
