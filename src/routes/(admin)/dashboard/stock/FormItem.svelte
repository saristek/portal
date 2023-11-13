<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form class="flex flex-col w-full" action="/dashboard/stock/?/getBrand" method="POST" use:enhance>
	<div class="flex text-left justify-between">
		<div class="flex flex-col">
			<label for="item_type" class="text-sm pr-2">jenis barang</label>
			<input name="item_type" />
			<label for="item_brand" class="text-sm pr-2">nama brand</label>
			<input name="item_brand" />
			<label for="codename" class="text-sm pr-2">codename</label>
			<input name="codename" />
			<label for="family" class="text-sm pr-2">family</label>
			<input name="family" />
		</div>
		<fieldset class="ml-2 flex-1 border border-solid border-gray-600 p-3">
			<legend class="text-sm pr-2"> details </legend>
			<div class="flex flex-col pl-2">
				<label for="detail_model" class="text-sm pr-2">model</label>
				<input name="detail_model" />
				<label for="detail_series" class="text-sm pr-2">series</label>
				<input name="detail_series" />
				<label for="detail_more" class="text-sm pr-2">more</label>
				<input name="detail_more" />
			</div>
		</fieldset>
	</div>
	<button type="submit" class="p-2 bg-red-400 mt-2 hover:bg-red-500/80">Tambah Barang</button>
</form>
