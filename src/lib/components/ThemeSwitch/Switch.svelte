<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	$: darkMode = $page.data.modeThemes == 'dark' ? true : false;
	// import { browser } from '$app/environment';

	// let darkMode: boolean | null;

	// if (browser) {
	// 	if (
	// 		localStorage.theme === 'dark' ||
	// 		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	// 	) {
	// 		document.documentElement.classList.add('dark');
	// 		darkMode = true;
	// 	} else {
	// 		document.documentElement.classList.remove('dark');
	// 		darkMode = false;
	// 	}
	// }

	// function handleSwitchDarkMode() {
	// 	darkMode = !darkMode;

	// 	localStorage.setItem('theme', darkMode ? 'dark' : 'light');

	// 	darkMode
	// 		? document.documentElement.classList.add('dark')
	// 		: document.documentElement.classList.remove('dark');
	// }
</script>

<div class="my-auto mx-2">
	<form class="logout" action={`?/setTheme=${darkMode}`} method="POST" use:enhance>
		<input checked={darkMode} type="checkbox" id="theme-toggle" class="hidden" />
		<label for="theme-toggle" />
	</form>
</div>

<style lang="postcss">
	#theme-toggle {
		@apply invisible;
	}

	#theme-toggle + label {
		@apply inline-block cursor-pointer h-6 w-6 rounded-full duration-300 content-[''];
	}

	#theme-toggle:not(:checked) + label {
		@apply bg-amber-400;
	}

	#theme-toggle:checked + label {
		@apply bg-transparent;
		box-shadow: inset -12px -10px 1px 1px #ddd;
	}
</style>
