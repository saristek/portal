<script lang="ts">
	export let data;
</script>

<!-- 
$(if login-by == 'trial')
	<h1>Hi, trial user!</h1>
$(elif login-by != 'mac')
	<h1>Hi, $(username)!</h1>
$(endif)   
 -->

<section class="container">
	<div class="h-full p-4 sm:p-8 mx-auto max-w-lg">
		<div class="my-10">
			<h1 class="font-bold text-center sm:text-left text-xl mb-2">Status Terhubung</h1>
			<div class="bg-slate-700 text-gray-200 p-2 rounded-md text-center uppercase">
				<p class="text-lg font-bold">
					selamat datang <span class="text-blue-400">{data.auth.user}</span>
				</p>
				<p class="text-sm">id perangkat anda: {data.auth.mac}</p>
			</div>
		</div>

		<form action={data.link.logout} name="logout">
			<div class="bg-slate-500 text-white rounded-md p-4">
				<table>
					<tr>
						<td class="bg-slate-600 p-2">IP address</td>
						<td class="pl-2">{data.system.ip}</td>
					</tr>
					<tr>
						<td class="bg-slate-600 p-2">Bytes up / down</td>
						<td class="pl-2">{data.system.byteIn} / {data.system.byteOut}</td>
					</tr>

					<!-- session -->
					{#if data.system.session}
						<tr>
							<td class="bg-slate-600 p-2">Connected / left</td>
							<td class="pl-2">{data.system.uptime} / {data.system.session}</td>
						</tr>
					{:else}
						<tr>
							<td class="bg-slate-600 p-2">Connected</td>
							<td class="pl-2">{data.system.uptime}</td>
						</tr>
					{/if}

					<!-- advert config -->
					{#if data.opt.blocked == 'yes'}
						<tr>
							<td class="bg-slate-600 p-2">Status</td>
							<td class="pl-2"
								><a href="$(link-advert)" target="hotspot_advert">Advertisement required</a></td
							>
						</tr>
					{:else if data.opt.timeout}
						<tr>
							<td class="bg-slate-600 p-2">Status refresh</td>
							<td class="pl-2">{data.opt.timeout}</td>
						</tr>
					{/if}
				</table>
			</div>
			<div class="bg-slate-800 text-white rounded-md px-2 my-2">
				<code>
					informasi:
					{#if data.opt.by == 'trial'}
						anda menggunakan <span class="text-red-300">akun trial</span>
					{:else if data.opt.by != 'mac'}
						anda menggunakan <span class="text-green-300">akun umum</span>
					{:else}
						maaf terdapat kesalahan, mohon hubungi operator
					{/if}
				</code>
			</div>
			{#if data.auth.byMac != 'yes'}
				<!-- user manager link. if user manager resides on other router, replace $(hostname) by its address
					 <button onclick="document.location='http://$(hostname)/user?subs='; return false;">status</button> 
					 end of user manager link -->
				<div class="w-full flex justify-center my-2">
					<input class="bg-red-200 p-2 rounded-lg" type="submit" value="Log out" />
				</div>
			{/if}
		</form>
	</div>
</section>
