<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	const initForm = {
		fullname: '',
		nip: '',
		address: '',
		phone: '',
		email: '',
		type: '',
		password: ''
	};

	let employeeForm = { ...initForm };

	$: disabledClear = Object.values(employeeForm).every((x) => x === null || x === '');

	const resetForm = () => {
		employeeForm = { ...initForm };
	};
</script>

<div class="h-full flex flex-col overflow-y-scroll">
	<h1 class="p-4 font-semibold mb-4">Tambah Ke-Pegawaian</h1>
	<form method="POST" class="flex-1 flex flex-col justify-between p-4">
		<div class="grid gap-6 mb-6 md:grid-cols-2 text-left">
			<div>
				<label for="full_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Nama Lengkap</label
				>
				<input
					bind:value={employeeForm.fullname}
					type="text"
					id="full_name"
					name="fullname"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Eka Sulistya S.Pd"
					required
				/>
			</div>
			<div>
				<label for="nip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>NIP</label
				>
				<input
					bind:value={employeeForm.nip}
					type="number"
					id="nip"
					name="nip"
					class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="199205142023052008"
					required
				/>
			</div>
			<div class="col-span-2">
				<label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Alamat</label
				>
				<input
					bind:value={employeeForm.address}
					type="text"
					id="address"
					name="address"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="selomartani"
					required
				/>
			</div>
			<div>
				<label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Jenis Pegawai</label
				>
				<select
					bind:value={employeeForm.type}
					name="type"
					id="type"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option value="">pilih jenis pegawai</option>
					{#each data.jenisPegawai as item}
						<option value={item.id}>{item.name}</option>
					{/each}
				</select>
			</div>
			<div>
				<label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Phone number</label
				>
				<input
					bind:value={employeeForm.phone}
					type="tel"
					id="phone"
					name="phone"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="(+62) 89-6492-46450"
					required
				/>
			</div>
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Email Belajar.ID</label
				>
				<input
					bind:value={employeeForm.email}
					type="email"
					id="email"
					name="email"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="eko12@guru.smp.belajar.id"
					required
				/>
			</div>
			<div>
				<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Password Belajar.ID</label
				>
				<input
					bind:value={employeeForm.password}
					type="password"
					id="password"
					name="password"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="rahasia12"
					required
				/>
			</div>
		</div>
		<div class="flex justify-between">
			<button
				class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
				on:click|preventDefault={() => goto('/dashboard/sync/employee')}>Kembali</button
			>
			<div class="flex space-x-2">
				<button
					disabled={disabledClear}
					on:click|preventDefault={resetForm}
					class="text-white {disabledClear
						? 'bg-gray-500'
						: 'bg-gray-700 hover:bg-gray-800'} dark:bg-gray-600 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-gray-800"
					>Reset</button
				>
				<button
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>Kirim</button
				>
			</div>
		</div>
	</form>
</div>
