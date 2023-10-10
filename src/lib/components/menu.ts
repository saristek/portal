import IconHome__SvelteComponent_ from "./Svg/IconHome.svelte";
import IconBookmark__SvelteComponent_ from "./Svg/IconBookmark.svelte";
import IconHotspot__SvelteComponent_ from "./Svg/IconHotspot.svelte";
import IconPengaturan__SvelteComponent_ from "./Svg/IconPengaturan.svelte";
import IconStudent__SvelteComponent_ from "./Svg/IconStudent.svelte";
// import IconTambah__SvelteComponent_ from "./Svg/IconTambah.svelte";

import ig from '$lib/assets/sosmed/ig.svg';
import fb from '$lib/assets/sosmed/fb.svg';
import tiktok from '$lib/assets/sosmed/tiktok.svg';
import yt from '$lib/assets/sosmed/yt.svg';

export const PackageMenu = [
    {
        value: 'teacher',
        label: 'Good for Teaching'
    }, {
        value: 'student',
        label: 'Learn and look closer'
    }
]

export const Social = [
    {
        title: 'Instagram',
        to: 'https://www.instagram.com/smpn1srandakan',
        icon: ig
    }, {
        title: 'Facebook',
        to: 'https://www.facebook.com/smpn1srandakan',
        icon: fb,
    }, {
        title: 'Tiktok',
        to: 'https://www.tiktok.com/smpn1srandakan',
        icon: tiktok
    }, {
        title: 'Youtube',
        to: 'https://www.youtube.com/smpn1srandakan',
        icon: yt
    },
]

export const HeadMenu = [
    {
        to: '/logout',
        title: 'logout'
    },
];

export const NavMenu = [
    {
        icon: IconHome__SvelteComponent_,
        title: 'Home',
        to: '/'
    },
    {
        icon: IconBookmark__SvelteComponent_,
        title: 'Sekolah',
        to: '/school'
    },
    {
        icon: IconHotspot__SvelteComponent_,
        title: 'Hotspot',
        to: '/login'
    },
    {
        icon: IconStudent__SvelteComponent_,
        title: 'Class',
        to: '/kelas'
    },
    {
        icon: IconPengaturan__SvelteComponent_,
        title: 'User',
        to: '/user'
    }
];