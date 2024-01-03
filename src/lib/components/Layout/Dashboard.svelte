<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="overflow-hidden flex h-screen">
	<aside class="w-[30%] overflow-y-auto bg-red-400 sm:w-36 flex flex-col">
		<div class="mt-2 p-2">Saristek</div>
		<div class="flex-wrap flex-1 flex flex-col items-stretch justify-between">
			<ul class="flex flex-col p-2 text-left space-y-1">
				<a class="bg-red-500 hover:bg-red-600 p-2 rounded-md" href="/dashboard/sync">Sinkron</a>
				<a class="bg-red-500 hover:bg-red-600 p-2 rounded-md" href="/dashboard/inventaris">Inventaris</a>
				<!-- <a class="bg-red-500 hover:bg-red-600 p-2 rounded-md" href="/dashboard/siswa">Siswa</a> -->
				<!-- <a class="bg-red-500 hover:bg-red-600 p-2 rounded-md" href="/dashboard/tu">TU</a> -->
				<!-- <a class="bg-red-500 hover:bg-red-600 p-2 rounded-md" href="/dashboard/stock">Stock</a> -->
				<!-- <a class="bg-red-500 hover:bg-red-600 p-2 rounded-md" href="/dashboard/schedule">Schedule</a> -->
			</ul>
			<div class="p-2 flex">
				<a class="w-full bg-red-500 hover:bg-red-600 p-2 rounded-md" href="/?logout">Logout</a>
			</div>
		</div>
	</aside>
	<main class="w-[70%] sm:flex-1 bg-gray-200">
		<slot />
	</main>
</div>
