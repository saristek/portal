<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	$: darkMode = $page.data.modeThemes == 'dark' ? true : false;

	function handleSwitchDarkMode() {
		const toTheme = $page.data.modeThemes == 'dark' ? false : true;
		localStorage.setItem('theme', toTheme ? 'dark' : 'light');

		// auto assign modeThemes on client
		toTheme
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
</script>

<div class="p-1 text-white hover:text-black hover:bg-red-200 rounded-lg">
	<form method="post" use:enhance>
		<button
			class="mx-1"
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
		@apply inline-block cursor-pointer h-4 w-4 rounded-full duration-300 content-[''] caret-transparent;
	}

	#theme-toggle:not(:checked) + label {
		@apply bg-amber-400;
	}

	#theme-toggle:checked + label {
		@apply bg-transparent;
		box-shadow: inset -8px -6px 1px 1px #ddd;
	}
</style>
