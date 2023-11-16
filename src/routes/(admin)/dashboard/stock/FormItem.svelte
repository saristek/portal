<script lang="ts">
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';

	let from:HTMLFormElement;
	const dispatch = createEventDispatcher<{ edit: { id: string } }>();

	export let clearItem: () => void;
	export let isEdit: boolean;



</script>

<form
	bind:this={from}
	class="flex flex-col w-full"
	action="/dashboard/stock/?/getBrand"
	method="POST"
	use:enhance
>
	<div class="flex text-left justify-between">
		<div class="flex flex-col">
			<label for="item_type" class="text-sm pr-2">jenis barang</label>
			<input name="item_type" />
			<label for="item_brand" class="text-sm pr-2">nama brand</label>
			<input name="item_brand" />
			<label for="codename" class="text-sm pr-2">codename</label>
			<input name="codename" />
			<label for="family" class="text-sm pr-2">family</label>
			<input name="family" />
		</div>
		<fieldset class="ml-2 flex-1 border border-solid border-gray-600 p-3">
			<legend class="text-sm pr-2"> details </legend>
			<div class="flex flex-col pl-2">
				<label for="detail_model" class="text-sm pr-2">model</label>
				<input name="detail_model" />
				<label for="detail_series" class="text-sm pr-2">series</label>
				<input name="detail_series" />
				<label for="detail_more" class="text-sm pr-2">more</label>
				<input name="detail_more" />
			</div>
		</fieldset>
	</div>
	<div class="flex space-x-2">
		<button
		on:click|preventDefault={()=>console.log(from.nodeValue)}
			type="submit"
			class="{isEdit ? 'w-[80%]' : 'w-full'} p-2 bg-red-400 mt-2 hover:bg-red-500/80"
			>{isEdit ? 'Perbarui' : 'Tambah'} Barang</button
		>
		{#if isEdit}
			<button
				type="submit"
				class="w-[20%] p-2 bg-gray-400 mt-2 text-gray-200 hover:bg-gray-500/80"
				on:click|preventDefault={() => clearItem()}>Bersihkan</button
			>
		{/if}
	</div>
</form>
