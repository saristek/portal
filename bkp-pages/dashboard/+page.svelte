<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container mx-auto w-fit">
	<ul>
		{#each data.response as item}
			<div class="mb-2 bg-red-300 rounded-lg p-10">
				<li>for: {item.interface}</li>
				<div class="ml-2">
					<li>ip: {item.address}</li>
					<li>net: {item.network}</li>
				</div>
			</div>
		{/each}
	</ul>
</div>
