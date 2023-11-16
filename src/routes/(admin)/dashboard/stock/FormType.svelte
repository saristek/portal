<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form class="flex flex-col w-full" action="/dashboard/stock/?/getBrand" method="POST" use:enhance>
	<div class="flex text-left justify-between">
			<label for="item_type" class="text-sm pr-2">jenis barang</label>
			<input name="item_type" class="flex-1"/>
	</div>
	<div class="flex space-x-2">
		<button type="submit" class="w-[80%] p-2 bg-red-400 mt-2 hover:bg-red-500/80">Tambah Jenis</button>
		<button type="submit" class="w-[20%] p-2 bg-gray-400 mt-2 hover:bg-gray-500/80">Bersihkan</button>
	</div>
</form>
