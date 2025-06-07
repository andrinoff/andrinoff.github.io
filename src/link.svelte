<script>
	let props = $props();
</script>

<div id="root">
	<a href={props.link}>
		<img src={props.logo} alt="logo" />&nbsp;
		<h3>{props.text}</h3>
		<svg
			stroke-width="2"
			stroke="currentColor"
			viewBox="0 0 24 24"
			fill="none"
			class="h-6 w-6"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14 5l7 7m0 0l-7 7m7-7H3"
				stroke-linejoin="round"
				stroke-linecap="round"
			></path>
		</svg>
	</a>
</div>

<style>
	#root {
		display: flex;
		align-items: center;
		margin: 0;
	}

	h3 {
		margin: 0;
	}

	a {
		display: flex;
		align-items: center;
		margin-right: 20px;
		margin-left: 0;
		border-radius: 5px;
		text-decoration: none;
		color: white;
		transition: all 0.2s linear;
	}

	svg {
		transform: rotate(90deg);
		transition: all 0.2s linear;
		opacity: 0;
		width: 0px;
	}

	a:hover svg {
		transform: rotate(-45deg);
		width: 20px;
		opacity: 1;
	}

	img {
		width: 24px;
		height: 24px;
	}
</style>