<script>
	const menu = [
		{
			to: '/',
			title: 'Home'
		},
		{
			to: '/lms',
			title: 'LMS'
		},
		{
			to: 'https://google.com',
			title: 'SRANSA'
		},
		{
			to: '/',
			title: 'Keluar'
		}
	];
</script>

<nav class="hidden md:block bg-gradient-to-r from-green-200 to-blue-600 font-semibold">
	<div class="container mx-auto flex justify-between">
		<div class="flex">
			<a href="https://www.instagram.com/smpn1srandakan/">
				<img
					
					alt="ig"
					class="w-8 m-1 p-2 hover:bg-red-200 rounded-lg"
				/>
			</a>
			<a href="https://www.facebook.com/smpn1srandakan/">
				<img
					
					alt="fb"
					class="w-8 m-1 p-2 hover:bg-red-200 rounded-lg"
				/>
			</a>
			<a href="https://www.tiktok.com/smpn1srandakan/">
				<img
					
					alt="tiktok"
					class="w-8 m-1 p-2 hover:bg-red-200 rounded-lg"
				/>
			</a>

			<a href="https://www.youtube.com/smpn1srandakan/">
				<img
					
					alt="yt"
					class="w-8 m-1 p-2 hover:bg-red-200 rounded-lg"
				/>
			</a>
		</div>
		<div class="flex">
			{#each menu as item}
				<a href={item.to} class="p-2 text-white hover:text-black hover:bg-red-200">{item.title}</a>
			{/each}
		</div>
	</div>
</nav>
