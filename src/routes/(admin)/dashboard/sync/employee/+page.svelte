<script context="module" lang="ts">
	type IData = {
		id: string;
		name: string;
		born: string;
		birth: string;
		domicile: string;
		gender: string;
		status: {
			id: string;
			name: string;
		};
		phone: string;
		email: string;
		password: string;
	};
</script>

<script lang="ts">
	import { enhance } from '$app/forms';

	import { goto } from '$app/navigation';
	import Spiner from '$lib/components/Spiner.svelte';
	import { client } from '$lib/hook/supabase';
	import type { Tables } from '$types/supabase';
	import { onMount } from 'svelte';

	let selected: string;
	let sideMode = 'default';
	let expandTable = false;
	let hideMenu = false;
	let formBusy = false;
	let tableBusy = true;
	let typeBusy = true;
	let formMessage = 'sedang memuat edit';
	let tableMessage = 'loading: memuat tabel';

	let error = '';

	// function
	const loadEmployee = async () => {
		const DataQuery = client
			.from('employee')
			.select('name, gender, email, password, birth, born, domicile, phone, status(id, name)');
		type TypeQuery = QueryData<typeof DataQuery>;

		const { data, error: err } = await DataQuery;
		if (err) error = err.message;
		tableBusy = false;

		console.log(data)

		const Response: TypeQuery = data;
		return Response;
	};
	const loadType = async () => {
		const DataQuery = client.from('employee_type').select();
		type TypeQuery = QueryData<typeof DataQuery>;

		const { data, error: err } = await DataQuery;

		if (err) error = err.message;
		typeBusy = false;

		const Response: TypeQuery = data;
		return Response;
	};

	// form init
	let initForm = {
		id: '',
		name: '',
		nip: '',
		domicile: '',
		status: '',
		phone: '',
		email: '',
		password: '',
		birth: '',
		born: '',
		gender: ''
	};

	let dataForm: Partial<typeof initForm> = { ...initForm };

	// load table
	let listEmployee: IData[];
	let listType: Tables<'employee_type'>[];

	$: edited =
		dataForm.name != '' ||
		dataForm.nip != '' ||
		dataForm.domicile != '' ||
		dataForm.phone != '' ||
		dataForm.email != '' ||
		dataForm.password != '' ||
		dataForm.birth != '' ||
		dataForm.born != '' ||
		dataForm.status != '' ||
		dataForm.gender != '';

	onMount(async () => {
		listEmployee = await loadEmployee();
	});
</script>

<div class="flex-1 flex sm:flex-row flex-col p-2">
	<!-- side content -->
	{#if !hideMenu}
		<div
			class="sm:order-2 w-full {sideMode == 'default'
				? 'sm:w-[20%]'
				: 'sm:w-[30%]'} flex flex-col p-2 bg-gray-300 rounded"
		>
			{#if sideMode == 'default'}
				<div class="flex-1 flex flex-col pl-1">
					<div id="head_menu" class="mb-2 text-left">aksi</div>
					<button
						on:click|preventDefault={() => goto('/dashboard/sync/employee/type')}
						type="button"
						class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
						>Atur Jenis Pegawai</button
					>
					<button
						on:click|preventDefault={async () => {
							sideMode = 'form';
							typeBusy = true;
							listType = await loadType();
						}}
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
			{:else if sideMode == 'form'}
				<div class="flex justify-between items-center">
					<h2 class="p-2 text-center sm:text-left">tambah jenis pegawai baru</h2>
					<button
						on:click|preventDefault={() => (sideMode = 'default')}
						type="button"
						class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
						>kembali</button
					>
				</div>
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
								console.log(result);
								if ((result.type = 'success')) {
									formBusy = false;
									tableBusy = false;
									// reload table
									listEmployee = await loadEmployee();
									// reset form
								}
							};
						}}
					>
						<input type="text" name="id" class="hidden" value={dataForm.id} />
						<div>
							<h2 class="font-medium text-center">Biodata</h2>
							<div class="mb-2 text-left">
								<label
									for="name"
									class="block my-1 text-sm font-medium text-gray-900 dark:text-white"
									>Nama Lengkap</label
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
							<div class="mb-2 text-left">
								<label
									for="nip"
									class="block my-1 text-sm font-medium text-gray-900 dark:text-white">NIP</label
								>
								<input
									bind:value={dataForm.nip}
									type="number"
									id="nip"
									name="nip"
									class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="199205142023052008"
									required
								/>
							</div>
							<div class="mb-2 text-left">
								<label
									for="domicile"
									class="block my-1 text-sm font-medium text-gray-900 dark:text-white">Alamat</label
								>
								<input
									bind:value={dataForm.domicile}
									type="text"
									id="domicile"
									name="domicile"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="selomartani"
									required
								/>
							</div>
							<div class="grid grid-flow-col justify-stretch gap-1">
								<div class="mb-2 text-left">
									<label
										for="born"
										class="block my-1 text-xs font-medium text-gray-900 dark:text-white"
										>Tempat</label
									>
									<input
										bind:value={dataForm.born}
										type="text"
										id="born"
										name="born"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Yogyakarta"
										required
									/>
								</div>
								<div class="mb-2 text-left">
									<label
										for="birth"
										class="block my-1 text-xs font-medium text-gray-900 dark:text-white"
										>Tanggal</label
									>
									<input
										bind:value={dataForm.birth}
										type="date"
										id="birth"
										name="birth"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="MM/DD/YYYY"
										required
									/>
								</div>
							</div>
							<div class="mb-2 text-left">
								<label
									for="phone"
									class="block my-1 text-sm font-medium text-gray-900 dark:text-white"
									>Nomor Telp</label
								>
								<input
									bind:value={dataForm.phone}
									type="tel"
									id="phone"
									name="phone"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="(+62) 89-6492-46450"
									required
								/>
							</div>
							<div class="mb-2 text-left">
								<label
									for="gender"
									class="block my-1 text-sm font-medium text-gray-900 dark:text-white"
									>Jenis Kelamin</label
								>
								<select
									bind:value={dataForm.gender}
									id="gender"
									name="gender"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								>
									<option value="">pilih jenis kelamin</option>
									<option value="laki-laki">laki-laki</option>
									<option value="perempuan">perempuan</option>
								</select>
							</div>
							<div class="mb-2 text-left">
								<label
									for="status"
									class="block my-1 text-sm font-medium text-gray-900 dark:text-white"
									>Jenis Pegawai</label
								>
								{#await loadType()}
									<select
										id="status"
										name="status"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									>
										<option value="loading">sedang memuat jenis pegawai</option>
									</select>
								{:then value}
									<select
										id="status"
										name="status"
										bind:value={dataForm.status}
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									>
										<option value=""> pilih jenis pegawai </option>
										{#each value as type}
											<option value={type.id}>
												{type.name}
											</option>
										{/each}
									</select>
								{:catch error}
									<select
										id="status"
										name="status"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									>
										<option value="loading">tidak dapat memuat, terjadi kesalahan</option>
									</select>
								{/await}
							</div>
							<div class="mt-10">
								<h2 class="font-medium text-center">Belajar ID</h2>
								<div class="mb-2 text-left">
									<label
										for="email"
										class="block my-2 text-sm font-medium text-gray-900 dark:text-white"
										>Email</label
									>
									<input
										bind:value={dataForm.email}
										type="email"
										id="email"
										name="email"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="eko12@guru.smp.belajar.id"
										required
									/>
								</div>
								<div class="mb-2 text-left">
									<label
										for="password"
										class="block my-2 text-sm font-medium text-gray-900 dark:text-white"
										>Password</label
									>
									<input
										bind:value={dataForm.password}
										type="password"
										id="password"
										name="password"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="rahasia12"
										required
									/>
								</div>
							</div>
						</div>
						<div class="flex flex-col space-y-2">
							<button
								disabled={!edited}
								type="reset"
								on:click|preventDefault={() => (dataForm = { ...initForm })}
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
			{:else}
				error...
			{/if}
		</div>
	{/if}
	<!-- main content -->
	<div
		class="w-full {hideMenu
			? 'w-full'
			: sideMode == 'default'
			? 'w-[80%]'
			: 'w-[70%]'} flex flex-col"
	>
		<div class="mb-2 mr-2 flex justify-between">
			<h2 class="p-2 text-center sm:text-left">daftar pegawai</h2>
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
				{#if tableBusy}
					<div class="h-full flex flex-col justify-center items-center">
						<Spiner />
						<p class="pt-10 text-blue-600">{tableMessage}</p>
					</div>
				{:else if error}
					<p class="text-red-600">mohon maaf: tidak ada data yang bisa ditampilkan</p>
					<p class="mt-4">silahkan buat data baru atau hubungi operator</p>
					<code>{error}</code>
				{:else if listEmployee}
					<div id="data" class="min-h-fit max-h-32">
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
								{#each listEmployee as item}
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
										<td class="px-2 py-2 text-right">{item.born}, {item.birth}</td>
										<td class="px-2 py-2 text-right">{item.domicile}</td>
										<td class="px-2 py-2 text-center">{item.status.name}</td>
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
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
