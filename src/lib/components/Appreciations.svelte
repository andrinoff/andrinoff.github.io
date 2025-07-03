<script>
    import { onMount, onDestroy } from "svelte";

    // --- Component State ---
    let scrollerElement; // This will hold the reference to the scroller div
    let isHovering = false;
    let inactivityTimer = null;
    let animationFrameId = null;

    // State for smooth scrolling
    let currentScroll = 0;
    let targetScroll = 0;
    let lastTouchY = 0;
    let isTouching = false;

    // --- Data ---
    const appreciationMessages = [
        {
            quote: "Inspirational, dedicated. We were lucky to have him.",
            source: "Old boss (Giorgi)",
        },
        {
            quote: "I've learned more from Drew in the last year than I have in the rest of my education. His guidance is invaluable.",
            source: "A Mentee (Alexandr)",
        },
        {
            quote: "I have watched Drew grow as a developer and I can't describe, how better he became. What took me 2 years, takes him 2 months",
            source: "A Friend, Senior Fullstack Developer",
        },
        {
            quote: "Drew's vision and leadership have been the driving force behind our recent successes. An absolute pleasure to work with.",
            source: "A Grateful Colleague (Brad)",
        },
        {
            quote: "His ability to solve complex problems under short time is simply unmatched. He's the calm in the storm",
            source: "A Project Manager",
        },
        {
            quote: "Always willing to lend a hand, no matter how busy he is. A true team player.",
            source: "A colleague (Lisa)",
        },
    ];

    // Duplicate the array for a seamless infinite scroll effect
    const messagesToDisplay = [
        ...appreciationMessages,
        ...appreciationMessages,
    ];

    // --- Logic ---
    onMount(() => {
        // Start the main animation loop
        animationFrameId = requestAnimationFrame(runSmoothScroll);

        // Cleanup when the component is destroyed
        return () => {
            if (inactivityTimer) clearTimeout(inactivityTimer);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    });

    function runSmoothScroll() {
        if (!scrollerElement) {
            animationFrameId = requestAnimationFrame(runSmoothScroll);
            return;
        }

        // Auto-scroll logic: only increments the target when not paused
        if (!isHovering && !isTouching) {
            targetScroll += 0.4; // Constant speed for autoscroll
        }

        // Smooth scrolling interpolation (lerp)
        // The current scroll position smoothly "chases" the target position.
        const smoothness = 0.1; // Lower is smoother
        currentScroll += (targetScroll - currentScroll) * smoothness;

        // Seamless loop logic
        const scrollHeight = scrollerElement.scrollHeight / 2;
        if (currentScroll >= scrollHeight) {
            // When we pass the halfway point, teleport back to the start
            const diff = currentScroll - scrollHeight;
            currentScroll = diff;
            targetScroll = diff;
        }

        // Apply the final, smooth scroll position
        scrollerElement.scrollTop = currentScroll;

        // Continue the loop
        animationFrameId = requestAnimationFrame(runSmoothScroll);
    }

    // --- Event Handlers ---
    function handleWheel(event) {
        // Prevent default browser scroll to take full control
        event.preventDefault();
        // Add the wheel delta to the target scroll position
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
        // Move the target scroll in the opposite direction of the touch
        targetScroll -= deltaY;
    }

    function handleTouchEnd() {
        isTouching = false;
    }
</script>

<main class="widget-card">
    <h1 class="widget-title">~/appreciations.log</h1>
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
</main>

<style>
    /* Main container styled as a "widget" */
    .widget-card {
        width: 100%;
        max-width: 900px;
        height: 80vh;
        max-height: 400px;
        background-color: rgba(46, 52, 64, 0.75);
        border: 1px solid #4c566a;
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
        border-bottom: 1px solid #4c566a;
        flex-shrink: 0;
    }

    .widget-title::before {
        content: "$ cat ";
        color: #a3be8c;
    }

    /* Scroller styles */
    .scroller {
        height: 100%;
        /* We handle scrolling via JS, so hide the native scrollbar */
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
        /* We are now setting the position via JS */
        position: relative;
    }

    /* Individual appreciation item styles */
    .appreciation-item {
        border-left: 2px solid #4c566a;
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
