<script>
	import PageCenter from '$lib/components/Layout/PageCenter.svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import { Auth } from '@supabase/auth-ui-svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	export let data;
</script>

<PageCenter>
	<div class="text-left">
		<Auth
			view="sign_up"
			supabaseClient={data.supabaseClient}
			redirectTo={`${data.url}/auth/callback`}
			showLinks={false}
			appearance={{
				theme: ThemeSupa,
				className: {
					label: 'text-gray-500 dark:text-gray-300 text-xs'
				}
			}}
			theme={$page.data.modeThemes}
			localization={{
				variables: {
					sign_up: {
						email_label: 'Email Belajar.ID',
						password_label: 'Password Belajar.ID',
						email_input_placeholder: 'tulis email anda disini',
						password_input_placeholder: 'tulis password anda disini',
						loading_button_label: 'Singkronasi Sistem...',
						confirmation_text: 'untuk konfirmasi, silahkan check email belajar.id anda ',
						button_label: 'Daftar'
					}
				}
			}}
		/>
	</div>
</PageCenter>
