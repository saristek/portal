<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let target: number;

	$: dir = $page.url.pathname.split('/');
	$: if (dir.length > 3) target = dir.length - 1;

	$: back = dir.slice(0, target);
</script>

<div class="h-full flex flex-col justify-between overflow-y-auto">
	<div
		id="head_main"
		class="h-10 flex font-semibold {dir[3]
			? 'justify-between'
			: 'justify-end'} items-stretch bg-gray-300"
	>
		{#if dir[3]}
			<button class="bg-blue-300 px-2" on:click|preventDefault={() => goto(back.join('/'))}
				>« kembali</button
			>
		{/if}
		<span class="p-2">{$page.data.infoPage.title}</span>
	</div>
	<slot />
</div>
