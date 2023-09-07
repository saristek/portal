<script>
	import Background from './Background.svelte';
</script>

<!-- class="relative flex min-h-screen flex-col justify-around overflow-hidden bg-gray-50 py-6 sm:py-12" -->
<div
	class="min-h-screen flex flex-col justify-between"
>
	<!-- <Background /> -->
	<slot />
</div>
