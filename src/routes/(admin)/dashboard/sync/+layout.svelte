<script lang="ts">
	import { page } from '$app/stores';
	import { afterNavigate, goto } from '$app/navigation';

	const { pathname } = $page.url;

	let previousPage = '';

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
		console.log(previousPage);
	});
</script>

<div class="h-full flex flex-col justify-between overflow-y-auto">
	<div id="head_main" class="h-10 flex font-semibold justify-between items-stretch bg-gray-300">
		<button class="bg-blue-300 px-2" on:click|preventDefault={() => goto(previousPage)}
			>« kembali</button
		>
		<span class="p-2">{$page.data.infoPage.title}</span>
	</div>
	<slot />
</div>
