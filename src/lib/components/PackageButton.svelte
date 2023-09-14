<script lang="ts">
	import type { ChangeEventHandler, EventHandler, MouseEventHandler } from 'svelte/elements';
	import IconArrowRight from './Svg/IconArrowRight.svelte';
	import type { PackageMenu } from './menu';
	export let options: typeof PackageMenu;
	export let userSelected = options[0].value;
	const slugify = (str = '') => str.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
</script>

<div role="radiogroup" class="group-container">
	<ul class="grid gap-2 md:grid-cols-2 content-stretch">
		{#each options as { value, label }}
			<li>
				<input
					bind:group={userSelected}
					{value}
					type="radio"
					id={label}
					name="type_user"
					class="hidden peer sr-only"
				/>
				<label
					for={label}
					class="inline-flex items-center justify-between h-full w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
				>
					<div class="block">
						<div class="w-full text-lg font-semibold">{value}</div>
						<div class="w-full">{label}</div>
					</div>
					<IconArrowRight />
				</label>
			</li>
		{/each}
	</ul>
</div>
