<script lang="ts">
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	const dispatch = createEventDispatcher<{ edit: { id: string } }>();

	export let detail: any;
	export let clearSelect: () => void;
	export let isEdit: boolean;

	let item_type: string,
		item_brand: string,
		codename: string = detail.codename ?? '',
		family: string = detail.family ?? '',
		detail_model: string = detail.detail_model ?? '',
		detail_series: string = detail.detail_series ?? '',
		detail_more: string = detail.detail_more ?? '';

	const clearForm: MouseEventHandler<HTMLButtonElement> = () => {
		clearSelect();
		item_type = '';
		item_brand = '';
		codename = '';
		family = '';
		detail_model = '';
		detail_series = '';
		detail_more = '';
	};

	// $: inputdata = detail
	$: startCreate =
		item_type || item_brand || codename || family || detail_model || detail_series || detail_more
			? true
			: false;

	$: console.log(detail);
</script>

<form class="flex flex-col w-full" action="/dashboard/stock/?/getBrand" method="POST" use:enhance>
	<div class="flex text-left justify-between">
		<div class="flex flex-col">
			<label for="item_type" class="text-sm pr-2">jenis barang</label>
			<input class="p-1" name="item_type" bind:value={item_type} type="text" />
			<label for="item_brand" class="text-sm pr-2">nama brand</label>
			<input class="p-1" name="item_brand" bind:value={item_brand} />
			<label for="codename" class="text-sm pr-2">codename</label>
			<input class="p-1" name="codename" bind:value={codename} />
			<label for="family" class="text-sm pr-2">family</label>
			<input class="p-1" name="family" bind:value={family} />
		</div>
		<fieldset class="ml-2 flex-1 border border-solid border-gray-600 p-3">
			<legend class="text-sm pr-2"> details </legend>
			<div class="flex flex-col pl-2">
				<label for="detail_model" class="text-sm pr-2">model</label>
				<input class="p-1" name="detail_model" bind:value={detail_model} />
				<label for="detail_series" class="text-sm pr-2">series</label>
				<input class="p-1" name="detail_series" bind:value={detail_series} />
				<label for="detail_more" class="text-sm pr-2">more</label>
				<input class="p-1" name="detail_more" bind:value={detail_more} />
			</div>
		</fieldset>
	</div>
	<div class="flex space-x-2">
		<button
			on:click|preventDefault={() => console.log('')}
			type="submit"
			class="{isEdit ? 'w-[80%]' : 'w-full'} p-2 bg-red-400 mt-2 hover:bg-red-500/80"
			>{isEdit ? 'Perbarui' : 'Tambah'} Barang</button
		>
		{#if isEdit || startCreate}
			<button
				type="submit"
				class="w-[20%] p-2 bg-gray-400 mt-2 text-gray-200 hover:bg-gray-500/80"
				on:click|preventDefault={clearForm}>Bersihkan</button
			>
		{/if}
	</div>
</form>
