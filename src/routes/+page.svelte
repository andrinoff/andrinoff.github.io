<script>
  import Link from "../link.svelte";
  import Clock from "./clock.svelte";
</script>

<div id="root">
	<div>
		<div id="text">
			<img src = "https://tbilisi.hackclub.com/drew/avatar.png" style="min-width: 200px; max-width: 200px; min-height: 200px; max-height: 200px; object-fit: cover; border-radius: 50%;" alt="Drew's Avatar" />
			<div id  = "textContent">
			<h1 id="YoHeading" class = "md: text-1xl" >Drew <br /> (どりゅう)</h1>
			<h5 id="boutMe">
				Software engineer <br/> Based in Tbilisi<img
					id="whitespace"
					src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/1feaf8b5942eca66775bc7ccadc8619cbf54cd07_1af71bf06d88b950.png"
					alt="!"
				/>
			</h5>
			</div>
		</div>
		<hr />
		
	</div>
	<div id="root">
	<div>
		<div id="me" class = "align-center flex-col text-center">
		</div>
		<div id="links" class = "flex text-center justify-center">
			<Link
				link="https://linkedin.com/in/andrinoff"
				text="LinkedIn"
				logo="https://img.icons8.com/?size=100&id=447&format=png&color=FFFFFF"
			/>
			<Link
				link="mailto:business@andrinoff.com"
				text="Email"
				logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/b9d8a2dc71ce904752fe9257ab095c12b8c66e71_forward_to_inbox_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
			/>
			<Link
				link="https://t.me/andrinoff"
				text="Telegram"
				logo="https://cdn.simpleicons.org/telegram/white"
			/>
			<Link
				link="https://instagram.com/andrinoff.dev"
				text="Instagram"
				logo="https://cdn.simpleicons.org/instagram/white"
			/>
		</div>
	</div>
</div>
<Clock />
</div>

<style>
	#root {
		display: grid;
		place-content: center;
		height: 100%;
		margin: 0px;
	}

	#text {
		margin: 20px;
		display: flex;
		flex-direction: row;
	}

	#textContent {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 20px;
	}
	#links {
		width: fit-content;
		margin: 20px;
	}

	#YoHeading {
		margin: 0px;
		color: aliceblue;
		font-size: 50px;
	}
	#boutMe {
		margin: 0px;
		color: #818181;
	}
	

	#whitespace {
		width: 40px;
		height: 10px;
		opacity: 0;
	}
	hr {
		width: 100%;
		border: 1px solid #242424;
	}
</style>
