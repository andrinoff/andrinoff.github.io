<script>
    import { onMount, onDestroy } from "svelte";

    // --- Component State ---
    let scrollerElement;
    let isHovering = false;
    let animationFrameId = null;

    // State for smooth scrolling
    let currentScroll = 0;
    let targetScroll = 0;
    let lastTouchY = 0;
    let isTouching = false;

    // --- Data State (Now dynamic) ---
    let appreciations = [];
    let isLoading = true;
    let fetchError = null;

    // --- Logic ---
    onMount(async () => {
        // Fetch data from our new API endpoint
        try {
            const response = await fetch(
                "https://appreciations.andrinoff.com/api/get_appreciations",
            );
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.details || "Failed to fetch appreciations",
                );
            }
            const data = await response.json();

            // Map the database fields (text, author_name) to the component's expected fields (quote, source)
            appreciations = data.map((item) => ({
                quote: item.text,
                source: item.author_name || "Anonymous", // Provide a default for anonymous entries
            }));
        } catch (err) {
            fetchError = err.message;
            console.error("Fetch Error:", err);
        } finally {
            isLoading = false;
        }

        // Start the main animation loop
        animationFrameId = requestAnimationFrame(runSmoothScroll);

        // Cleanup when the component is destroyed
        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    });

    // Reactive statement to duplicate the array for a seamless infinite scroll effect
    $: messagesToDisplay =
        appreciations.length > 0 ? [...appreciations, ...appreciations] : [];

    function runSmoothScroll() {
        if (!scrollerElement) {
            animationFrameId = requestAnimationFrame(runSmoothScroll);
            return;
        }

        if (!isHovering && !isTouching) {
            targetScroll += 0.4;
        }

        const smoothness = 0.1;
        currentScroll += (targetScroll - currentScroll) * smoothness;

        const scrollHeight = scrollerElement.scrollHeight / 2;
        if (currentScroll >= scrollHeight && scrollHeight > 0) {
            const diff = currentScroll - scrollHeight;
            currentScroll = diff;
            targetScroll = diff;
        }

        scrollerElement.scrollTop = currentScroll;
        animationFrameId = requestAnimationFrame(runSmoothScroll);
    }

    // --- Event Handlers (No changes needed here) ---
    function handleWheel(event) {
        event.preventDefault();
        targetScroll += event.deltaY;
    }
    function handleMouseEnter() {
        isHovering = true;
    }
    function handleMouseLeave() {
        isHovering = false;
    }
    function handleTouchStart(event) {
        isTouching = true;
        lastTouchY = event.touches[0].clientY;
    }
    function handleTouchMove(event) {
        if (!isTouching) return;
        const deltaY = event.touches[0].clientY - lastTouchY;
        lastTouchY = event.touches[0].clientY;
        targetScroll -= deltaY;
    }
    function handleTouchEnd() {
        isTouching = false;
    }
</script>

<main class="widget-card">
    <h1 class="widget-title">~/appreciations.log</h1>

    <!-- Conditional rendering based on fetch status -->
    {#if isLoading}
        <div class="status-message">
            <span>Loading appreciations...</span>
        </div>
    {:else if fetchError}
        <div class="status-message error">
            <span>Error: {fetchError}</span>
        </div>
    {:else if messagesToDisplay.length === 0}
        <div class="status-message">
            <span>No appreciations yet. Be the first to add one!</span>
        </div>
    {:else}
        <!-- The scroller, only shown when data is successfully loaded -->
        <div
            class="scroller"
            bind:this={scrollerElement}
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            on:wheel|preventDefault={handleWheel}
            on:touchstart|passive={handleTouchStart}
            on:touchmove|passive={handleTouchMove}
            on:touchend|passive={handleTouchEnd}
        >
            <div class="scroller-inner">
                {#each messagesToDisplay as msg, i (i)}
                    <div class="appreciation-item">
                        <p class="quote">"{msg.quote}"</p>
                        <p class="source">- {msg.source}</p>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</main>

<style>
    .widget-card {
        width: 100%;
        max-width: 900px;
        height: 80vh;
        max-height: 300px;
        background-color: rgba(22, 27, 34, 0.85);
        border: 1px solid #30363d;
        border-radius: 8px;
        padding: 2.5rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    .widget-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #88c0d0;
        margin: 0 0 1.5rem 0;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #30363d;
        flex-shrink: 0;
    }

    .widget-title::before {
        content: "$ cat ";
        color: #a3be8c;
    }

    /* New styles for loading/error messages */
    .status-message {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #d8dee9;
        font-style: italic;
    }
    .status-message.error {
        color: #bf616a;
    }

    /* Scroller styles */
    .scroller {
        height: 100%;
        overflow-y: hidden;
        position: relative;
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

    .scroller-inner {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: relative;
    }

    /* Individual appreciation item styles */
    .appreciation-item {
        border-left: 2px solid #30363d;
        padding-left: 1.5rem;
        transition: border-left-color 0.3s ease;
    }

    .appreciation-item:hover {
        border-left-color: #88c0d0;
    }

    .appreciation-item .quote {
        font-size: 1.1rem;
        font-style: italic;
        color: #d8dee9;
        margin: 0;
    }

    .appreciation-item .source {
        text-align: right;
        margin-top: 0.5rem;
        font-weight: 400;
        color: #81a1c1;
    }

    @media (max-width: 600px) {
        .widget-card {
            padding: 1.5rem;
        }
        .appreciation-item .quote {
            font-size: 1rem;
        }
    }
</style>
