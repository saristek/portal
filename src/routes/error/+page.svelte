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
		<div id="heading" class="my-10">
			<h1 class="font-bold text-center sm:text-left text-xl mb-2">Sambungan Bermasalah</h1>
		</div>
		<div id="content" class="flex flex-col px-2">
			<p class="info">Login hotspot untuk lanjut berjelajah:</p>
			<a class="p-2 rounded-md bg-blue-300 hover:bg-blue-400 text-white text-center m-2" href="/login">
				{data.link.login}
			</a>
		</div>
	</div>
</section>
