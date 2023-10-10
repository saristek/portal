<script>
	import Header from './Header';
	import Navbar from './Navbar';

	// import Background from './Background.svelte';
</script>

<!-- class="relative flex min-h-screen flex-col justify-around overflow-hidden bg-gray-50 py-6 sm:py-12" -->
<!-- min-h-screen flex flex-col justify-between -->
<div class="relative h-screen mx-auto max-w-3xl">
	<!-- <Background /> -->
	<div class="absolute inset-0 flex flex-col md:my-4 md:my-0">
		<Header />
		<slot />
		<Navbar />
	</div>
</div>
