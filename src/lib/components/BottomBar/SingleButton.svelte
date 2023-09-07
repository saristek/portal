<script lang="ts">
	import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';
	import type { IconHome, IconPencarian, IconPengaturan, IconTambah, IconBookmark } from '../Svg';

	type IconProps = IconHome | IconPencarian | IconPengaturan | IconTambah | IconBookmark;
	let icon: ComponentType<IconProps>;
	let to: string;
	export { icon, to };
</script>

<a
	href={to}
	data-tooltip-target="tooltip-home"
	type="button"
	class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
>
	<svelte:component this={icon} />
	<span class="sr-only">
		<slot />
	</span>
</a>
