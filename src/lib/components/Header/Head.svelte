<script lang="ts">
	import Switch from '../ThemeSwitch/Switch.svelte';
	import { HeadMenu, Social } from '../menu';
</script>

<!-- hidden md:block -->
<nav class="sticky top-0 bg-gradient-to-r from-green-200 to-blue-600 font-semibold">
	<div class="sm:container sm:mx-auto sm:flex sm:items-center sm:justify-between">
		<div class="flex justify-center">
			{#each Social as item}
				<a href={item.to}>
					<img
						src={item.icon}
						alt={item.title.toLowerCase()}
						class="w-8 m-1 p-2 hover:bg-red-200 rounded-lg"
					/>
				</a>
			{/each}
		</div>
		<div class="hidden sm:flex">
			<a href="/login" class="p-2 text-white hover:text-black hover:bg-red-200">"login"</a>
			<Switch/>
			<!-- {#each HeadMenu as item}
				<a href={base + item.to} class="p-2 text-white hover:text-black hover:bg-red-200"
					>{item.title}</a
				>
			{/each} -->
		</div>
	</div>
</nav>
