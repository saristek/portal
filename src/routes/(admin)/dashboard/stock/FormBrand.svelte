<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form class="flex flex-col w-full" action="/dashboard/stock/?/getBrand" method="POST" use:enhance>
	<div class="flex text-left justify-between">
			<label for="item_type" class="text-sm pr-2">merek barang</label>
			<input name="item_type" class="flex-1"/>
	</div>
	<button type="submit" class="p-2 bg-red-400 mt-2 hover:bg-red-500/80">Tambah Merek</button>
</form>
