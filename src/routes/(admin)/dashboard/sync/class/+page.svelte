<script lang="ts">
	import { dataRombel, dataSiswa } from '$lib/data/mock';
	import type { PageData } from './$types';

	let selectedKelas = {
		kelas: 7,
		rombel: 'a'
	};

	$: kelas = dataSiswa.filter((cek) => cek.kelas == selectedKelas.kelas)[0]['rombel'];
	$: rombel = kelas.filter((cek) => cek.nama == selectedKelas.rombel)[0];
	const wali = dataRombel
		.filter((cek) => cek.kelas == selectedKelas.kelas)[0]
		['rombel'].filter((cek) => cek.nama == selectedKelas.rombel)[0];
	export let data: PageData;
</script>

<div class="h-full flex">
	<div class="w-[70%] flex flex-col">
		<div class="bg-gray-300 p-2">tenaga didik</div>
		<div class="h-full flex-1 flex flex-col text-left">
			<h1 class="py-2 flex justify-between">
				<span class="p-2 bg-red-200"
					>Kelas: {selectedKelas.kelas}-{selectedKelas.rombel.toUpperCase()}</span
				>
				<span class="p-2 bg-green-200">wali: {wali.wali}</span>
			</h1>
			<table class="flex-1 table-auto w-full">
				<thead class="bg-gray-400">
					<tr class="flex w-full text-center">
						<td class="w-10 p-2">no</td>
						<td class="w-36 p-2">nis</td>
						<td class="grow p-2">nama</td>
						<td class="w-56 p-2">telp</td>
						<td class="w-24 p-2">kelamin</td>
					</tr>
				</thead>
				<tbody class="flex flex-col overflow-y-scroll">
					{#each rombel['member'] as member, id}
						<tr class="flex w-full">
							<td class="w-10 p-2">{id + 1}</td>
							<td class="w-36 p-2">{member.nis}</td>
							<td class="grow p-2">{member.nama}</td>
							<td class="w-56 p-2">{member.telp}</td>
							<td class="w-24 p-2">{member.jk == 'P' ? 'Perempuan' : 'Laki-laki'}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
	<div class="w-[30%]">
		<div class="bg-gray-400 p-2">jadwal</div>
		<form action="" class="bg-gray-500 p-2 flex flex-col space-y-2">
			<select class="p-1" name="basis" id="basis" placeholder="pilih kelas">
				<option value="">pilih kelas</option>
				<option value="9">7</option>
				<option value="9">8</option>
				<option value="9">9</option>
			</select>
			<select class="p-1" name="wali" id="wali" placeholder="pilih wali">
				<option value="">pilih rombel</option>
				<option value="9">7</option>
				<option value="9">8</option>
				<option value="9">9</option>
			</select>
			<input class="p-1" type="text" name="nama" id="nama" placeholder="nama mata pelajaran" />
			<div class="grid grid-flow-col space-x-1">
				<button class="hover:bg-gray-600 bg-gray-600/50 p-2">buat mata pelajaran</button>
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
							<li class="hover:bg-red-300 p-1 flex justify-between items-end" id={`${idRombel}`}>
								<span>Rombel: {rombel.nama.toUpperCase()}</span>
								<span class="text-xs">{rombel.wali}</span>
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
