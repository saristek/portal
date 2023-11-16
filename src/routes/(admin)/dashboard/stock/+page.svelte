<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	import FormType from './FormType.svelte';
	import FormBrand from './FormBrand.svelte';
	import FormItem from './FormItem.svelte';
	import ListBrand, { type Params } from './ListBrand.svelte';

	// export let data: PageData;
	// export let form: ActionData;

	let isActive = 'item';
	let isEdit = false;

	const whatTarget = (active: string) => {
		switch (active) {
			case 'brand':
				return 'items_brand';
			case 'item':
				return 'items_electronics';
			default:
				return 'items_type';
		}
	};

	const actionSelect = (e: CustomEvent<Params>) => {
		isEdit = true;
		alert(e.detail.selectedID);
	};

	$: target = whatTarget(isActive);

	$: console.log(isEdit);
</script>

<div class="h-full flex flex-col">
	<div class="flex justify-stretch p-2">
		<fieldset class="border border-solid border-gray-600 flex w-full p-2 bg-gray-300">
			<legend class="font-bold text-left px-2 bg-gray-300">Atur</legend>
			<button class="p-2 bg-red-200 hover:bg-red-300 w-full" on:click={() => (isActive = 'tipe')}
				>Tipe</button
			>
			<button class="p-2 bg-red-200 hover:bg-red-300 w-full" on:click={() => (isActive = 'brand')}
				>Brand</button
			>
			<button class="p-2 bg-red-200 hover:bg-red-300 w-full" on:click={() => (isActive = 'item')}
				>Item</button
			>
		</fieldset>
	</div>
	<div class="flex justify-stretch p-2">
		<fieldset class="border border-solid border-gray-600 flex flex-col w-full p-2 bg-red-300">
			<legend class="font-bold bg-red-300 px-2 text-left"
				>form {isEdit ? 'atur' : 'tambah'} {isActive}</legend
			>
			{#if isActive == 'tipe'}
				<FormType />
			{:else if isActive == 'brand'}
				<FormBrand />
			{:else if isActive == 'item'}
				<FormItem
					{isEdit}
					clearItem={() => {
						isEdit = false;
					}}
				/>
			{/if}
		</fieldset>
	</div>
	<div class="flex-1 flex p-2 overflow-hidden">
		<fieldset
			class="text-xs border border-solid border-gray-600 flex flex-col w-full p-2 bg-red-300"
		>
			<legend class="font-bold bg-red-300 px-2 text-left">daftar {isActive}</legend>
			{#if isActive == 'tipe'}
				<ListBrand target="items_type" />
			{:else if isActive == 'brand'}
				<ListBrand target="items_brand" />
			{:else if isActive == 'item'}
				<ListBrand target="items_electronics" on:actionSelect={actionSelect} />
			{/if}
		</fieldset>
	</div>
</div>
