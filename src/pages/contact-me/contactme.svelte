<script>
	import Link from "../../link.svelte";
</script>

<div id="root">
	<div>
		<div id="me">
			<h3 id="YoHeading">
				Contact Me:
			</h3>
			<h6 id="boutMe">From Fastest to Slowest:</h6>
		</div>
		<div id="links">
			<Link
				link="https://linkedin.com/in/andrinoff"
				text="LinkedIn"
				logo="https://img.icons8.com/?size=100&id=447&format=png&color=FFFFFF"
			/>
			<Link
				link="mailto:realandrinoff@gmail.com"
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

<style>
	#root {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin: 0px;
	}

	#me {
		margin-bottom: 20px;
	}
	#links {
		width: fit-content;
		display: flex;
		flex-direction: column;

		gap: 10px;
	}

	#YoHeading {
		margin: 0px;
		color: aliceblue;
		font-size: 35px;
	}
	#boutMe {
		margin: 0px;
		color: #919191;
		font-size: 12px;
	}
</style>
