<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	let expandTable = false;
	let hideMenu = false;
	let loading = false;

	const { employee } = data;
</script>

<div class="flex-1 flex sm:flex-row flex-col p-2">
	<div class="{hideMenu ? 'w-full' : 'w-[80%]'} flex flex-col">
		<div class="mb-2 mr-2 flex justify-between">
			<h2 class="p-2 text-center sm:text-left">daftar jenis pegawai</h2>
			<div class="flex justify-between space-x-2">
				<button
					on:click|preventDefault={() => (expandTable = !expandTable)}
					class="p-2 bg-red-300 rounded">{expandTable ? 'minimalkan' : 'lihat semua'}</button
				>
				<button
					on:click|preventDefault={() => (hideMenu = !hideMenu)}
					class="p-2 bg-blue-300 rounded"
					>{hideMenu ? '« tampilkan menu' : 'sembunyikan menu »'}</button
				>
			</div>
		</div>
		<div class="flex-1 bg-gray-200 px-2 overflow-hidden">
			<div class="h-full overflow-y-auto">
				<div id="data" class="min-h-fit max-h-32">
					{#if loading}
						<p class="text-blue-600">loading: coba mengunduh data</p>
					{:else if employee.length == 0}
						<p class="text-red-600">mohon maaf: tidak ada data yang bisa ditampilkan</p>
						<p class="mt-4">silahkan buat data baru atau hubungi operator</p>
					{:else}
						<table
							class="border-collapse border border-slate-400 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-gray-100"
						>
							<thead
								class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
							>
								<tr>
									<th scope="col" class="w-10 px-2 py-3 text-center">aksi</th>
									<th scope="col" class="px-2 py-3 text-center">Nama</th>
									<th scope="col" class="px-2 py-3 text-center">TTL</th>
									<th scope="col" class="px-2 py-3 text-center">Alamat</th>
									<th scope="col" class="px-2 py-3 text-center">Jabatan</th>
									<th scope="col" class="px-2 py-3 text-center">Telepon</th>
									{#if expandTable}
										<th scope="col" class="px-2 py-3 text-center">JK</th>
										<th scope="col" class="px-2 py-3 text-center">Email</th>
										<th scope="col" class="px-2 py-3 text-center">Password</th>
									{/if}
								</tr>
							</thead>
							<tbody>
								{#each employee as item}
									<tr>
										<td class="px-2 py-3 text-center font-light text-xs flex space-x-1">
											<button
												id={item.id}
												on:click|preventDefault={() => {}}
												class="bg-red-300 hover:bg-red-400 p-1 rounded text-white">hapus</button
											>
											<button
												id={item.id}
												on:click|preventDefault={() => {}}
												class="bg-blue-300 hover:bg-blue-400 p-1 rounded text-white">edit</button
											>
										</td>
										<td class="px-2 py-2">{item.name}</td>
										<td class="px-2 py-2">{item.born}, {item.birth}</td>
										<td class="px-2 py-2">{item.domicile}</td>
										<td class="px-2 py-2 text-center">{item.status}</td>
										<td class="px-2 py-2 text-center">{item.phone}</td>
										{#if expandTable}
											<td class="px-2 py-2 text-center">{item.gender}</td>
											<td class="px-2 py-2 text-end">{item.email}</td>
											<td class="px-2 py-2 text-center">{item.password}</td>
										{/if}
									</tr>
								{/each}
							</tbody>
						</table>
					{/if}
				</div>
			</div>
		</div>
	</div>
	{#if !hideMenu}
		<div class="w-[20%] flex flex-col p-2">
			<div class="flex-1 flex flex-col pl-1">
				<div id="head_menu" class="mb-2 text-left">aksi</div>
				<button
					on:click|preventDefault={() => goto('/dashboard/sync/employee/type')}
					type="button"
					class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
					>Atur Jenis Pegawai</button
				>
				<button
					on:click|preventDefault={() => goto('/dashboard/sync/employee/add')}
					type="button"
					class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
					>Tambah Pegawai</button
				>
			</div>
			<div class="flex flex-col">
				<div id="head_menu" class="mb-2 text-left">sinkron dengan excel</div>
				<button
					type="button"
					class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
					>Unduh Template</button
				>
				<button
					type="button"
					class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
					>Upload Excel</button
				>
			</div>
		</div>
	{/if}
</div>
