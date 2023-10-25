<script>
	import Card from '$lib/components/bookmark/Card.svelte';
</script>

<!-- p-4 sm:p-8 -->
<section class="container m-auto max-w-3xl">
	<div class="grid sm:grid-cols-2 gap-2 place-content-center justify-items-stretch mx-2 sm:m-8">
		<Card title="Portal LMS">
			<a href="https://lms.smpsransa.sch.id" class="p-4 bg-blue-200 rounded-md hover:bg-blue-300"
				>Dashboard</a
			>
			<a
				href="https://lms.smpsransa.sch.id/login/index.php"
				class="p-4 bg-red-200 rounded-md hover:bg-red-300">Login</a
			>
		</Card>
		<Card title="Portal Pustaka">
			<a href="https://lib.smpsransa.sch.id/" class="p-4 bg-blue-200 rounded-md hover:bg-blue-300"
				>Kunjungi</a
			>
		</Card>
		<Card title="Drive Sransa">
			<a href="https://drive.smpsransa.sch.id/" class="p-4 bg-blue-200 rounded-md hover:bg-blue-300"
				>Kunjungi</a
			>
		</Card>
	</div>
</section>
