<script>
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import logo from '$lib/assets/logo.png';
</script>

<div class="pt-6 flex flex-col md:flex-row space-y-4 md:space-x-4 justify-center items-center">
	<img src={base + logo} class="h-16 sm:h-20" alt="Sransa" />
	<div class="text-xl sm:text-2xl font-semibold text-center flex flex-col mx-auto">
		<p>Selamat Datang<br />di Layanan Portal Digital<br />SMP N 1 Srandakan</p>
	</div>
</div>
<div class="flex flex-col justify-between divide-y divide-gray-300/50">
	<div class="space-y-2 py-8 text-base leading-7 text-gray-600">
		<div class="grid gap-2">
			<button on:click={() => goto('/activation')} class="hover:bg-red-300 bg-red-200 rounded-lg"
				>aktivasi</button
			>
			<button on:click={() => goto('/login')} class="hover:bg-blue-400 bg-blue-300 rounded-lg"
				>Login Hotspot</button
			>
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
