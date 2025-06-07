<script>
	import Router from "svelte-spa-router";
	import { location } from "svelte-spa-router";
	import Home from "./pages/home/home.svelte";
	import Aboutme from "./pages/about-me/aboutme.svelte";
	import Contactme from "./pages/contact-me/contactme.svelte";
	import Nav from "./nav.svelte";
	import Projects from "./pages/projects/projects.svelte";

	let routes = {
		"/": Home,
		"/aboutme": Aboutme,
		"/contactme": Contactme,
		"/projects": Projects,
	};
</script>

<div id="root">
	{#if $location !== "/"}
		<Nav />
	{/if}
	<div id="content">
		<Router {routes} />
	</div>
</div>

<style>
	:root {
		background-color: black;
		color: white;
	}

	* {
		font-family: "Funnel Display", sans-serif;
		font-optical-sizing: auto;
		font-weight: 300;
		font-style: normal;
	}

	#root {
		height: 100%;
		display: flex;
		flex-direction: column;
		margin: 0;
	}

	#content {
		flex: 1;
	}
</style>
