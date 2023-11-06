<script lang="ts">
	import type { PageData } from './$types';
	import { assets } from '$lib/data/general';

	let selectedKelas = {
		kelas: 7,
		rombel: 'a'
	};

	let fsel1: HTMLSelectElement;
	let fsel2: HTMLSelectElement;

	let selected: any;

	$: hasil_fsel1 = assets.filter((cek) => cek.name == selected)[0];
	$:console.log(hasil_fsel1)
	// $: hasil_fsel2 = assets.filter((cek) => cek.name == fsel1.value)
	// $: rombel = kelas.filter((cek) => cek.nama == selectedKelas.rombel)[0];
	// const wali = dataRombel.filter(cek=>cek.kelas==selectedKelas.kelas)[0]['rombel'].filter(cek=>cek.nama==selectedKelas.rombel)[0]
	export let data: PageData;
</script>

<div class="grid grid-flow-col h-screen">
	<div class="col-span-3 text-black">
		<div class="bg-gray-300 p-2">Asset Sekolah</div>
		<div class="text-left p-4">
			<h1 class="py-2 flex justify-between">
				<span class="p-2 bg-red-200"
					>Kelas: {selectedKelas.kelas}-{selectedKelas.rombel.toUpperCase()}</span
				>
				<!-- <span class="p-2 bg-green-200">wali: {wali.wali}</span> -->
			</h1>
			<table class="w-full text-left">
				<thead class="bg-gray-400 flex w-full">
					<tr class="flex w-full text-center">
						<td class="w-10 p-2">no</td>
						<td class="w-36 p-2">nis</td>
						<td class="grow p-2">nama</td>
						<td class="w-56 p-2">telp</td>
						<td class="w-24 p-2">kelamin</td>
					</tr>
				</thead>
				<tbody class="max-h-[50vh] overflow-y-scroll flex flex-col w-full justify-between">
					<!-- {#each rombel['member'] as member, id}
						<tr class="flex w-full">
							<td class="w-10 p-2">{id + 1}</td>
							<td class="w-36 p-2">{member.nis}</td>
							<td class="grow p-2">{member.nama}</td>
							<td class="w-56 p-2">{member.telp}</td>
							<td class="w-24 p-2">{member.jk == 'P' ? 'Perempuan' : 'Laki-laki'}</td>
						</tr>
					{/each} -->
				</tbody>
			</table>
		</div>
	</div>
	<div class="h-screen col-span-1 flex flex-col bg-gray-300 text-black">
		<div class="bg-gray-400 p-2">filter</div>
		<form action="" class="bg-gray-500 p-2 flex flex-col space-y-2">
			<select
				class="p-1"
				name="sort 1"
				id="sort-1"
				bind:this={fsel1}
				on:change={() => (selected = fsel1.value)}
			>
				<option value="">pilih berdasarkan</option>
				{#each assets as item}
					<option value={item.name}>{item.name}</option>
				{/each}
			</select>
			<select class="p-1" name="sort 2" id="sort-2">
				<option value="">{`pilih ${selected || 'berdasarkan'}`}</option>
				<!-- {#each hasil_fsel1 as item}
				{/each} -->
			</select>
			<div class="grid grid-flow-col space-x-1">
				<button class="hover:bg-gray-600 bg-gray-600/50 p-2">cari</button>
				<button class="hover:bg-gray-600 bg-gray-600/50 p-2">reset form</button>
			</div>
		</form>
		<div class="flex-1 p-4 overflow-y-scroll">
			<!-- {#each dataRombel as tingkat, idTingkat}
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
			{/each} -->
		</div>
		<!-- future: tab extraculicular -->
	</div>
</div>
