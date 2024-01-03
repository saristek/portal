<script lang="ts">
	import PageCenter from '$lib/components/Layout/PageCenter.svelte';
	import Session from '$lib/components/Layout/Session.svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import { Auth } from '@supabase/auth-ui-svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;
	// let { supabaseClient } = data;

	// onMount
	// $: ({ supabaseClient } = data);

	// state
	let email: string, password: string;

	// const handleSignIn = async () => {
	// 	await supabaseClient.auth.signInWithPassword({
	// 		email,
	// 		password
	// 	});
	// };
</script>

<PageCenter>
	<Session title="login" description="portal">
		<!-- <form on:submit={handleSignIn} class="flex flex-col space-y-2">
			<div class="flex flex-col space-y-2 mb-2">
				<label for="email" class="text-gray-500 text-sm dark:text-gray-300">Email Belajar ID</label>
				<input
					name="email"
					bind:value={email}
					placeholder="tulis email anda disini"
					class="dark:bg-gray-800 p-2 rounded"
				/>
				<label for="email" class="text-gray-500 text-sm dark:text-gray-300"
					>Password Belajar ID</label
				>
				<input
					type="password"
					name="password"
					bind:value={password}
					placeholder="tulis password anda disini"
					class="dark:bg-gray-800 p-2 rounded"
				/>
			</div>
			<button
				type="submit"
				class="hover:bg-gray-300 bg-gray-400 text-gray-900 dark:text-gray-200 dark:bg-blue-700 dark:hover:bg-blue-600 p-2 rounded"
				>Masuk</button
			>
		</form> -->
		<Auth
			view="sign_in"
			supabaseClient={data.supabaseClient}
			redirectTo={`${data.url}/auth/callback`}
			showLinks={false}
			appearance={{
				theme: ThemeSupa,
				className: {
					// button: 'hover:bg-gray-300 bg-gray-400 text-gray-900 dark:text-gray-200 dark:bg-blue-700 dark:hover:bg-blue-600',
					label: 'text-gray-500 dark:text-gray-300 text-xs'
				}
			}}
			theme={$page.data.modeThemes}
			localization={{
				variables: {
					sign_in: {
						email_label: 'Email Belajar.ID',
						password_label: 'Password Belajar.ID',
						email_input_placeholder: 'tulis email anda disini',
						password_input_placeholder: 'tulis password anda disini',
						loading_button_label: 'mencoba masuk sistem...',
						button_label: 'Masuk'
					}
				}
			}}
		/>
		<div class="py-2 mt-6">
			<p class="text-gray-500 dark:text-gray-300 text-xs">belum punya akun ?</p>
			<button
				class="w-full hover:bg-gray-300 bg-gray-400 text-gray-900 dark:text-gray-200 dark:bg-blue-700 dark:hover:bg-blue-600 p-2 rounded"
				on:click={() => goto('/register')}>Daftar</button
			>
		</div>
	</Session>
</PageCenter>
