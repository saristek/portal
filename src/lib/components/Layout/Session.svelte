<script lang="ts">
	export let title: string, description: string;
</script>

<div class="w-full flex flex-col justify-center items-stretch mx-auto max-w-md">
	<div id="logo" class="uppercase font-semibold mt-20 mb-10">
		<h1 class="text-4xl">{title}</h1>
		<p class="text-xl">{description}</p>
	</div>
	<div class="text-left">
		<slot />
	</div>
</div>
