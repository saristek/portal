<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	import FormType from './FormType.svelte';
	import FormBrand from './FormBrand.svelte';
	import FormItem from './FormItem.svelte';
	import ListBrand from './ListBrand.svelte';

	export let data: PageData;
	export let form: ActionData;

	let isActive = 'item';
</script>

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
		<legend class="font-bold bg-red-300 px-2 text-left">form tambah {isActive}</legend>
		{#if isActive == 'tipe'}
			<FormType />
		{:else if isActive == 'brand'}
			<FormBrand />
		{:else if isActive == 'item'}
			<FormItem />
		{/if}
	</fieldset>
</div>
<div class="flex justify-stretch p-2">
	<fieldset class="border border-solid border-gray-600 flex flex-col w-full p-2 bg-red-300">
		<legend class="font-bold bg-red-300 px-2 text-left">daftar {isActive}</legend>
		<ListBrand />
	</fieldset>
</div>
