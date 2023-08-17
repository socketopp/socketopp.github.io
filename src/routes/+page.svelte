<script>
	import sky from '$lib/assets/range/sky.png';
	import foreground from '$lib/assets/range/foreground.png';
	import orange_valley from '$lib/assets/range/orange_valley.png';
	import pink_valley from '$lib/assets/range/pink_valley.png';
	import purple_valley from '$lib/assets/range/purple_valley.png';
	import sun from '$lib/assets/range/sun.png';
	import birds from '$lib/assets/range/birds.png';
	import { isFirefox } from '../lib/Browser';

	console.log('isFirefox', isFirefox);

	let scroll;
	let speed = 0.4;
</script>

<svelte:window bind:scrollY={scroll} />

<section class="h-screen">
	<header
		class="relative flex justify-center items-center h-full z-[-10] overflow-x-hidden overflow-y-auto"
	>
		<div
			style={`background-image: url(${sky})`}
			class="fixed h-full w-full object-cover z-[-1]"
			style:transform={`translate3d(0, ${scroll * 0.9}px, 0)`}
		/>
		<div
			style={`background-image: url(${sun})`}
			class="fixed h-full w-full object-cover z-[-1]"
			style:transform={`translate3d(${scroll * 0.05}px, ${scroll * 1.09}px, 0)`}
		/>
		<div
			style={`background-image: url(${orange_valley})`}
			class="fixed h-full w-full object-cover z-[-1]"
			style:transform={`translate3d(0, ${scroll * 0.9}px, 0)`}
		/>

		<div
			style={`background-image: url(${pink_valley})`}
			class="fixed h-full w-full object-cover z-[-1]"
			style:transform={`translate3d(0, ${scroll * 0.8}px, 0)`}
		/>
		<div
			style={`background-image: url(${purple_valley})`}
			class="fixed h-full w-full object-cover z-[-1]"
			style:transform={`translate3d(0, ${scroll * 0.6}px, 0)`}
		/>
		<div
			style={`background-image: url(${birds})`}
			class="fixed h-full w-full object-cover z-[-1] top-[5rem] right-[30rem]"
			style:transform={`translate3d( ${scroll * 0.5}px, ${scroll * 0.8}px, ${scroll * 4}px)`}
		/>
		<div
			style={`background-image: url(${foreground})`}
			class="fixed h-full w-full object-cover z-[-1]"
			style:transform={`translate3d(0, ${scroll * 0.1}px, 0)`}
		/>

		<h1 class="text-[#40002c] text-6xl font-carter font-normal">Welcome</h1>
	</header>

	<div
		class="text-white w-full h-[900px]"
		class:bg-mozilla={isFirefox}
		class:bg-chrome={!isFirefox}
	>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Adipiscing vitae proin sagittis nisl rhoncus. Suspendisse potenti
		nullam ac tortor. Eget mi proin sed libero enim sed faucibus turpis in. Amet nisl suscipit
		adipiscing bibendum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Dis parturient
		montes nascetur ridiculus mus mauris. Felis bibendum ut tristique et egestas quis ipsum
		suspendisse. Sollicitudin aliquam ultrices sagittis orci a. Tortor aliquam nulla facilisi cras
		fermentum odio eu feugiat. Cursus euismod quis viverra nibh. Turpis egestas maecenas pharetra
		convallis posuere morbi. Dui sapien eget mi proin. Enim blandit volutpat maecenas volutpat
		blandit aliquam etiam erat velit. Varius morbi enim nunc faucibus a pellentesque sit amet
		porttitor. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing
		bibendum est ultricies integer quis auctor elit sed vulputate. Sed pulvinar proin gravida
		hendrerit. Vestibulum sed arcu non odio euismod lacinia at. Condimentum id venenatis a
		condimentum vitae sapien pellentesque. Feugiat pretium nibh ipsum consequat nisl. Felis
		imperdiet proin fermentum leo vel. Cursus vitae congue mauris rhoncus. Vulputate eu scelerisque
		felis imperdiet. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Enim
		sed faucibus turpis in eu mi. Amet cursus sit amet dictum sit. Vitae semper quis lectus nulla at
		volutpat diam. Ornare arcu odio ut sem nulla. Tellus elementum sagittis vitae et leo duis ut
	</div>
</section>

<style lang="postcss">
	section {
		scrollbar-width: none;
	}
	header {
		transform-style: preserve-3d;
	}
</style>
