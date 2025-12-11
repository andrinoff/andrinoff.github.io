<script lang="ts">
    // Simplified tech stack: only the primary four technologies
    const tech = [
        {
            name: "TS",
            id: "typescript",
            url: "https://www.typescriptlang.org/",
        },
        {
            name: "React",
            id: "react",
            url: "https://reactjs.org/",
        },
        {
            name: "Nextjs",
            id: "nextdotjs",
            url: "https://nextjs.org/",
        },
        {
            name: "Go",
            id: "go",
            url: "https://go.dev/",
        },
    ];
</script>

<section class="techstack" aria-label="Primary tech stack">
    <h1 class="widget-title">~/techstack</h1>

    <ul class="icons" role="list">
        {#each tech as item}
            <li class="icon-item">
                <a
                    class="icon-link"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                >
                    <div class="icon-visual" aria-hidden="true">
                        <img
                            class="tech-icon"
                            src={`https://cdn.simpleicons.org/${item.id}/d8dee9`}
                            alt={item.name}
                            width="24"
                            height="24"
                            loading="lazy"
                        />
                    </div>
                    <span class="icon-label">{item.name}</span>
                </a>
            </li>
        {/each}
    </ul>
</section>

<style>
    .techstack {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        width: 100%;
        align-items: flex-start;

        background: transparent;
    }

    /* Terminal-style widget title (match the other widgets) */
    .widget-title {
        display: block;
        width: 100%;
        box-sizing: border-box;
        font-size: 1.25rem;
        font-weight: 700;
        color: #88c0d0;
        margin: 0 0 0.75rem 0;
        padding: 0 0 0.5rem 0;
        border-bottom: 1px solid #30363d;
    }
    .widget-title::before {
        content: "$  ";
        color: #a3be8c;
        margin-right: 0.25rem;
    }

    .icons {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 0.5rem;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .icon-item {
        display: inline-flex;
    }

    .icon-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        color: inherit;
        padding: 0.25rem;
        background: transparent;
        width: 64px;
        min-width: 64px;
        border-radius: 8px;
        transition:
            transform 0.12s ease,
            box-shadow 0.12s ease;
    }

    .icon-link:focus,
    .icon-link:focus-visible {
        outline: none;
        box-shadow: 0 0 0 4px rgba(136, 192, 208, 0.12);
    }

    .icon-link:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 22px rgba(2, 6, 23, 0.45);
    }

    .icon-visual {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.02);
        margin-bottom: 0.45rem;
    }

    .tech-icon {
        width: 32px;
        height: 32px;
        display: block;
        object-fit: contain;
        opacity: 0.98;
        transition:
            transform 0.12s ease,
            opacity 0.12s ease;
    }

    .icon-label {
        display: block;
        font-size: 0.88rem;
        color: #d8dee9;
        text-align: center;
        line-height: 1.05;
        margin-top: 0;
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }

    /* Medium screens */
    @media (max-width: 900px) {
        .icon-link {
            width: 84px;
            min-width: 84px;
        }
        .icon-visual {
            width: 64px;
            height: 64px;
        }
        .tech-icon {
            width: 48px;
            height: 48px;
        }
        .icon-label {
            font-size: 0.82rem;
        }
    }

    /* Small screens */
    @media (max-width: 520px) {
        .icons {
            gap: 0.75rem;
        }
        .icon-link {
            width: 72px;
            min-width: 72px;
        }
        .icon-visual {
            width: 56px;
            height: 56px;
        }
        .tech-icon {
            width: 40px;
            height: 40px;
        }
        .icon-label {
            font-size: 0.78rem;
        }
    }
</style>
