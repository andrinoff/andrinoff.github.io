<script>
  import Link from "../../link.svelte";

  let Projects = [
    {
      Name: "Work Progress",
      Description:
        "A VS Code extension that shows your work progress in a nice way.",
      Image:
        "https://github.com/andrinoff/work-progress.github.io/blob/master/icon.png?raw=true",
      Images: ["typescript"],
      Link: "https://github.com/andrinoff/work-progress",
      Type: "fullstack",
    },
    {
      Name: "Anglobotik",
      Description: "A Telegram bot that helps you mock English writing exam",
      Image: "https://github.com/andrinoff/anglobotik/raw/main/docs/icon.jpg",
      Images: ["python", "telegram", "openai"],
      Link: "https://github.com/andrinoff/anglobotik",
      Type: "backend",
    },
    {
      Name: "Bot API",
      Description:
        "A customizable API that sends your message in different channels",
      Image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzt4zmavxge1lg5u7lkp7.jpg",
      Images: ["vercel", "go"],
      Link: "https://github.com/andrinoff/bot-api",
      Type: "backend",
    },
    {
      Name: "Organization auto-join",
      Description:
        "An API that automatically invites you to the set organization team",
      Image: "https://www.cril.univ-artois.fr/pyxai/assets/figures/github.png",
      Images: ["javascript", "vercel"],
      Link: "https://github.com/andrinoff/org-auto-invite",
      Type: "backend",
    },
    {
      Name: "Infinite Wordle",
      Description:
        "A Wordle copy. Was made for a technical interview, and finished afterwards",
      Image: "https://i.imgur.com/3UTklGw.png",
      Images: ["html5", "javascript", "css"],
      Link: "https://wordle.andrinoff.com",
      Type: "fullstack",
    },
    {
      Name: "Assets Viewer",
      Description:
        "A website that helps you view assets in a repository in a user-friendly way",
      Image: "https://i.imgur.com/sWVh3Cn.png",
      Images: ["html5", "javascript", "css"],
      Link: "https://github.com/tbilisihc/assets",
      Type: "fullstack",
    },
    {
      Name: "2048",
      Description:
        "Recreation of the classic 2048 game using just HTMl, CSS, and JavaScript",
      Image: "https://i.imgur.com/s0BsvsX.png",
      Images: ["html5", "javascript", "css"],
      Link: "https://github.com/tbilisihc/assets",
      Type: "fullstack",
    },
    {
      Name: "Liquid Simulator",
      Description: "WebGL liquid simulation",
      Image: "https://i.imgur.com/gDcUQuD.png",
      Images: ["javascript", "webgl", "c"],
      Link: "https://github.com/andrinoff/liquid-metal",
      Type: "Interesting",
    },
    {
      Name: "Particles",
      Description: "WebGL particle simulation.",
      Image: "https://i.imgur.com/NK8q0wX.png",
      Images: ["javascript", "webgl", "c"],
      Link: "https://github.com/andrinoff/particles",
      Type: "Interesting",
    },
    {
      Name: "Tesseract",
      Description: "4d Hypercube drawn with WebGL",
      Image: "https://i.imgur.com/XCDG3aY.png",
      Images: ["javascript", "webgl", "c"],
      Link: "https://github.com/andrinoff/hypercube",
      Type: "Interesting",
    },
  ];

  // Get unique types
  let types = [...new Set(Projects.map((p) => p.Type))];
</script>

<div id="root">
  <h1 class="text-3xl md:text-4xl font-bold text-center mt-10">My Projects</h1>
  {#each types as type}
    <h1 class="mb-10 mt-20 text-2xl font-bold text-center">
      {type.charAt(0).toUpperCase() + type.slice(1)} Projects
    </h1>
    <div id="grid">
      {#each Projects.filter((p) => p.Type === type) as Project}
        <div class="project-card">
          <div class="card-content">
            {#if Project.Name}
              <h1 class="text-xl font-bold">{Project.Name}</h1>
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
    padding: 0 10px; /* Add some padding for small screens */
  }
  h2,
  p {
    margin: 0;
    padding: 5px;
  }

  p {
    color: #818181;
    text-align: center;
  }
  #grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1200px;
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
  }
  .ViewProject:hover {
    background-color: #333;
  }

  /* --- Styles for Tablets --- */
  @media (max-width: 1024px) {
    #grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* --- Styles for Mobile Phones --- */
  @media (max-width: 768px) {
    #grid {
      grid-template-columns: 1fr;
    }
  }
</style>
