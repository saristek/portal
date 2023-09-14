<script>
	import Button from './Button.svelte';
	import { NavMenu } from '../menu';
</script>

<!-- lg:hidden  -->
<div
	class="sticky bottom-0 w-full bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
>
	<div class="grid h-full max-w-lg grid-cols-5 mx-auto">
		{#each NavMenu as menu}
			<Button to={menu.to} icon={menu.icon}>{menu.title}</Button>
		{/each}
	</div>
</div>
