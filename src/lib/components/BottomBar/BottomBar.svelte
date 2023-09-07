<script>
	import IconBookmark from '../Svg/IconBookmark.svelte';
	import IconHome from '../Svg/IconHome.svelte';
	import IconPencarian from '../Svg/IconPencarian.svelte';
	import IconPengaturan from '../Svg/IconPengaturan.svelte';
	import IconTambah from '../Svg/IconTambah.svelte';
	import SingleButton from './SingleButton.svelte';

	const Menus = [
		{
			icon: IconHome,
			title: 'Home',
			to: '/'
		},
		{
			icon: IconBookmark,
			title: 'LMS',
			to: '/lms'
		},
		{
			icon: IconPencarian,
			title: 'Temu Pek',
			to: 'https://nemu.sransa.sch.id'
		},
		{
			icon: IconTambah,
			title: 'Tambah',
			to: '/kosong'
		},
		{
			icon: IconPengaturan,
			title: 'Pengaturan',
			to: '/setting'
		}
	];
</script>

<div
	class="lg:hidden w-full bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
>
	<div class="grid h-full max-w-lg grid-cols-5 mx-auto">
		{#each Menus as menu}
			<SingleButton to={menu.to} icon={menu.icon}>{menu.title}</SingleButton>
		{/each}
	</div>
</div>
