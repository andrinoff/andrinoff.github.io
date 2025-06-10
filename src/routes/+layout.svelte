<script>
	import Links from "../links.svelte";
</script>

<div id="root">

	<Links />
</div>
<hr>
<slot />

<style>
	#root {
		display: flex;
		justify-content: space-between;
		margin: 10px;
		border-radius: 10px;
	}
	@media (max-width: 620px) {
		#root {
			flex-direction: column;
			align-items: center;
		}
		#YoHeading {
			text-align: center;
		}
	}

	#me {
		display: flex;
		margin: 10px;
		align-items: center;
	}
	#YoHeading {
		margin: 0px;
		color: aliceblue;
		font-size: 30px;
	}

	hr {
		width: 99%;
		border: 1px solid #242424;
	}
</style>
