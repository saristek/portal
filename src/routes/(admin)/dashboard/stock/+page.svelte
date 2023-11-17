<script lang="ts">
	import FormType from './FormType.svelte';
	import FormBrand from './FormBrand.svelte';
	import FormItem from './FormItem.svelte';
	import ListBrand, { type Params } from './ListBrand.svelte';

	// export let data: PageData;
	// export let form: ActionData;

	let isActive = '';
	let isEdit = false;
	let formHide = false;

	const actionSelect = (e: CustomEvent<Params>) => {
		isEdit = true;
		alert(e.detail.selectedID);
	};

	const actionMenu = (target: string) => {
		isActive = target;
		formHide = true;
	};

	$: console.log(isEdit);
</script>

<div class="h-full flex flex-col">
	<div class="flex justify-stretch p-2">
		<fieldset class="border border-solid border-gray-600 flex w-full p-2 bg-gray-300">
			<legend class="font-bold text-left px-2 bg-gray-300">Atur</legend>
			<button class="p-2 bg-red-200 hover:bg-red-300 w-full" on:click={() => actionMenu('tipe')}
				>Tipe</button
			>
			<button class="p-2 bg-red-200 hover:bg-red-300 w-full" on:click={() => actionMenu('brand')}
				>Brand</button
			>
			<button class="p-2 bg-red-200 hover:bg-red-300 w-full" on:click={() => actionMenu('item')}
				>Item</button
			>
		</fieldset>
	</div>
	<div class="flex justify-stretch p-2">
		<fieldset class="border border-solid border-gray-600 flex flex-col w-full p-2 bg-red-300">
			<legend class="font-bold bg-red-300 px-2 text-left"
				>form {isEdit ? 'atur' : 'tambah'} {isActive}</legend
			>
			{#if formHide}
				{#if isActive == 'tipe'}
					<FormType />
				{:else if isActive == 'brand'}
					<FormBrand />
				{:else if isActive == 'item'}
					<FormItem
						{isEdit}
						clearSelect={() => {
							isEdit = false;
						}}
					/>
				{/if}
			{/if}
			{#if isActive}
				<button
					class="mt-2 hover:bg-blue-400/80 bg-blue-300"
					on:click={() => (formHide = !formHide)}
				>
					{#if formHide}
						sembunyikan form
					{:else}
						tampilkan form
					{/if}
				</button>
			{/if}
		</fieldset>
	</div>
	<div class="flex-1 flex items-center p-2 overflow-hidden">
		{#if isActive}
			<fieldset
				class="h-full text-xs border border-solid border-gray-600 flex flex-col w-full p-2 bg-gray-300"
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
		{:else}
			<p class="w-full">silahkan pilih menu terlebih dahulu</p>
		{/if}
	</div>
</div>
