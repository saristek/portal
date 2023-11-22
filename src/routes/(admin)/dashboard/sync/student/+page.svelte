<script>
	import { goto } from '$app/navigation';
</script>

<div class="h-full flex flex-col">
	<div id="head_main" class="h-10 flex font-semibold mb-4 justify-between items-stretch">
		<button class="bg-blue-300 px-2" on:click|preventDefault={() => goto('/dashboard/sync')}
			>« kembali</button
		>
		<span class="p-2">Data Ke-Pegawaian</span>
	</div>
	<div class="flex">
		<div class="w-[80%]" />
		<div class="w-[20%] flex flex-col p-2">
			<div id="head_menu" class="mb-4 text-left">menu</div>
			<div class="flex-1 flex flex-col pl-1">
				<button
					on:click={() => goto('/dashboard/sync/employee')}
					type="button"
					class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
					>Atur Jenis Pegawai</button
				>
                <button
					on:click={() => goto('/dashboard/sync/employee')}
					type="button"
					class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
					>Atur Jenis Pegawai</button
				>
			</div>
		</div>
	</div>
</div>
