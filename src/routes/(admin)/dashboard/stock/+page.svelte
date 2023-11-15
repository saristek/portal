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

	$: target = whatTarget(isActive);
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
	<div class="flex-1 flex p-2">
		<div class="flex-1 flex flex-col justify-between p-2 overflow-y-scroll w-full">
			<ul>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
				<li>sdfsdf</li>
			</ul>
			<!-- <fieldset class="border border-solid border-gray-600 flex flex-col w-full p-2 bg-red-300">
			<legend class="font-bold bg-red-300 px-2 text-left">daftar {isActive}</legend>
			{#if isActive == 'tipe'}
				<ListBrand target="items_type" />
			{:else if isActive == 'brand'}
				<ListBrand target="items_brand" />
			{:else if isActive == 'item'}
				<ListBrand target="items_electronics" />
			{/if}
		</fieldset> -->
		</div>
	</div>
</div>
