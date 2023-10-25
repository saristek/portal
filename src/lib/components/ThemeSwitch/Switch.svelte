<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	$: darkMode = ($page.data.modeThemes == 'dark' ? true : false);

	function handleSwitchDarkMode() {
		const toTheme = $page.data.modeThemes =='dark'? false : true
		localStorage.setItem('theme', toTheme ? 'dark' : 'light');

		// auto assign modeThemes on client
		toTheme
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
</script>

<div class="my-auto mx-2">
	<form method="post" use:enhance>
		<button
			data-sveltekit-preload-code
			on:click={handleSwitchDarkMode}
			formaction={`/?/setTheme&theme=${$page.data.modeThemes}&redirectTo=${$page.url.pathname}`}
		>
			<input
				checked={darkMode}
				type="checkbox"
				id="theme-toggle"
				class="hidden"
				formaction={`/?/setTheme`}
			/>
			<label for="theme-toggle" />
		</button>
	</form>
</div>

<style lang="postcss">
	#theme-toggle {
		@apply invisible;
	}

	#theme-toggle + label {
		@apply inline-block cursor-pointer h-6 w-6 rounded-full duration-300 content-[''] caret-transparent;
	}

	#theme-toggle:not(:checked) + label {
		@apply bg-amber-400;
	}

	#theme-toggle:checked + label {
		@apply bg-transparent;
		box-shadow: inset -12px -10px 1px 1px #ddd;
	}
</style>
