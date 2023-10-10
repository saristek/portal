<script lang="ts">
	import { base } from '$app/paths';
	import { invalidateAll } from '$app/navigation';
	import logo from '$lib/assets/logo.png';
	import Counter from '$lib/components/Counter.svelte';

	export let data;

	console.log(data.link.login);

	type IForm = {
		username: string;
		password: string;
	};

	let form: IForm = {
		username: '',
		password: ''
	};

	const handleSubmit = async (e: Event) => {
		const formEl = e.target as HTMLFormElement;
		const data = new FormData(formEl);
		console.log(data);

		const response = await fetch(formEl.action, {
			method: 'POST',
			body: data
		});
		// const responseData = await response.json();

		// form = responseData;

		// // reset form
		// formEl.reset();
		// console.log(responseData);
		// alert('success, check console please...');

		// // rerun `load` function for the page
		// await invalidateAll();
	};
</script>

<!-- bg-red-200 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-2 rounded-lg sm:rounded-xl sm:px-10 -->
<section class="m-auto p-4 ring-1 ring-gray-900/5 sm:rounded-xl sm:shadow-xl sm:px-10">
	<div class="mx-auto max-w-md">
		<div class="pt-6 flex flex-col md:flex-row space-y-4 md:space-x-4 justify-center items-center">
			<img src={base + logo} class="h-16 sm:h-20" alt="Sransa" />
			<div class="text-xl sm:text-2xl font-semibold text-center flex flex-col mx-auto">
				<p>Selamat Datang di Portal Digital SMP N 1 Srandakan</p>
			</div>
		</div>
		<div class="flex flex-col justify-between divide-y divide-gray-300/50">
			<div class="space-y-2 py-8 text-base leading-7 text-gray-600">
				<form
					id="hotspot-login"
					method="post"
					class="flex flex-col sm:flex-row"
					name="login"
					action={data.link.login}
				>
					<!-- on:submit|preventDefault={handleSubmit} -->
					<input type="hidden" name="dst" value={data.link.orig} />
					<!-- <input type="hidden" name="popup" value={data.opt.isPop} /> -->
					<input
						name="username"
						type="text"
						bind:value={form.username}
						placeholder="tulis username disini"
						class="sm:mr-2 sm:w-full p-2 focus:outline-dashed rounded-md bg-gray-100"
					/>
					<input
						class="hidden"
						name="password"
						type="password"
						placeholder="Password"
						bind:value={form.password}
					/>
					<input
						class="text-white mt-2 sm:mt-auto hover:bg-blue-500 bg-blue-400 p-2 rounded-md"
						type="submit"
						value="masuk"
					/>
				</form>
				<div>
					<a href="/registrasi">
						<button class="w-full text-white p-2 bg-blue-200 hover:bg-blue-400 rounded-lg"
							>belum punya akun wifi?</button
						>
					</a>
				</div>
			</div>
			<div class="flex justify-evenly items-center space-x-4 pt-2 leading-7">
				<div class="basis-3/5">
					<p class="text-xs md:text-sm">
						Integrasi Pendidikan melalui Portal Digital, untuk belajar lebih menyenangkan
					</p>
				</div>
				<div class="basis-2/5 font-semibold items-stretch">
					<p class="text-xs md:text-sm text-gray-900">Informasi lebih lanjut ?</p>
					<p>
						<a href="https://smpsransa.sch.id/support" class="text-sky-500 hover:text-sky-600"
							>Bantuan &rarr;</a
						>
					</p>
				</div>
			</div>
			<p class="text-center pt-2 text-gray-400 text-xs">
				dikembangkan oleh Saristek (Sransa Riset dan Teknologi)
			</p>
		</div>
	</div>
</section>
