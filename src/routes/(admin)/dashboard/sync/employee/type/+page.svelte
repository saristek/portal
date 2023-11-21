<script lang="ts">
	import { client } from '$lib/hook/supabase';
	import { onMount } from 'svelte';

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

	onMount(async () => {
		const { data } = await client.from('employee_type').select();
		coba = data as IData[];
	});
</script>

<div class="h-full flex flex-col justify-between overflow-y-scroll">
	<h1 class="p-4 font-semibold mb-4">Jenis Ke-Pegawaian</h1>
	<div class="flex-1 flex">
		<div class="w-[70%] flex flex-col">
            <h2 class="p-2 text-left">daftar jenis pegawai</h2>
			<div class="flex-1 bg-red-200 p-4 overflow-hidden">
                <div class="h-full bg-blue-300 overflow-y-scroll">
                    <div id="data" class="h-96">
                        <ul class="text-left pl-2">
                            {#each coba as item}
                                <li>{item.id}. {item.name}</li>
                                <li>{item.id}. {item.name}</li>
                                <li>{item.id}. {item.name}</li>
                                <li>{item.id}. {item.name}</li>
                                <li>{item.id}. {item.name}</li>
                                <li>{item.id}. {item.name}</li>
                            {:else}
                                loading...
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
		</div>
		<div class="w-[30%]">
            <div class="text-left p-4 flex flex-col">
                <label for="name">Jenis</label>
                <input type="text" name="name" placeholder="nama jenis">
                <button type="submit" class="bg-blue-300 mt-2">Kirim</button>
            </div>
        </div>
	</div>
</div>
