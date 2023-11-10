<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';
	export let data: PageData;
	export let form: ActionData;
	console.log(form);
</script>

<div>
	<form action="/dashboard/stock/?/getBrand" method="POST" use:enhance>
		<!-- Form fields go here -->
		<input name="email" />
		<button type="submit">Add User</button>
	</form>
</div>
<div class="bg-red-200">
	<h1>tambahkan jenis barang</h1>
	<form action="" method="post" />
</div>
