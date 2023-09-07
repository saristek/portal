<script>
	import { base } from '$app/paths';
</script>

<!-- bg-red-200 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-2 rounded-lg sm:rounded-xl sm:px-10 -->
<div class="px-6 pt-10 pb-8 ring-1 ring-gray-900/5 sm:rounded-xl sm:shadow-xl sm:px-10">
	<div class="mx-auto max-w-md">
		<div class="flex flex-col md:flex-row space-y-4 md:space-x-4 justify-center items-center">
			<img src="{base}logo.png" class="h-16 sm:h-20" alt="Sransa" />
			<div class="text-xl sm:text-2xl font-semibold text-center flex flex-col mx-auto">
				<p>Selamat Datang di Portal Digital SMP N 1 Srandakan</p>
			</div>
		</div>
		<div class="divide-y divide-gray-300/50">
			<div class="space-y-6 py-8 text-base leading-7 text-gray-600">
				<form action="" class="flex flex-col sm:flex-row">
					<input
						type="text"
						class="sm:mr-2 sm:w-full p-2 focus:outline-dashed rounded-md bg-gray-100"
						placeholder="tulis username disini"
					/>
					<button
						type="submit"
						class="mt-2 sm:mt-auto hover:bg-red-300 hover:text-gray-600 bg-red-200 p-2 rounded-md"
						>masuk</button
					>
				</form>
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
						<a href="https://google.com" class="text-sky-500 hover:text-sky-600">Bantuan &rarr;</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
