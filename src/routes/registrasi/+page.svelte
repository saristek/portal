<script lang="ts">
	import DropDown from '$lib/components/DropDown.svelte';
	import PackageButton from '$lib/components/PackageButton.svelte';
	import IconArrowDown from '$lib/components/Svg/IconArrowDown.svelte';
	import IconArrowRight from '$lib/components/Svg/IconArrowRight.svelte';
	import { PackageMenu } from '$lib/components/menu';
	import type { ChangeEventHandler } from 'svelte/elements';

	let radioValue: string;
</script>

<section class="my-4 m-auto p-8 ring-1 ring-gray-900/5 sm:rounded-xl sm:shadow-xl sm:px-10">
	<div class="mx-auto max-w-md">
		<form action="" method="post">
			<h3 class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
				Who are you ? Feel free to fill these out!
			</h3>
			<PackageButton options={PackageMenu} bind:userSelected={radioValue} />
			<div class="flex flex-col space-y-2 mt-2">
				<input
					class="p-2 rounded-lg border-dashed border-2"
					type="text"
					name="nis"
					id="nomor-induk"
					placeholder={`nomor induk ${radioValue == 'teacher' ? 'pengajar' : 'siswa'}`}
					required
				/>
				<input
					class="p-2 rounded-lg border-dashed border-2"
					type="text"
					name="username"
					id="full-name"
					placeholder={`nama ${radioValue == 'teacher' ? 'pengajar' : 'siswa'}`}
					required
					autocomplete="username"
				/>
				<!-- pattern="”^\d{3}-\d{3}-\d{4}$”" -->
				<input
					class="p-2 rounded-lg border-dashed border-2"
					type="tel"
					name="phone"
					id="phone-number"
					placeholder="nomor whatsapp"
					autocomplete="tel"
					required
				/>
				<button class="p-2 bg-red-300 rounded-lg" type="submit"
					>{`daftar sebagai ${radioValue == 'teacher' ? 'pengajar' : 'siswa'}`}</button
				>
			</div>
		</form>
	</div>
</section>
