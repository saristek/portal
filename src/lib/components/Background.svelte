<script>
	import grid from '$lib/assets/grid.svg';
	import { toImageUrl } from '$lib/utils';
	import { base } from '$app/paths';
</script>

<img
	src={`./assets/beams.jpg`}
	alt=""
	class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
	width="1308"
/>
<div
	style="background-image: {toImageUrl(grid)}"
	class="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
/>
