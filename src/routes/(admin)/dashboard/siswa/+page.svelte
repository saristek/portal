<script lang="ts">
	import type { PageData } from './$types';
	import { dataRombel, dataSiswa } from '$lib/data/mock';
	import type { MouseEventHandler } from 'svelte/elements';

	type ISelected = {
		kelas: number;
		rombel: string;
	};
	let selectedKelas: ISelected;

	$: kelas = dataSiswa.filter((cek) => cek.kelas == selectedKelas?.kelas)[0]['rombel'];
	$: rombel = kelas.filter((cek) => cek.nama == selectedKelas?.rombel)[0];
	const wali = dataRombel
		.filter((cek) => cek.kelas == selectedKelas?.kelas)[0]
		['rombel'].filter((cek) => cek.nama == selectedKelas?.rombel)[0];

	const loadRombel: MouseEventHandler<HTMLButtonElement> = (ev) => {
		const data = JSON.parse(ev.currentTarget.id);
		selectedKelas.rombel = data['rombel'];
		selectedKelas.kelas = data['kelas'];
	};
	export let data: PageData;
</script>

<div class="grid grid-flow-col h-screen">
	<div class="col-span-3 text-black flex flex-col justify-between">
		{#if selectedKelas}
			<div>
				<div class="bg-gray-300 p-2">siswa</div>
				<div class="text-left p-4">
					<h1 class="py-2 flex justify-between">
						<span class="p-2 bg-red-200"
							>Kelas: {selectedKelas.kelas}-{selectedKelas.rombel.toUpperCase()}</span
						>
						<span class="p-2 bg-green-200">wali: {wali.wali}</span>
					</h1>
					<table class="w-full text-left">
						<thead class="bg-gray-400 flex w-full">
							<tr class="flex w-full text-center">
								<td class="w-10 p-2">no</td>
								<td class="w-36 p-2">nis</td>
								<td class="w-72 p-2">nama</td>
								<td class="w-56 p-2">telp</td>
								<td class="w-32 p-2">kelamin</td>
								<td class="w-20 p-2">aksi</td>
							</tr>
						</thead>
						<tbody class="max-h-[50vh] overflow-y-scroll flex flex-col w-full justify-between">
							{#each rombel['member'] as member, id}
								<tr class="flex w-full hover:bg-red-200/50">
									<td class="w-10 p-2 text-center">{id + 1}</td>
									<td class="w-36 p-2">{member.nis}</td>
									<td class="w-72 p-2">{member.nama}</td>
									<td class="w-56 p-2">{member.telp}</td>
									<td class="w-32 p-2">{member.jk == 'P' ? 'Perempuan' : 'Laki-laki'}</td>
									<td class="w-20 p-2">
										<button class="p-1 bg-orange-300 hover:bg-orange-400 w-full">sunting</button>
										<button class="p-1 bg-red-200 hover:bg-red-300 w-full">hapus</button>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<form action="" method="post" class="flex-1 flex p-2 bg-gray-300/80">
				<fieldset>
					<div class="flex items-end justify-between">
						<legend class="text-left text-xs pb-2">Form Input Siswa:</legend>
						<div class="">
							<button class="bg-green-200 p-2">kirim</button>
							<button class="bg-gray-200 p-2">reset form</button>
						</div>
					</div>
					<div class="flex space-x-2 mt-2">
						<div class="flex flex-col space-y-2">
							<input id="student_nis" type="text" placeholder="nomor induk" class="p-2" />
							<input id="student_name" type="text" placeholder="nama siswa" class="p-2" />
						</div>
						<div class="flex flex-col space-y-2">
							<input
								id="student_birth"
								type="text"
								placeholder="tanggal lahir (dd/mm/yyy)"
								class="p-2"
							/>
							<input id="student_domicile" type="text" placeholder="domisili" class="p-2" />
						</div>
						<div class="flex flex-col space-y-2">
							<input id="student_phone_self" type="tel" placeholder="nomor whatsapp" class="p-2" />
							<input
								id="student_phone_parent"
								type="tel"
								placeholder="nomor wali murid"
								class="p-2"
							/>
						</div>
					</div>
				</fieldset>
			</form>
		{:else}
			<p>maaf kelas tidak dijangkau</p>
		{/if}
	</div>
	<div class="h-screen col-span-1 flex flex-col bg-gray-300 text-black">
		<div class="bg-gray-400 p-2">rombel</div>
		<form action="" class="bg-gray-500 p-2 flex flex-col space-y-2">
			<select class="p-1" name="basis" id="basis" placeholder="pilih kelas">
				<option value="">pilih kelas</option>
				<option value="9">7</option>
				<option value="9">8</option>
				<option value="9">9</option>
			</select>
			<select class="p-1" name="wali" id="wali" placeholder="pilih wali">
				<option value="">pilih wali kelas</option>
				<option value="9">7</option>
				<option value="9">8</option>
				<option value="9">9</option>
			</select>
			<input class="p-1" type="text" name="nama" id="nama" placeholder="nama rombel" />
			<div class="grid grid-flow-col space-x-1">
				<button class="hover:bg-gray-600 bg-gray-600/50 p-2">buat rombel</button>
				<button class="hover:bg-gray-600 bg-gray-600/50 p-2">reset form</button>
			</div>
		</form>
		<div class="flex-1 p-4 overflow-y-scroll">
			{#each dataRombel as tingkat, idTingkat}
				<details class="text-left group select-none" id={`${idTingkat}`}>
					<summary class="m-2 py-2 hover:bg-green-500">
						<span>kelas: {tingkat.kelas}</span>
						<span
							class="h-full p-2 bg-green-700 text-white text-xs hidden group-open:inline-block float-right"
							>wali</span
						>
					</summary>
					<ul class="pl-6">
						{#each tingkat.rombel as rombel, idRombel}
							<li id={`{"rombel": "${rombel.nama}", "kelas": ${tingkat.kelas}}`}>
								<button
									class="hover:bg-red-300 p-1 flex justify-between items-end"
									on:click={loadRombel}
								>
									<span>Rombel: {rombel.nama.toUpperCase()}</span>
									<span class="text-xs">{rombel.wali}</span>
								</button>
							</li>
						{/each}
					</ul>
				</details>
			{:else}
				<p>tidak ada data yang ditampilkan, silahkan hubungi admin</p>
			{/each}
		</div>
		<!-- future: tab extraculicular -->
	</div>
</div>
