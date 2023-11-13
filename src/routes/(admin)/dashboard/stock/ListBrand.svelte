<script lang="ts">
	import { client } from '$lib/hook/supabase';

	const getData = async () => {
		const { data, error } = await client.from('items_brand').select();

		if (error) throw new Error(error.message);

		console.log(data);
		return data;
	};
</script>

{#await getData()}
	<p>trying to fetch data from server</p>
{:then items}
	<ul class="flex flex-col w-full text-left px-2">
		{#each items as item}
			<li>{item.name}</li>
		{/each}
	</ul>
{:catch error}
	<p>Something went wrong while fetching</p>
    <br/>
	<code class="p-2 bg-gray-800 text-white">{error}</code>
{/await}
