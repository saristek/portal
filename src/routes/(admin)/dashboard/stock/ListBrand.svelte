<script lang="ts">
	import { client } from '$lib/hook/supabase';
	import { onMount } from 'svelte';

	export let target: string;
	const getDataCommon = async () => {
		const { data, error } = await client.from(target).select();

		if (error) throw new Error(error.message);

		return data;
	};

	const getDataItem = async () => {
		const { data, error } = await client.from(target).select(`
			id,
			items_type(id, name),
			items_brand(id, name),
			codename,
			family,
			details_model,
			details_series,
			details_more
		`);

		if (error) throw new Error(error.message);

		console.log(data);
		return data;
	};
	let promise = target == 'items_electronics' ? getDataItem() : getDataCommon();
</script>

{#await promise}
	<p>loading...</p>
{:then items}
	{#if target == 'items_electronics'}
		<div class="overflow-x">
			<table class="table-auto overflow-scroll w-full">
				<thead>
					<tr class="bg-gray-100 font-semibold">
						<th class="p-2">No.</th>
						<th class="p-2">Jenis Barang</th>
						<th class="p-2">Nama Merek</th>
						<th class="p-2">Codename</th>
						<th class="p-2">Family</th>
						<th class="p-2">Detail Model</th>
						<th class="p-2">Detail Seri</th>
						<th class="p-2">Detail Lainnya</th>
					</tr>
				</thead>
				<tbody>
					{#each items as item}
						<tr class="mb-2 bg-red-400/20 hover:bg-red-400/50">
							<td class="text-left pl-2">{item.id}.</td>
							<td>{item.items_type.name}</td>
							<td>{item.items_brand.name}</td>
							<td>{item.codename}</td>
							<td>{item.family}</td>
							<td>{item.details_model}</td>
							<td>{item.details_series}</td>
							<td>{item.details_more}</td>
							<td />
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else}
		<ul class="flex flex-col w-full text-left px-2">
			{#each items as item}
				<li class="mb-2 pl-2 bg-red-400/20 hover:bg-red-400/50">{item.name}</li>
			{/each}
		</ul>
	{/if}
{:catch error}
	<p>Something went wrong while fetching</p>
	<br />
	<code class="p-2 bg-gray-800 text-white">{error}</code>
{/await}
