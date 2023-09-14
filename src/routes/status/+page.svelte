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

<section class="container m-auto">
	<h1 class="pt-10 text-5xl text-center">Status Login</h1>
	<code>
		{#if data.opt.by == 'trial'}
			anda menggunakan akun trial
		{:else if data.opt.by != 'mac'}
			anda menggunakan akun umum
		{:else}
			maaf terdapat kesalahan, mohon hubungi operator
		{/if}
		selamat datang {data.auth.user}
		alamat perangkat anda: {data.auth.mac}
	</code>

	<form action={data.link.logout} name="logout">
		<table>
			<tr><td>IP address</td><td>{data.system.ip}</td></tr>
			<tr><td>Bytes up / down</td><td>{data.system.byteIn} / {data.system.byteOut}</td></tr>

			<!-- session -->
			{#if data.system.session}
				<tr><td>Connected / left</td><td>{data.system.uptime} / {data.system.session}</td></tr>
			{:else}
				<tr><td>Connected</td><td>{data.system.uptime}</td></tr>
			{/if}

			<!-- advert config -->
			{#if data.opt.blocked == 'yes'}
				<tr>
					<td>Status</td>
					<td><a href="$(link-advert)" target="hotspot_advert">Advertisement required</a></td>
				</tr>
			{:else if data.opt.timeout}
				<tr>
					<td>Status refresh</td>
					<td>{data.opt.timeout}</td>
				</tr>
			{/if}
		</table>
		{#if data.auth.byMac != 'yes'}
			<!-- user manager link. if user manager resides on other router, replace $(hostname) by its address
				 <button onclick="document.location='http://$(hostname)/user?subs='; return false;">status</button> 
				 end of user manager link -->
			<input type="submit" value="Log out" />
		{/if}
	</form>
</section>
