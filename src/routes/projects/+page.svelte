<!-- +page.svelte -->
<script>
  // No need to import Link here unless you use it for something else.
  // The project data is now self-contained in this component.

  // Array of project objects
  let projects = [
    {
      name: "Work Progress",
      description:
        "A VS Code extension that shows your work progress in a nice way.",
      image:
        "https://github.com/andrinoff/work-progress.github.io/blob/master/icon.png?raw=true",
      tech: ["typescript", "vscodium"],
      link: "https://github.com/andrinoff/work-progress",
      type: "fullstack",
    },
    {
      name: "Anglobotik",
      description:
        "A Telegram bot that helps you mock an English writing exam.",
      image: "https://github.com/andrinoff/anglobotik/raw/main/docs/icon.jpg",
      tech: ["python", "telegram", "openai"],
      link: "https://github.com/andrinoff/anglobotik",
      type: "backend",
    },
    {
      name: "Bot API",
      description:
        "A customizable API that sends your message in different channels.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbI9dX4sO8hm_qoSSXy0QNpDNshfdoiQ1KA&s",
      tech: ["vercel", "go"],
      link: "https://github.com/andrinoff/bot-api",
      type: "backend",
    },
    {
      name: "Organization Auto-Join",
      description:
        "An API that automatically invites you to a set organization team.",
      image:
        "https://freepnglogo.com/images/all_img/github-white-logo-d748.png",
      tech: ["javascript", "vercel", "github"],
      link: "https://github.com/andrinoff/org-auto-invite",
      type: "backend",
    },
    {
      name: "Infinite Wordle",
      description:
        "A Wordle copy made for a technical interview, and finished afterwards.",
      image: "https://i.imgur.com/3UTklGw.png",
      tech: ["html5", "javascript", "css"],
      link: "https://wordle.andrinoff.com",
      type: "fullstack",
    },
    {
      name: "Liquid Simulator",
      description: "A liquid metal simulation built with WebGL.",
      image: "https://i.imgur.com/gDcUQuD.png",
      tech: ["javascript", "webgl", "c"],
      link: "https://github.com/andrinoff/liquid-metal",
      type: "other",
    },
    {
      name: "Particles",
      description: "A GPU-accelerated particle simulation using WebGL.",
      image: "https://i.imgur.com/NK8q0wX.png",
      tech: ["javascript", "webgl", "c"],
      link: "https://github.com/andrinoff/particles",
      type: "other",
    },
    {
      name: "Tesseract",
      description:
        "A 4D hypercube (tesseract) rendered in 3D space with WebGL.",
      image: "https://i.imgur.com/XCDG3aY.png",
      tech: ["javascript", "webgl"],
      link: "https://github.com/andrinoff/hypercube",
      type: "other",
    },
  ];

  // Get unique types from the projects array
  const types = [...new Set(projects.map((p) => p.type))];
</script>

<div class="projects-page-container">
  <h1 class="page-title">My Projects</h1>
  <p class="page-subtitle">A collection of things I've built.</p>

  {#each types as type, typeIndex}
    <section
      class="project-type-section"
      style="animation-delay: {typeIndex * 200 + 200}ms"
    >
      <h2 class="section-title">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </h2>
      <div class="projects-grid">
        {#each projects.filter((p) => p.type === type) as project, projectIndex}
          <div
            class="project-card"
            style="animation-delay: {projectIndex * 100}ms"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              class="image-link"
            >
              <img
                class="project-image"
                src={project.image}
                alt="{project.name} preview"
              />
            </a>
            <div class="card-content">
              <h3 class="project-name">{project.name}</h3>
              <p class="project-description">{@html project.description}</p>
              <div class="tech-stack">
                {#each project.tech as techIcon}
                  <img
                    class="tech-icon"
                    alt={techIcon}
                    src="https://cdn.simpleicons.org/{techIcon}/white"
                    title={techIcon.charAt(0).toUpperCase() + techIcon.slice(1)}
                  />
                {/each}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              class="project-link-button"
            >
              View Project
            </a>
          </div>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style>
  .projects-page-container {
    width: 100%;
  }

  .page-title,
  .page-subtitle,
  .project-type-section,
  .project-card {
    opacity: 0;
    animation: floatIn 0.7s ease-out forwards;
  }

  .page-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 0.5rem;
    animation-delay: 0.1s;
  }

  .page-subtitle {
    text-align: center;
    font-size: 1.1rem;
    color: #8b949e;
    margin-bottom: 4rem;
    animation-delay: 0.2s;
  }

  .project-type-section {
    margin-bottom: 4rem;
    margin-right: 20px;
    margin-left: 20px;
  }

  .section-title {
    font-size: 2rem;
    color: #c9d1d9;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #30363d;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background-color: #161b22;
    border: 1px solid #30363d;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition:
      transform 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .image-link {
    display: block;
    height: 200px;
    background-color: #0d1117;
  }

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom: 1px solid #30363d;
  }

  .card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .project-name {
    font-size: 1.5rem;
    margin: 0 0 0.75rem 0;
  }

  .project-description {
    color: #8b949e;
    line-height: 1.6;
    flex-grow: 1;
  }

  .tech-stack {
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .tech-icon {
    width: 24px;
    height: 24px;
    opacity: 0.7;
  }

  .project-link-button {
    display: block;
    background-color: #21262d;
    color: #c9d1d9;
    text-align: center;
    padding: 0.75rem;
    margin: 1.5rem 1.5rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    transition: background-color 0.2s ease;
  }

  .project-link-button:hover {
    background-color: #30363d;
    text-decoration: none;
    color: #f0f6fc;
  }

  /* Keyframes for the animation */
  @keyframes floatIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
