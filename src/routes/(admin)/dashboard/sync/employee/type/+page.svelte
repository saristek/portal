<script context="module" lang="ts">
	type IData = {
		id: string;
		name: string;
	};
</script>

<script lang="ts">
	import Spiner from '$lib/components/Spiner.svelte';

	import { enhance } from '$app/forms';
	import { client } from '$lib/hook/supabase';
	import type { MouseEventHandler } from 'svelte/elements';
	import type { ActionData } from './$types';
	import { onMount } from 'svelte';

	// option
	let hideMenu = false;
	let formBusy = false;
	let tableBusy = true;
	let formMessage = 'sedang memuat edit';
	let tableMessage = 'loading: memuat tabel';

	let selectId = '';
	let error = '';

	// function
	const loadType = async () => {
		const { data, error: err } = await client.from('employee_type').select();
		if (err) error = err.message;
		tableBusy = false;
		return data as IData[];
	};
	const loadEdit = async (target: string) => {
		const { data } = await client.from('employee_type').select().eq('id', target).single();
		formBusy = false;
		return data as IData;
	};

	// form init
	let dataForm = {
		id: '',
		name: ''
	};

	// load table
	let listType: IData[];

	$: edited = dataForm.name != '';

	// action
	const editType: MouseEventHandler<HTMLButtonElement> = async (ev) => {
		// prevent anything
		formBusy = true;
		selectId = ev.currentTarget.id;

		// for form edit consumer
		dataForm = await loadEdit(selectId);
		edited = true;
	};
	const deleteType: MouseEventHandler<HTMLButtonElement> = async (ev) => {
		// prevent anything
		tableMessage = 'menghapus data dari dalam tabel';
		tableBusy = true;
		const id = ev.currentTarget.id;
		const { status, error: err } = await client.from('employee_type').delete().match({ id: id });

		if (err) error = err.message;

		if (status == 204) {
			// reload list
			listType = await loadType();
		}
	};

	onMount(async () => {
		listType = await loadType();
	});
</script>

<div class="flex-1 flex sm:flex-row flex-col p-2">
	{#if !hideMenu}
		<div class="sm:order-2 w-full sm:w-[30%] flex flex-col bg-gray-300 rounded">
			<h2 class="p-2 text-center sm:text-left">tambah jenis pegawai baru</h2>
			{#if formBusy}
				<div class="h-full bg-gray-600 rounded p-2 flex justify-center items-center">
					<p class="text-white">{formMessage}</p>
				</div>
			{:else}
				<form
					class="rounded bg-gray-300 p-2 h-full flex flex-col justify-between"
					method="POST"
					action={dataForm.id ? '?/edit' : '?/add'}
					use:enhance={() => {
						formMessage = dataForm.id ? 'sedang memperbarui' : 'sedang menambahkan';
						tableMessage = dataForm.id
							? 'memperbarui data tabel'
							: 'menambahkan data kedalam tabel';
						formBusy = true;
						tableBusy = true;

						dataForm = { id: '', name: '' };
						return async ({ result }) => {
							if ((result.type = 'success')) {
								formBusy = false;
								tableBusy = false;
								// reload table
								listType = await loadType();
								// reset form
							}
						};
					}}
				>
					<input type="text" name="id" class="hidden" value={dataForm.id} />
					<div class="my-2 text-left">
						<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Nama</label
						>
						<input
							bind:value={dataForm.name}
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
							disabled={!edited}
							on:click|preventDefault={() => (dataForm = { id: '', name: '' })}
							class="w-full text-white {edited
								? 'bg-gray-700 hover:bg-gray-800'
								: 'bg-gray-500'} focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
							>batalkan</button
						>
						{#if edited}
							<button
								type="submit"
								class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>{dataForm.id ? 'perbarui' : 'kirim'}</button
							>
						{/if}
					</div>
				</form>
			{/if}
		</div>
	{/if}
	<div class="w-full {hideMenu ? 'sm:w-full' : 'sm:w-[70%]'} flex flex-col">
		<div class="mb-2 mr-2 flex justify-between">
			<h2 class="p-2 text-center sm:text-left">daftar jenis pegawai</h2>
			<div class="flex justify-end space-x-2">
				<button
					on:click|preventDefault={() => (hideMenu = !hideMenu)}
					class="p-2 bg-blue-300 rounded"
					>{hideMenu ? '« tampilkan form' : 'sembunyikan form »'}</button
				>
			</div>
		</div>
		<div class="flex-1 bg-gray-200 px-2 overflow-hidden">
			<div class="h-full overflow-y-auto">
				{#if tableBusy}
				<div class="h-full flex flex-col justify-center items-center">
					<Spiner />
					<p class="pt-10 text-blue-600">{tableMessage}</p>
					</div>
				{:else if error}
					<p class="text-red-600">mohon maaf: tidak ada data yang bisa ditampilkan</p>
					<p class="mt-4">silahkan buat data baru atau hubungi operator</p>
					<code>{error}</code>
				{:else if listType}
					<div id="data" class="h-full min-h-fit max-h-32">
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
								{#each listType as item, id(item.id)}
									<tr>
										<td class="px-2 py-2 text-center">{id + 1}</td>
										<td class="px-2 py-2">{item.name}</td>
										<td class="px-2 py-3 text-center font-light text-xs">
											<button
												id={item.id}
												on:click|preventDefault={deleteType}
												class="bg-red-300 hover:bg-red-400 p-1 rounded text-white">hapus</button
											>
											<button
												id={item.id}
												on:click|preventDefault={editType}
												class="bg-blue-300 hover:bg-blue-400 p-1 rounded text-white">edit</button
											>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
