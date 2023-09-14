<script>
	export let data;
</script>

<section class="container m-auto">
	<div class="flex flex-wrap justify-center">
		<ul>
			{#each data.countries as country}
				<li>{country.name}</li>
			{/each}
		</ul>
		<!-- <h1 class="pt-10 text-5xl text-center">Pengaturan</h1> -->
	</div>
</section>
