<script>
	import Link from "../../link.svelte";
</script>

<div id="root">
	<Link
		link="#/aboutme"
		text="About"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/978be0e162f6aebd63c1237006f065030a90264e_person_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
	/>
	<Link
		link="#/contactme"
		text="Contact"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/fc3f312e696ec561d201c3ffe0874df1e09e70f0_waving_hand_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
	/>
	<Link
		link="#/Projects"
		text="Projects"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/7b8b6bf02ed987b0e68ce5c2814ea408d666caf5_folder_code_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
	/>
	<Link
		link="https://github.com/andrinoff"
		text="Github"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/f202b6faccfd5cc46299b976c2635fee60b55aa0_github-mark-white.svg"
	/>
</div>

<style>
	#root {
		display: flex;
	}

	@media screen and (max-width: 550px) {
		#root {
			flex-direction: column;
		}
	}
</style>
