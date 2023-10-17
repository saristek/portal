<script>
	import Login from '$lib/components/Home/Login.svelte';
	import PageCenter from '$lib/components/Layout/PageCenter.svelte';
    
	export let data;
</script>

<PageCenter>
	<Login url={data.url} supabasecl={data.supabase} />
</PageCenter>
