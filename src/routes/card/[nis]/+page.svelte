<script lang="ts">
	import type { PageData } from './$types';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';

	// Deklarasikan properti PageData untuk mendapatkan data dari load function
	export let data: PageData;

	// Deklarasikan variabel untuk data dan error
	let apiData = data.result;
	let error = data.error;
</script>

<div class="flex justify-center">
	{#if error}
		<p>Error fetching data: {error}</p>
	{:else if apiData}
		<div
			class="max-w-xxl w-fit rounded-lg border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800"
		>
			<h5 class="p-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{apiData.fullname}
			</h5>
			<div class="mt-2 grid min-w-[300px] gap-2 md:grid-flow-col">
				<div
					class="rounded-lg border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800"
				>
					<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Study Group</h2>
					<address
						class="relative grid rounded-lg border border-gray-200 bg-gray-50 p-4 not-italic sm:grid-cols-4 dark:border-gray-600 dark:bg-gray-700"
					>
						<div
							class="col-span-1 hidden space-y-2 leading-loose text-gray-500 sm:block md:col-span-2 dark:text-gray-400"
						>
							<div>NIS</div>
							<div>NISN</div>
							<div>CLASS</div>
						</div>
						<div
							id="study-group"
							class="space-y-2 font-medium leading-loose text-gray-900 dark:text-white"
						>
							<div><span class="sm:hidden font-normal">NIS: </span> {apiData.nis}</div>
							<div><span class="sm:hidden font-normal">NISN: </span> {apiData.nisn}</div>
							<div><span class="sm:hidden font-normal">CLASS: </span> {apiData.class}</div>
						</div>
						<div
							id="tooltip-contact-details"
							role="tooltip"
							class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
						>
							<span id="default-tooltip-message-contact-details">Copy to clipboard</span>
							<span id="success-tooltip-message-contact-details" class="hidden">Copied!</span>
							<div class="tooltip-arrow" data-popper-arrow></div>
						</div>
					</address>
				</div>
				<div
					class="rounded-lg border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800"
				>
					<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Details</h2>
					<address
						class="relative grid grid-cols-4 rounded-lg border border-gray-200 bg-gray-50 p-4 not-italic dark:border-gray-600 dark:bg-gray-700"
					>
						<div
							class="col-span-1 hidden space-y-2 leading-loose text-gray-500 sm:block dark:text-gray-400"
						>
							<div>BORN</div>
							<div>BIRTH</div>
							<div>GENDER</div>
							<div>ADDRESS</div>
						</div>
						<div
							id="details"
							class="col-span-3 space-y-2 font-medium leading-loose text-gray-900 dark:text-white"
						>
							<div><span class="sm:hidden font-normal">BORN: </span> {apiData.born}</div>
							<div><span class="sm:hidden font-normal">BIRTH: </span> {apiData.birth}</div>
							<div>
								<span class="sm:hidden font-normal">GENDER: </span>
								{apiData.gender == 1 ? 'Male' : 'Female'}
							</div>
							<div><span class="sm:hidden font-normal">ADDRESS: </span> {apiData.address}</div>
						</div>
						<div
							id="tooltip-contact-details"
							role="tooltip"
							class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
						>
							<span id="default-tooltip-message-contact-details">Copy to clipboard</span>
							<span id="success-tooltip-message-contact-details" class="hidden">Copied!</span>
							<div class="tooltip-arrow" data-popper-arrow></div>
						</div>
					</address>
				</div>
			</div>
			<div class="mt-5 flex justify-center">
				<img
					class="w-full rounded-t-lg"
					src={`${PUBLIC_BACKEND_URL}/storage/${apiData.preview}`}
					alt="preview-card"
				/>
			</div>
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
