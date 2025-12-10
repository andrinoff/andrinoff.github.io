<script>
    import Link from "./link.svelte";
    import { browser } from "$app/environment";
    import { onMount, onDestroy } from "svelte";

    const Mail = () => {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>`;
    };

    let isMenuOpen = false;
    let scrolled = false;

    // Time string (Tbilisi / Georgia)
    let time = "";

    // timer handles for syncing to minute boundary
    let minuteTimeout;
    let minuteInterval;

    function formatTbilisi(d = new Date()) {
        try {
            return new Intl.DateTimeFormat([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone: "Asia/Tbilisi",
            }).format(d);
        } catch (e) {
            // fallback if timezone unsupported
            return d.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });
        }
    }

    function updateTime() {
        time = formatTbilisi(new Date());
    }

    onMount(() => {
        if (!browser) return;

        // show immediately
        updateTime();

        // compute ms until next minute boundary
        const now = new Date();
        const msUntilNextMinute =
            (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

        // schedule first tick at the minute boundary, then every 60s
        minuteTimeout = setTimeout(() => {
            updateTime();
            minuteInterval = setInterval(updateTime, 60_000);
        }, msUntilNextMinute);

        // Safety: if msUntilNextMinute is 0 (exact boundary), start interval immediately
        if (msUntilNextMinute === 0) {
            minuteInterval = setInterval(updateTime, 60_000);
        }
    });

    onDestroy(() => {
        if (minuteTimeout) clearTimeout(minuteTimeout);
        if (minuteInterval) clearInterval(minuteInterval);
    });

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    $: if (browser) {
        if (isMenuOpen) document.body.classList.add("no-scroll");
        else document.body.classList.remove("no-scroll");
    }

    function handleKeydown(e) {
        if (e.key === "Escape") closeMenu();
    }
</script>

<svelte:window
    on:scroll={() => (scrolled = window.scrollY > 10)}
    on:keydown={handleKeydown}
/>

<header class="main-header" class:scrolled>
    <div class="header-container">
        <nav class="desktop-nav" aria-label="Primary">
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
                link="/contact"
                text="Contact"
                logo="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23c9d1d9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7'/><rect x='2' y='4' width='20' height='16' rx='2'/></svg>"
            />
            <Link
                on:click={closeMenu}
                link="https://github.com/andrinoff"
                text="Github"
                logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/f202b6faccfd5cc46299b976c2635fee60b55aa0_github-mark-white.svg"
            />
        </nav>

        <!-- Tbilisi time (HH:MM, 24h) then Georgia flag to the right -->
        <div
            class="header-time"
            aria-hidden="true"
            title="Tbilisi time (Asia/Tbilisi)"
        >
            <span class="header-time-text">{time}</span>
            <span class="header-flag" aria-hidden="true" title="Georgia flag">
                <!-- Georgia flag (SVG) - decorative -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="14"
                    viewBox="0 0 60 40"
                    role="img"
                    focusable="false"
                    aria-hidden="true"
                >
                    <rect width="60" height="40" fill="#ffffff" />
                    <g fill="#d90000">
                        <!-- central cross -->
                        <rect x="26" y="0" width="8" height="40" />
                        <rect x="0" y="16" width="60" height="8" />
                        <!-- four Bolnuri crosses (stylised) -->
                        <g transform="translate(6,5) scale(0.9)">
                            <path d="M5 0h2v2h2v2H7v2H5v-2H3V2h2z" />
                        </g>
                        <g transform="translate(46,5) scale(0.9)">
                            <path d="M5 0h2v2h2v2H7v2H5v-2H3V2h2z" />
                        </g>
                        <g transform="translate(6,27) scale(0.9)">
                            <path d="M5 0h2v2h2v2H7v2H5v-2H3V2h2z" />
                        </g>
                        <g transform="translate(46,27) scale(0.9)">
                            <path d="M5 0h2v2h2v2H7v2H5v-2H3V2h2z" />
                        </g>
                    </g>
                </svg>
            </span>
        </div>

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
        <nav
            class="mobile-nav"
            on:click|stopPropagation
            aria-label="Mobile Primary"
        >
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
                link="/contact"
                text="Contact"
                logo="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23c9d1d9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7'/><rect x='2' y='4' width='20' height='16' rx='2'/></svg>"
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
            background-color 0.28s ease,
            border-color 0.28s ease,
            backdrop-filter 0.28s ease;
    }
    .main-header.scrolled {
        background-color: rgba(13, 17, 23, 0.75);
    }

    .header-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 1rem 2rem;
        position: relative;
        gap: 1rem;
    }

    .desktop-nav {
        display: none;
        justify-content: space-evenly;
        width: 100%;
        max-width: 700px;
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
        padding: 8px;
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
            transform 0.28s ease,
            opacity 0.28s ease;
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
            opacity 0.28s ease,
            visibility 0.28s ease;
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
        background-color: #0d1117;
        border-left: 1px solid #21262d;
        z-index: 1000;
        padding: 6rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        transition: right 0.36s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .mobile-nav-overlay.is-open .mobile-nav {
        right: 0;
    }

    @media (min-width: 800px) {
        .header-container {
            justify-content: center;
        }
        .desktop-nav {
            display: flex;
        }
        .hamburger-btn {
            display: none;
        }

        /* time positioned on the right; time text first, flag to the right */
        .header-time {
            position: absolute;
            right: 2.5rem;
            top: 50%;
            transform: translateY(-50%);
            color: #c9d1d9;
            font-family: monospace;
            font-size: 0.95rem;
            letter-spacing: 0.02em;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .header-time-text {
            font-variant-numeric: tabular-nums;
        }
        .header-flag svg {
            display: block;
            border-radius: 2px;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08) inset;
        }
    }

    @media (max-width: 799px) {
        .header-container {
            justify-content: center;
        }

        .header-time {
            position: absolute;
            left: 50%;
            right: auto;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #c9d1d9;
            font-family: monospace;
            font-size: 0.95rem;
            display: flex;
            align-items: center;
            gap: 0.35rem;
        }
        .header-flag svg {
            width: 18px;
            height: 12px;
        }
        .header-time-text {
            font-variant-numeric: tabular-nums;
        }
    }
</style>
