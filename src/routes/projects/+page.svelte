<script>
    import projects from "$lib/arrays/projects.js";
    // Get unique types from the projects array
    const types = [...new Set(projects.map((p) => p.type))];
</script>

<div class="projects-page-container">
    {#each types as type, typeIndex}
        <section class="widget-card">
            <h1 class="widget-title">~/projects/{type}</h1>
            <div class="projects-list">
                {#each projects.filter((p) => p.type === type) as project}
                    <div class="project-item">
                        <div class="project-header">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="project-name"
                            >
                                {project.name}
                            </a>
                            <div class="tech-stack">
                                {#each project.tech as techIcon}
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
                        </div>
                        <p class="project-description">
                            {@html project.description}
                        </p>
                    </div>
                {/each}
            </div>
        </section>
    {/each}
</div>

<style>
    /* Inherit the global styles from the layout for font and background */

    .projects-page-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        align-items: start;
    }

    .widget-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #88c0d0;
        margin: 0 0 1.5rem 0;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #4c566a;
        flex-shrink: 0;
    }

    .widget-title::before {
        content: "$ ls ";
        color: #a3be8c;
    }

    .projects-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .project-item {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

    .project-name {
        font-size: 1.25rem;
        font-weight: 700;
        color: #eceff4;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .project-name:hover {
        color: #88c0d0;
    }

    .project-description {
        color: #d8dee9;
        line-height: 1.6;
        margin: 0;
    }

    .project-description :global(a) {
        color: #81a1c1;
        text-decoration: none;
        border-bottom: 1px dashed #81a1c1;
    }
    .project-description :global(a:hover) {
        color: #88c0d0;
        border-bottom-color: #88c0d0;
    }

    .tech-stack {
        display: flex;
        gap: 0.75rem;
        flex-shrink: 0;
    }

    .tech-icon {
        width: 20px;
        height: 20px;
        opacity: 0.6;
    }

    @media (max-width: 600px) {
        .projects-page-container {
            grid-template-columns: 1fr;
        }
        .widget-card {
            padding: 1.5rem;
        }
        .project-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
        }
    }
</style>
