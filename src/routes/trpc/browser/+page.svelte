<script lang="ts">
	import { browserClient, type ProcedureReturnType } from '$trpc';

	let welcome: ProcedureReturnType<typeof browserClient.welcome.query>;
	(async function () {
		welcome = await browserClient.welcome.query('Yusaf');
		// compare log in browser vs terminal. Terminal should be undefined as no endpoint is actually called in the back end.
	})();
</script>

{welcome ? welcome : ''}
