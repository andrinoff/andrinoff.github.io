<script>
	let Projects = [
		{
			Name: "Personal Website",
			Description: "This awesome website about me and my projects!",
			Image: "https://i.imgur.com/5zHfTeQ.png",
			Images: ["Javascript", "svelte", "vite"],
			Link: "https://andrinoff.github.io",
		},
		{
			Name: "Work Progress",
			Description:
				"A VS Code extension that shows your work progress in a nice way.",
			Image: "https://github.com/work-progress/assets/raw/master/banners/banner-work-progress-white.png?raw=true",
			Images: ["typescript", "nextdotjs", "tailwindcss"],
			Link: "https://github.com/work-progress",
		},
		{
			Name: "Anglobotik",
			Description:
				"A Telegram bot that helps you mock English writing exam",
			Image: "https://github.com/andrinoff/anglobotik/raw/main/docs/icon.jpg",
			Images: ["python", "telegram", "openai"],
			Link: "https://github.com/andrinoff/anglobotik",
		},
		{
			Name: "Currency Converter",
			Description:
				"A Telegram bot with multi-language support",
			Image: "https://www.investopedia.com/thmb/lSMOlzF853E72-0HDkH25mmAdOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-848755326-48dd2711646247648c4faebc98715119.jpg",
			Images: ["python", "sqlite", "telegram"],
			Link: "https://github.com/andrinoff/TelegramCurrencyConverter",
		},
	];
</script>

<div id="root">
	<h1>My Projects</h1>
	<div id="grid">
		{#each Projects as Project}
			<div class="project-card">
				<h2>{Project.Name}</h2>
				<p>{@html Project.Description}</p>
				<div class="image-gallery">
					{#each Project.Images as Image}
						<img
							class="gallery-image"
							alt="Project Tech Stack"
							src="https://cdn.simpleicons.org/{Image}/grey"
						/>
					{/each}
				</div>
				<div class ="image-cover">
				<img class="main-image" src={Project.Image} alt="Project" />
				</div>
				<a href={Project.Link} target="_blank"
					><button class="ViewProject"> Open Project </button></a
				>
			</div>
		{/each}
	</div>
</div>

<style>
	#root {
		display: flex;
		flex-direction: column;
		margin: 0;
		align-items: center;
	}
	h2,
	p {
		margin: 0;
	}

	p {
		color: #818181;
	}
	#grid {
		display: flex;
		flex-wrap: wrap;
		max-width: 1200px;
		justify-content: center;
	}

	.project-card {
		border: 3px solid #333;
		width: 250px;
		margin: 10px;
		padding: 5px;
		padding-bottom: 0px;
	}
	.image-gallery {
		display: flex;
		gap: 10px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.gallery-image {
		width: 30px;
		height: 30px;
		object-fit: cover;
	}
	.image-cover {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
	}
	.main-image {
		height: 146px;
		max-width: 246px;
		text-align: center;
		border: 2px solid #2e2e2e;
	}
	.ViewProject {
		background-color: #242424;
		color: white;
		border: none;
		margin-bottom: 5px;
		padding: 10px;
		width: 100%;
		cursor: pointer;
		font-size: 16px;
		font-family: "Funnel Display", sans-serif;
		transition: all 0.3s ease;
	}
	.ViewProject:hover {
		background-color: #333;
		transform: scale(1.05) rotateZ(-5deg);
	}
</style>
