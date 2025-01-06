<script lang="ts">
	import type { PageData } from './$types';

	// Deklarasikan properti PageData untuk mendapatkan data dari load function
	export let data: PageData;

	// Deklarasikan variabel untuk data dan error
	let apiData = data.result;
	let error = data.error;
</script>

{#if error}
	<p>Error fetching data: {error}</p>
{:else if apiData}
	<table class="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
		<thead class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th scope="col" class="rounded-s-lg px-6 py-3"> NIS </th>
				<th scope="col" class="px-6 py-3"> NAME </th>
				<th scope="col" class="px-6 py-3"> CLASS </th>
				<th scope="col" class="rounded-e-lg px-6 py-3"> GENDER </th>
			</tr>
		</thead>
		<tbody>
			{#each apiData as item}
				<tr class="bg-white dark:bg-gray-800">
					<th
						scope="row"
						class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
					>
						{item.nis}
					</th>
					<td class="px-6 py-4">{item.fullname}</td>
					<td class="px-6 py-4">{item.class}</td>
					<td>{item.gender ? 'Male' : 'Female'}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	<p>Loading...</p>
{/if}
