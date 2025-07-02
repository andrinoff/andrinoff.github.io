<script>
    import Link from "./link.svelte";
    import { browser } from "$app/environment";

    // State to control the visibility of the mobile menu
    let isMenuOpen = false;
    // State to track scroll position
    let scrolled = false;

    // Function to toggle the menu state
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    // Function to close the menu, useful for when a link is clicked
    function closeMenu() {
        isMenuOpen = false;
    }

    // This reactive statement adds/removes a 'no-scroll' class to the body
    // when the menu opens/closes. This is a robust way to prevent the page
    // from scrolling when the mobile menu is active.
    $: if (browser) {
        if (isMenuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }

    // A11Y Fix: Function to handle keyboard events for accessibility.
    function handleKeydown(event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    }
</script>

<svelte:window
    on:scroll={() => (scrolled = window.scrollY > 10)}
    on:keydown={handleKeydown}
/>

<header class="main-header" class:scrolled>
    <div class="header-container">
        <nav class="desktop-nav">
            <Link
                on:click={closeMenu}
                link="/"
                text="Home"
                logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/4c0390f6c9a91b83f3ae6da9d5b5a75181472fd0_home_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
            />
            <Link
                on:click={closeMenu}
                link="/aboutme"
                text="About"
                logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/978be0e162f6aebd63c1237006f065030a90264e_person_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
            />
            <Link
                on:click={closeMenu}
                link="/projects"
                text="Projects"
                logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/7b8b6bf02ed987b0e68ce5c2814ea408d666caf5_folder_code_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
            />
            <Link
                on:click={closeMenu}
                link="https://github.com/andrinoff"
                text="Github"
                logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/f202b6faccfd5cc46299b976c2635fee60b55aa0_github-mark-white.svg"
            />
        </nav>

        <button
            class="hamburger-btn"
            on:click={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
        >
            <span class="hamburger-icon" class:is-open={isMenuOpen}>
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span>
            </span>
        </button>
    </div>

    <div
        class="mobile-nav-overlay"
        class:is-open={isMenuOpen}
        on:click={closeMenu}
        role="button"
        tabindex="-1"
        on:keydown={(e) => e.key === "Enter" && closeMenu()}
    >
        <nav class="mobile-nav" on:click|stopPropagation>
            <Link
                on:click={closeMenu}
                link="/"
                text="Home"
                logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/4c0390f6c9a91b83f3ae6da9d5b5a75181472fd0_home_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
            />
            <Link
                on:click={closeMenu}
                link="/aboutme"
                text="About"
                logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/978be0e162f6aebd63c1237006f065030a90264e_person_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
            />
            <Link
                on:click={closeMenu}
                link="/projects"
                text="Projects"
                logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/7b8b6bf02ed987b0e68ce5c2814ea408d666caf5_folder_code_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
            />
            <Link
                on:click={closeMenu}
                link="https://github.com/andrinoff"
                text="Github"
                logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/f202b6faccfd5cc46299b976c2635fee60b55aa0_github-mark-white.svg"
            />
        </nav>
    </div>
</header>

<style>
    /* Prevents the page from scrolling when the mobile menu is open */
    :global(body.no-scroll) {
        overflow: hidden;
    }

    .main-header {
        position: sticky;
        top: 0;
        z-index: 900;
        background-color: transparent;
        border-bottom: 1px solid transparent;
        transition:
            background-color 0.3s ease,
            border-color 0.3s ease,
            backdrop-filter 0.3s ease;
    }

    .header-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 1rem 2rem;
        position: relative;
    }

    .desktop-nav {
        display: none;
        justify-content: space-evenly;
        width: 100%;
        max-width: 600px;
    }

    .hamburger-btn {
        display: block;
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1001;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
    }

    .hamburger-icon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 24px;
        height: 18px;
    }

    .line {
        display: block;
        width: 100%;
        height: 2px;
        background-color: #c9d1d9;
        border-radius: 2px;
        transition:
            transform 0.3s ease-in-out,
            opacity 0.3s ease-in-out;
    }

    .hamburger-icon.is-open .line-1 {
        transform: translateY(8px) rotate(45deg);
    }
    .hamburger-icon.is-open .line-2 {
        opacity: 0;
    }
    .hamburger-icon.is-open .line-3 {
        transform: translateY(-8px) rotate(-45deg);
    }

    .mobile-nav-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(13, 17, 23, 0.7);
        backdrop-filter: blur(5px);
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition:
            opacity 0.3s ease,
            visibility 0.3s ease,
            background-color 0.3s ease;
    }
    .mobile-nav-overlay.is-open {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    .mobile-nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 300px;
        height: 100%;
        background-color: #161b22;
        border-left: 1px solid #30363d;
        z-index: 1000;
        padding: 6rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .mobile-nav-overlay.is-open .mobile-nav {
        right: 0;
    }

    @media screen and (min-width: 800px) {
        .header-container {
            justify-content: center;
        }

        .desktop-nav {
            display: flex;
        }
        .hamburger-btn {
            display: none;
        }
    }

    @media screen and (max-width: 799px) {
        .header-container {
            justify-content: flex-end;
        }
    }
</style>
