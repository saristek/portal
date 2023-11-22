<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { client } from '$lib/hook/supabase';
	import { onMount } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	let loading = true;
	let loadEdit = false;
	let selectId = '';

	let pegawai = {
		name: ''
	};

	type IData = {
		id: string;
		name: string;
	};

	let coba: IData[] = [
		{
			id: '',
			name: ''
		}
	];

	const hapusPegawai: MouseEventHandler<HTMLButtonElement> = async (ev) => {
		const id = ev.currentTarget.id;
		await client.from('employee_type').delete().match({ id: id });
	};

	const editPegawai: MouseEventHandler<HTMLButtonElement> = async (ev) => {
		loadEdit = true;
		selectId = ev.currentTarget.id;
		const { data } = await client.from('employee_type').select().eq('id', selectId).single();

		pegawai = {
			name: data.name
		};

		loadEdit = false;
	};

	$: isEdit = Object.values(pegawai).every((x) => x === null || x === '');

	onMount(async () => {
		loading = true;
		const { data } = await client.from('employee_type').select();
		coba = data as IData[];

		console.log(coba);
		loading = false;
	});
</script>

<div class="flex-1 flex sm:flex-row flex-col p-2">
	<div class="sm:order-2 w-full sm:w-[30%] flex flex-col">
		<h2 class="p-2 text-center sm:text-left">tambahkan jenis pegawai baru</h2>
		{#if loadEdit}
			<div class="h-full bg-gray-600 rounded p-2 flex justify-center items-center">
				<p class="text-white">sedang memuat edit</p>
			</div>
		{:else}
			<form
				class="rounded bg-gray-300 p-2 h-full flex flex-col justify-between"
				method="POST"
				action="?/addNew"
				use:enhance
			>
				<div class="my-2 text-left">
					<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Nama</label
					>
					<input
						bind:value={pegawai.name}
						type="text"
						id="name"
						name="name"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="contoh: pengajar"
						required
					/>
				</div>
				<div class="flex flex-col space-y-2">
					<button
						disabled={isEdit}
						on:click|preventDefault={() => (pegawai = { name: '' })}
						class="w-full text-white {isEdit
							? 'bg-gray-500'
							: 'bg-gray-700 hover:bg-gray-800'} focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
						>batalkan</button
					>
					{#if !isEdit}
						<button
							type="submit"
							class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>{selectId ? 'perbarui' : 'kirim'}</button
						>
					{/if}
				</div>
			</form>
		{/if}
	</div>
	<div class="w-full sm:w-[70%] flex flex-col">
		<h2 class="p-2 text-center sm:text-left">daftar jenis pegawai</h2>
		<div class="flex-1 bg-gray-200 px-2 overflow-hidden">
			<div class="h-full overflow-y-auto">
				<div id="data" class="min-h-fit max-h-32">
					{#if loading}
						<p class="text-blue-600">loading: coba mengunduh data</p>
					{:else if coba.length == 0}
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
									<th scope="col" class="w-10 px-2 py-3">no</th>
									<th scope="col" class="px-2 py-3 text-center">nama</th>
									<th scope="col" class="w-28 px-2 py-3 text-center">aksi</th>
								</tr>
							</thead>
							<tbody>
								{#each coba as item, id}
									<tr>
										<td class="px-2 py-2 text-center">{id + 1}</td>
										<td class="px-2 py-2">{item.name}</td>
										<td class="px-2 py-3 text-center font-light text-xs">
											<button
												id={item.id}
												on:click|preventDefault={hapusPegawai}
												class="bg-red-300 hover:bg-red-400 p-1 rounded text-white">hapus</button
											>
											<button
												id={item.id}
												on:click|preventDefault={editPegawai}
												class="bg-blue-300 hover:bg-blue-400 p-1 rounded text-white">edit</button
											>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
