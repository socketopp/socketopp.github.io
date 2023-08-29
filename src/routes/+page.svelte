<script>
	import { isFirefox } from '$lib/Browser';

	import sky from '$lib/assets/firewatch/v3/sky.png';
	import foreground from '$lib/assets/firewatch/v3/foreground.png';
	import forrest from '$lib/assets/firewatch/v3/forrest.png';
	import peak from '$lib/assets/firewatch/v3/peak.png';
	import { avatar, bio, name } from '$lib/info';
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<section class="h-screen">
	<header
		class="relative flex justify-center items-center h-screen z-[-10] overflow-x-hidden overflow-y-auto"
	>
		<div
			style={`background-image: url(${sky})`}
			class="bg-no-repeat fixed h-full w-full bg-cover z-[-1]"
			style:transform={`translate3d(0, ${scroll * 0.9}px, 0)`}
		/>

		<div
			style={`background-image: url(${peak})`}
			class="bg-no-repeat fixed h-full w-full bg-cover z-[-1]"
			style:transform={`translate3d(0, ${scroll * 0.8}px, 0)`}
		/>

		<div
			style={`background-image: url(${forrest})`}
			class="bg-no-repeat fixed h-full w-full bg-cover z-[-1]"
			style:transform={`translate3d(0, ${scroll * 0.6}px, 0)`}
		/>
		<h1
			class="text-6xl font-carter font-bold fixed px-4 top-[5rem] sm:top-[8rem] md:top-[10rem]
	 z-[-1]"
			style:transform={`translate3d(0, ${scroll * 1}px, 0)`}
			class:text-mozilla={isFirefox}
			class:text-chrome={!isFirefox}
		>
			Looking for directions?
		</h1>
		<div
			style={`background-image: url(${foreground})`}
			class="bg-no-repeat fixed h-full w-full bg-cover z-[-1]"
			style:transform={`translate3d(0, ${scroll * 0.009}px, 0)`}
		/>
	</header>

	<div
		class="text-white w-full h-[800px] p-4 sm:p-20"
		class:bg-mozilla={isFirefox}
		class:bg-chrome={!isFirefox}
	>
		<section class="flex flex-col items-center gap-16 pb-16">
			<div class="flex flex-col items-center w-full gap-6 rounded-lg">
				<h1 class="text-white text-5xl font-carter mb-4 font-bold">Welcome to my Github page</h1>
				<img
					src={avatar}
					alt={name}
					class="mx-auto rounded-full w-48 h-48 ring-2 ring-zinc-200 dark:ring-zinc-700"
				/>
				<div class="flex gap-6">
					<SocialLinks />
				</div>
				<p class="max-w-3xl min-w-md text-base sm:text-lg text-white dark:text-zinc-400">
					{bio}
				</p>
			</div>
		</section>
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
