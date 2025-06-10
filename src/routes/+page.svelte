<script>
	import Links from "./links.svelte";
</script>

<div id="root">
	<div>
		<div id="text">
			<img src = "https://avatars.githubusercontent.com/u/175145001?v=4" style="min-width: 200px; max-width: 200px; min-height: 200px; max-height: 200px; object-fit: cover; border-radius: 50%;" alt="Drew's Avatar" />
			<div id  = "textContent">
			<h1 id="YoHeading">Drew (どりゅう)</h1>
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
