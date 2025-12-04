<!-- Mock change -->

<script>
    import { onMount, onDestroy } from "svelte";
    import items from "$lib/arrays/items.js";
    const NUM_COLUMNS = 3;
    let columns = [];

    // Distribute and shuffle items into columns for a more random look
    for (let i = 0; i < NUM_COLUMNS; i++) {
        const shuffled = [...items].sort(() => 0.5 - Math.random());
        // Duplicate for seamless looping
        columns.push([...shuffled, ...shuffled, ...shuffled]);
    }

    let columnElements = [];
    let animationFrameIds = [];

    onMount(() => {
        columnElements.forEach((columnEl, i) => {
            if (!columnEl) return;

            const isScrollingDown = i % 2 === 0;
            // Adjust scrollHeight calculation to account for the duplicated content for looping
            const scrollHeight = columnEl.scrollHeight / 3;
            let scrollTop = isScrollingDown ? 0 : scrollHeight;
            const speed = 0.2 + Math.random() * 0.3; // Slightly slower and more consistent speed

            const animate = () => {
                if (isScrollingDown) {
                    scrollTop += speed;
                    if (scrollTop >= scrollHeight) {
                        scrollTop = 0;
                    }
                } else {
                    // Scrolling Up
                    scrollTop -= speed;
                    if (scrollTop <= 0) {
                        scrollTop = scrollHeight;
                    }
                }

                if (columnEl) {
                    columnEl.scrollTop = scrollTop;
                }
                animationFrameIds[i] = requestAnimationFrame(animate);
            };

            animate();
        });
    });

    onDestroy(() => {
        animationFrameIds.forEach((id) => cancelAnimationFrame(id));
    });
</script>

<!-- The component is now just the scroller itself, designed to be placed inside a .widget-card -->
<h1 class="widget-title">~/tech-stack</h1>
<div class="scroller-waterfall-container">
    {#each columns as columnItems, i}
        <div class="scroller-column">
            <div class="scroller-content" bind:this={columnElements[i]}>
                {#each columnItems as item}
                    <div class="tech-item" title={item.name}>
                        <img
                            src="https://cdn.simpleicons.org/{item.image}/d8dee9"
                            alt="{item.name} icon"
                            class="tech-icon"
                        />
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    /* This component is now self-contained and includes its own title */
    .widget-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #88c0d0;
        margin: 0 0 1.5rem 0;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #30363d;
    }

    .widget-title::before {
        content: "$ ";
        color: #a3be8c;
    }

    .scroller-waterfall-container {
        display: flex;
        justify-content: center;
        gap: 1rem;
        height: 465px; /* Adjusted height */
        width: 100%;
        position: relative;
        overflow: hidden;
        /* Updated mask for a smoother fade */
        -webkit-mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 85%,
            transparent
        );
        mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 85%,
            transparent
        );
    }

    .scroller-column {
        height: 100%;
        flex: 1; /* Allow columns to grow and shrink */
    }

    .scroller-content {
        height: 100%;
        overflow-y: scroll;
        /* Hide scrollbars */
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .scroller-content::-webkit-scrollbar {
        display: none;
    }

    .tech-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 100%; /* Take full width of the column */
        background-color: transparent; /* Match the widget background */
        border: 1px solid #30363d;
        border-radius: 8px;
        margin-bottom: 1rem;
        transition:
            background-color 0.2s ease,
            border-color 0.2s ease;
    }

    .tech-item:hover {
        background-color: rgba(136, 192, 208, 0.1);
        border-color: #88c0d0;
    }

    .tech-icon {
        width: 40px;
        height: 40px;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    }

    .tech-item:hover .tech-icon {
        opacity: 1;
    }

    @media (max-width: 600px) {
        .scroller-waterfall-container {
            gap: 0.75rem;
        }
        .tech-item {
            height: 70px;
        }
        .tech-icon {
            width: 32px;
            height: 32px;
        }
    }
</style>
