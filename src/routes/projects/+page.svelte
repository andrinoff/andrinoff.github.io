<script>
  import Link from "../../link.svelte";

    let Projects = [
        {
            Name: "Personal Website",
            Description: "This awesome website about me and my projects!",
            Image: "https://i.imgur.com/5zHfTeQ.png",
            Images: ["Javascript", "svelte", "vite"],
            Link: "https://andrinoff.github.io",
            Type: "fullstack",
        },
        {
            Name: "Work Progress",
            Description:
                "A VS Code extension that shows your work progress in a nice way.",
            Image: "https://github.com/andrinoff/work-progress.github.io/blob/master/icon.png?raw=true",
            Images: ["typescript"],
            Link: "https://github.com/andrinoff/work-progress",
            Type: "fullstack",
        },
        {
            Name: "Anglobotik",
            Description:
                "A Telegram bot that helps you mock English writing exam",
            Image: "https://github.com/andrinoff/anglobotik/raw/main/docs/icon.jpg",
            Images: ["python", "telegram", "openai"],
            Link: "https://github.com/andrinoff/anglobotik",
            Type: "backend",
        },
        {
            Name: "Currency Converter",
            Description:
                "A Telegram bot with multi-language support",
            Image: "https://www.investopedia.com/thmb/lSMOlzF853E72-0HDkH25mmAdOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-848755326-48dd2711646247648c4faebc98715119.jpg",
            Images: ["python", "sqlite", "telegram"],
            Link: "https://github.com/andrinoff/TelegramCurrencyConverter",
            Type: "backend",
        },
        {
            Name: "Tbilisi Hack Club Website",
            Description:
                "A website for Tbilisi Hack Club",
            Image: "https://i.imgur.com/bfV8QXt.png",
            Images: ["svelte", "tailwindcss", ],
            Link: "https://tbilisi.hackclub.com",
            Type: "frontend",
        },
        {
            Name: "Bot API",
            Description: "A customizable API that sends your message in different channels",
            Image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzt4zmavxge1lg5u7lkp7.jpg",
            Images: ["vercel", "go"],
            Link: "https://github.com/andrinoff/bot-api",
            Type: "backend",
        },
        {
            Name: "Organization auto-join",
            Description: "An API that automatically invites you to the set organization team",
            Image: "https://www.cril.univ-artois.fr/pyxai/assets/figures/github.png",
            Images: ["javascript", "vercel"],
            Link: "https://github.com/andrinoff/bot-api",
            Type: "backend",
        }

    ];

    // Get unique types
    let types = [...new Set(Projects.map(p => p.Type))];
</script>

<div id="root">
    <h1>My Projects</h1>
    {#each types as type}
        <h2 style="margin-top:2em">{type.charAt(0).toUpperCase() + type.slice(1)} Projects</h2>
        <div id="grid">
            {#each Projects.filter(p => p.Type === type) as Project}
                <div class="project-card">
                    <div class="card-content">
                        {#if Project.Name}
                            <h2>{Project.Name}</h2>
                        {/if}
                        <p>{@html Project.Description}</p>
                    </div>
                    <div class="image-gallery">
                        {#each Project.Images as Image}
                            <img
                                class="gallery-image"
                                alt="Project Tech Stack"
                                src="https://cdn.simpleicons.org/{Image}/grey"
                            />
                        {/each}
                    </div>
                    <div class="image-cover">
                        <img class="main-image" src={Project.Image} alt="Project" />
                    </div>
                    <a href={Project.Link} target="_blank" class="project-link">
                        <button class="ViewProject">Open Project</button>
                    </a>
                </div>
            {/each}
        </div>
    {/each}
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
        padding: 5px;
    }

    p {
        color: #818181;
    }
    #grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        max-width: 1200px;
        justify-content: center;
        
    }

    .project-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border: 3px solid #333;
        width: 250px;
        margin: 10px;
        padding: 5px;
        padding-bottom: 0px;
    }

    .card-content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
    .project-link {
        width: 100%;
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