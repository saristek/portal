<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	const { employee } = data;
</script>

<div class="h-full flex flex-col">
	<div id="head_main" class="h-10 flex font-semibold justify-between items-stretch bg-gray-300">
		<button class="bg-blue-300 px-2" on:click|preventDefault={() => goto('/dashboard/sync')}
			>« kembali</button
		>
		<span class="p-2">Data Ke-Pegawaian</span>
	</div>
	<div class="flex-1 flex pt-2">
		<div class="w-[75%]">
			<table class="">
				<thead>
					<tr>
						<th>No</th>
						<th>Nama</th>
						<th>TTL</th>
						<th>Alamat</th>
						<th>JK</th>
						<th>Jabatan</th>
						<th>Email</th>
						<th>Password</th>
						<th>Telepon</th>
					</tr>
				</thead>
				<tbody>
					{#each employee as item, id}
						<tr>
							<td>{id + 1}</td>
							<td>{item.name}</td>
							<td>{item.born}, {item.birth}</td>
							<td>{item.domicile}</td>
							<td>{item.gender}</td>
							<td>{item.email}</td>
							<td>{item.password}</td>
							<td>{item.phone}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<div class="w-[25%] flex flex-col p-2">
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
	</div>
</div>
