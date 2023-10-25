<script>
	let title = 'tanpa judul';
	let tsplit = title.split(' ');
	export { title };
</script>

<div id="wrapper" class="bg-gray-900 p-10 ring-0 shadow-md rounded-md">
	<div class="h-full flex flex-col justify-between">
		<div id="title" class="mb-4">
			<h1 class="text-md sm:text-xl text-white">{tsplit[0]}</h1>
			<h1 class="text-4xl sm:text-6xl text-white">{tsplit[1]}</h1>
		</div>
		<div class="mt-4 flex gap-2 justify-center sm:justify-end">
			<slot><p class="text-white">kosong</p></slot>
		</div>
	</div>
</div>
