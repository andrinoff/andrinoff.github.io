<script lang="ts">
    import projects from "$lib/arrays/projects.js";

    const featuredProjectNames = [
        "Plazen",
        "Floatpane",
        "Tesseract",
        "Email CLI",
    ];

    const otherProjects = projects.filter(
        (p) => !featuredProjectNames.includes(p.name),
    );

    const featuredProjects = [
        {
            name: "Plazen",
            tagline: "Smart Calendar with Auto-Planning",
            description:
                "Plazen is a modern calendar application that takes the hassle out of scheduling. With intelligent auto-planning features, it automatically organizes your tasks and events to optimize your productivity. Built with a robust tech stack including React, TailwindCSS, and Prisma with MySQL for reliable data management.",
            tech: ["react", "tailwindcss", "mysql", "prisma", "nextdotjs"],
            link: "https://plazen.org",
            github: "https://github.com/andrinoff/plazen",
            color: "#88c0d0",
            image: "/projects/plazen.png",
        },
        {
            name: "Floatpane",
            tagline: "Minimal Wallpaper Engine",
            description:
                "A beautiful and minimal wallpaper engine designed for both MacOS and Windows. Floatpane brings life to your desktop with dynamic, interactive wallpapers while maintaining a low system footprint. Built with Electron and React for cross-platform compatibility.",
            tech: ["javascript", "electron", "react"],
            link: "https://floatpane.com",
            github: "https://github.com/floatpane",
            color: "#a3be8c",
            image: "/projects/floatpane.png",
        },
        {
            name: "Email CLI",
            tagline: "Beautiful Terminal Email Client, written in Go",
            description:
                "A beautiful email client that runs entirely in your terminal. Email CLI brings a modern, intuitive interface to managing your emails from the command line, with full Gmail integration and a clean aesthetic.",
            tech: ["go", "gmail"],
            link: "https://github.com/andrinoff/email-cli",
            github: "https://github.com/andrinoff/email-cli",
            color: "#bf616a",
            image: "/projects/email-cli.png",
        },
        {
            name: "Tesseract",
            tagline: "4D Hypercube Visualization",
            description:
                "Experience the fourth dimension through this WebGL-powered visualization of a tesseract (4D hypercube) projected into 3D space. Rotate and explore the hypercube to understand higher-dimensional geometry.",
            tech: ["javascript", "webgl"],
            link: "https://andrinoff.com/hypercube",
            github: "https://github.com/andrinoff/hypercube",
            color: "#ebcb8b",
            image: "/projects/tesseract.png",
        },
    ];

    let showDescription = false;

    let currentIndex = 0;

    function nextProject() {
        currentIndex = (currentIndex + 1) % featuredProjects.length;
    }

    function prevProject() {
        currentIndex =
            (currentIndex - 1 + featuredProjects.length) %
            featuredProjects.length;
    }

    function goToProject(index: number) {
        currentIndex = index;
    }

    $: currentProject = featuredProjects[currentIndex];
</script>

<div class="projects-page-container">
    <section class="widget-card carousel-container">
        <h1 class="widget-title">~/featured</h1>

        <div class="carousel">
            <div class="project-showcase">
                {#key currentIndex}
                    <div class="project-content">
                        <img
                            src={currentProject.image}
                            alt={currentProject.name}
                            class="project-image"
                        />
                        <div class="project-overlay">
                            <div class="project-header">
                                <div class="project-titles">
                                    <h2 class="project-name">
                                        {currentProject.name}
                                    </h2>
                                    <p class="project-tagline">
                                        {currentProject.tagline}
                                    </p>
                                </div>
                            </div>

                            <button
                                class="description-toggle"
                                on:click={() =>
                                    (showDescription = !showDescription)}
                            >
                                {showDescription
                                    ? "Hide details"
                                    : "Show details"}
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="toggle-icon"
                                    class:rotated={showDescription}
                                >
                                    <path
                                        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                                    />
                                </svg>
                            </button>

                            {#if showDescription}
                                <p class="project-description">
                                    {currentProject.description}
                                </p>
                            {/if}

                            <div class="tech-stack">
                                {#each currentProject.tech as techIcon}
                                    <img
                                        class="tech-icon"
                                        alt={techIcon}
                                        src="https://cdn.simpleicons.org/{techIcon}/d8dee9"
                                        title={techIcon
                                            .charAt(0)
                                            .toUpperCase() + techIcon.slice(1)}
                                    />
                                {/each}
                            </div>

                            <div class="project-links">
                                <a
                                    href={currentProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="project-link"
                                    title="Visit Project"
                                    aria-label="Visit Project"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href={currentProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="project-link"
                                    title="Source Code"
                                    aria-label="Source Code"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                {/key}
            </div>

            <button
                class="carousel-nav prev"
                on:click={prevProject}
                aria-label="Previous project"
            >
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
            </button>

            <button
                class="carousel-nav next"
                on:click={nextProject}
                aria-label="Next project"
            >
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
            </button>
        </div>
        <div class="carousel-indicators">
            {#each featuredProjects as project, index}
                <button
                    class="indicator"
                    class:active={index === currentIndex}
                    on:click={() => goToProject(index)}
                    aria-label="Go to {project.name}"
                    style="--accent-color: {project.color}"
                ></button>
            {/each}
        </div>

        <div class="project-counter">
            <span class="current">{currentIndex + 1}</span>
            <span class="separator">/</span>
            <span class="total">{featuredProjects.length}</span>
        </div>
    </section>

    <section class="widget-card other-projects-container">
        <h1 class="widget-title">~/other</h1>
        <div class="other-projects-grid">
            {#each otherProjects as project}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="other-project-card"
                >
                    <div class="other-project-header">
                        <h3 class="other-project-name">{project.name}</h3>
                        <div class="other-tech-stack">
                            {#each project.tech as techIcon}
                                <img
                                    class="other-tech-icon"
                                    alt={techIcon}
                                    src="https://cdn.simpleicons.org/{techIcon}/d8dee9"
                                    title={techIcon.charAt(0).toUpperCase() +
                                        techIcon.slice(1)}
                                />
                            {/each}
                        </div>
                    </div>
                    <p class="other-project-description">
                        {project.description}
                    </p>
                    <div class="other-project-type">
                        <span class="type-badge">{project.type}</span>
                    </div>
                </a>
            {/each}
        </div>
    </section>
</div>

<style>
    .projects-page-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .carousel-container {
        position: relative;
    }

    .widget-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #88c0d0;
        margin: 0 0 2rem 0;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #4c566a;
    }

    .widget-title::before {
        content: "$ cat ";
        color: #a3be8c;
    }

    .carousel {
        position: relative;
        width: 100%;
    }

    .carousel-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(46, 52, 64, 0.8);
        border: 1px solid #4c566a;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #d8dee9;
        z-index: 10;
        transition:
            background-color 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease,
            transform 0.2s ease;
    }

    .carousel-nav.prev {
        left: 1rem;
    }

    .carousel-nav.next {
        right: 1rem;
    }

    .carousel-nav:hover {
        background-color: rgba(136, 192, 208, 0.9);
        border-color: #88c0d0;
        color: #2e3440;
        transform: translateY(-50%) scale(1.1);
    }

    .carousel-nav svg {
        width: 24px;
        height: 24px;
    }

    .project-showcase {
        width: 100%;
        min-height: 550px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .project-content {
        position: relative;
        width: 100%;
        height: 550px;
        border-radius: 12px;
        overflow: hidden;
        animation: fadeSlide 0.4s ease-out;
    }

    .project-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .project-content:hover .project-image {
        transform: scale(1.05);
    }

    .project-overlay {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 25%;
        background: linear-gradient(
            to top,
            rgba(46, 52, 64, 0.95) 0%,
            rgba(46, 52, 64, 0.8) 60%,
            transparent 100%
        );
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1rem 1.5rem;
    }

    @keyframes fadeSlide {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .project-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 0.5rem;
    }

    .project-titles {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
    }

    .project-name {
        font-size: 1.5rem;
        font-weight: 700;
        color: #eceff4;
        margin: 0;
    }

    .project-tagline {
        font-size: 0.9rem;
        color: #d8dee9;
        margin: 0;
        font-style: italic;
        opacity: 0.9;
    }

    .project-links {
        display: flex;
        gap: 0.5rem;
        flex-shrink: 0;
    }

    .project-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.15);
        color: #eceff4;
        text-decoration: none;
        transition:
            background-color 0.3s ease,
            transform 0.2s ease;
    }

    .project-link:hover {
        background-color: #88c0d0;
        color: #2e3440;
        transform: scale(1.1);
    }

    .project-link svg {
        width: 18px;
        height: 18px;
    }

    .description-toggle {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        background: transparent;
        border: none;
        padding: 0.25rem 0;
        color: #88c0d0;
        font-size: 0.8rem;
        cursor: pointer;
        margin-bottom: 0.5rem;
        transition: color 0.3s ease;
    }

    .description-toggle:hover {
        color: #8fbcbb;
    }

    .toggle-icon {
        width: 14px;
        height: 14px;
        transition: transform 0.3s ease;
    }

    .toggle-icon.rotated {
        transform: rotate(180deg);
    }

    .project-description {
        font-size: 0.85rem;
        color: #d8dee9;
        line-height: 1.5;
        margin: 0 0 0.5rem 0;
        padding: 0.5rem 0.75rem;
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        border-left: 2px solid #88c0d0;
        animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .tech-stack {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
    }

    .tech-icon {
        width: 18px;
        height: 18px;
        opacity: 0.8;
        transition:
            opacity 0.3s ease,
            transform 0.2s ease;
    }

    .tech-icon:hover {
        opacity: 1;
        transform: scale(1.15);
    }

    .carousel-indicators {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 2rem;
    }

    .indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid #4c566a;
        background-color: transparent;
        cursor: pointer;
        transition:
            background-color 0.3s ease,
            border-color 0.3s ease,
            transform 0.2s ease;
    }

    .indicator:hover {
        border-color: var(--accent-color, #88c0d0);
        transform: scale(1.2);
    }

    .indicator.active {
        background-color: var(--accent-color, #88c0d0);
        border-color: var(--accent-color, #88c0d0);
    }

    .project-counter {
        position: absolute;
        top: 2.5rem;
        right: 2.5rem;
        font-size: 0.9rem;
        color: #4c566a;
    }

    .project-counter .current {
        color: #88c0d0;
        font-weight: 700;
    }

    .project-counter .separator {
        margin: 0 0.25rem;
    }

    @media (max-width: 700px) {
        .carousel-nav {
            width: 40px;
            height: 40px;
        }

        .carousel-nav.prev {
            left: 0.5rem;
        }

        .carousel-nav.next {
            right: 0.5rem;
        }

        .project-showcase {
            min-height: 450px;
        }

        .project-content {
            height: 450px;
        }

        .project-name {
            font-size: 1.2rem;
        }

        .project-overlay {
            height: 30%;
        }

        .project-counter {
            display: none;
        }
    }

    /* Other Projects Section */
    .other-projects-container {
        margin-top: 2rem;
    }

    .other-projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1rem;
    }

    .other-project-card {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding: 1.25rem;
        background-color: rgba(59, 66, 82, 0.4);
        border: 1px solid #4c566a;
        border-radius: 8px;
        text-decoration: none;
        transition:
            background-color 0.3s ease,
            border-color 0.3s ease,
            transform 0.2s ease;
    }

    .other-project-card:hover {
        background-color: rgba(136, 192, 208, 0.1);
        border-color: #88c0d0;
        transform: translateY(-4px);
    }

    .other-project-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 0.75rem;
    }

    .other-project-name {
        font-size: 1.1rem;
        font-weight: 700;
        color: #eceff4;
        margin: 0;
        transition: color 0.3s ease;
    }

    .other-project-card:hover .other-project-name {
        color: #88c0d0;
    }

    .other-tech-stack {
        display: flex;
        gap: 0.5rem;
        flex-shrink: 0;
    }

    .other-tech-icon {
        width: 16px;
        height: 16px;
        opacity: 0.7;
    }

    .other-project-description {
        font-size: 0.9rem;
        color: #d8dee9;
        line-height: 1.5;
        margin: 0;
        flex-grow: 1;
    }

    .other-project-type {
        display: flex;
        align-items: center;
    }

    .type-badge {
        font-size: 0.75rem;
        color: #81a1c1;
        background-color: rgba(129, 161, 193, 0.15);
        padding: 0.25rem 0.6rem;
        border-radius: 12px;
        text-transform: capitalize;
    }

    @media (max-width: 600px) {
        .other-projects-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
