<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import type { SupabaseClient } from '@supabase/supabase-js';

	export let supabasecl: SupabaseClient, url: string | undefined;
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<Auth
	supabaseClient={supabasecl}
	view="magic_link"
	redirectTo={`${url}/auth/callback`}
	showLinks={true}
	appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
/>
