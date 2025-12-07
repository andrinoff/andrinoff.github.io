<script>
    import Header from "$lib/components/Header.svelte";
    import "../app.css";
</script>

<Header />

<main>
    <slot />
</main>

<style>
    :global(body) {
        background-color: #0d1117;
        color: #c9d1d9;
        font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        margin: 0;
    }
    :global(.main-header) {
        position: sticky;
        top: 0;
        z-index: 900; /* Ensures it stays on top of page content */
    }

    main {
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
