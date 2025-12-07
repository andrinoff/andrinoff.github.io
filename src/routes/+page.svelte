<script>
    import Clock from "$lib/components/Clock.svelte";
    import Sponsor from "$lib/components/Sponsor.svelte";
    import GitHubCommits from "$lib/components/GitHubCommits.svelte";
    import MastodonPost from "$lib/components/MastodonPost.svelte";
</script>

<div class="home-page-container">
    <!-- Left Column -->
    <div class="left-column">
        <!-- "Master" Pane - The main profile widget -->
        <div class="widget-card hero-card">
            <section class="profile-section">
                <img
                    src="/avatar.png"
                    alt="Drew Smirnoff's Avatar"
                    class="avatar"
                />
                <div class="profile-text">
                    <h1 class="name-heading">Drew Smirnoff</h1>
                    <p class="bio">Software Engineer</p>
                </div>
            </section>

            <hr class="card-divider" />

            <section class="dashboard-section">
                <div class="clock-widget">
                    <Clock />
                </div>
            </section>
        </div>

        <!-- GitHub Commits Section -->
        <section class="widget-card commits-section">
            <h2 class="widget-title">~/github/commits</h2>
            <GitHubCommits />
        </section>
    </div>

    <!-- Right Column -->
    <div class="right-column">
        <!-- Mastodon Post Section -->
        <section class="widget-card mastodon-section">
            <h2 class="widget-title">~/mastodon/latest</h2>
            <MastodonPost />
        </section>

        <section class="widget-card sponsor-section">
            <h2 class="widget-title">~/sponsor</h2>
            <Sponsor />
        </section>
    </div>
</div>

<style>
    :global(html) {
        box-sizing: border-box;
    }

    :global(*, *::before, *::after) {
        box-sizing: inherit;
    }

    /* Import a monospaced font for the "riced" look */
    @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400&display=swap");

    /* Global Styles - Inspired by Nord color palette */
    :global(body) {
        background-size: 20px 20px;
        color: #d8dee9; /* Light gray-blue text */
        font-family: monospace;
        margin: 0;
        min-height: 100vh;
        padding: 2rem;
    }

    /* Hyprland-style Tiling Layout Container */
    .home-page-container {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); /* Left column slightly smaller */
        align-items: start;
        gap: 2.5rem; /* The "gap" between tiled windows */
        width: 100%;
        max-width: 1200px;
        margin: 40px auto 0;
    }

    .left-column {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        min-width: 0;
    }

    .right-column {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        min-width: 0;
    }

    .hero-card {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .commits-section {
        overflow: hidden;
    }

    .profile-section {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #88c0d0; /* Accent color border */
        transition: transform 0.3s ease;
    }

    .avatar:hover {
        transform: scale(1.05) rotate(3deg);
    }

    .name-heading {
        margin: 0;
        font-size: 2.75rem;
        line-height: 1.2;
        font-weight: 700;
        color: #eceff4; /* Brighter white for main headings */
    }

    .bio {
        margin: 0.25rem 0 0 0;
        font-size: 1.1rem;
        color: #81a1c1; /* Lighter blue for subtext */
    }

    .divider {
        color: #4c566a;
        margin: 0 0.5rem;
    }

    .card-divider {
        border: none;
        height: 1px;
        background-color: #30363d;
        width: 100%;
    }

    /* Dashboard Section: Clock */
    .dashboard-section {
        display: grid;
        align-items: stretch;
    }

    .clock-widget {
        padding: 1rem;
        display: flex;
        justify-content: left;
        align-items: left;
    }

    /* Nav, Social & Contact Section Styles */
    .nav-widget,
    .social-widget,
    :global(.contact-section) {
        animation: floatIn 0.8s ease-out 0.2s;
        animation-fill-mode: backwards;
    }

    .widget-title,
    :global(.contact-title) {
        font-size: 1.5rem;
        font-weight: 700;
        color: #88c0d0; /* Accent color for titles */
        margin-top: 0;
        margin-bottom: 1.5rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #30363d;
        width: 100%;
        display: block;
    }
    /* Add a little shell prompt character to the title */
    .widget-title::before {
        content: "$ ";
        color: #a3be8c; /* Green for prompt */
    }

    /* Navigation Widget Styles */
    .nav-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .nav-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem 1rem;
        border-radius: 6px;
        text-decoration: none;
        color: #d8dee9;
        background-color: transparent;
        transition:
            background-color 0.2s ease,
            color 0.2s ease;
        border: 1px solid transparent;
    }

    .nav-link:hover {
        background-color: rgba(
            136,
            192,
            208,
            0.08
        ); /* Accent color, very transparent */
        color: #eceff4;
        border-color: #88c0d0;
    }

    .nav-link img {
        width: 24px;
        height: 24px;
    }
    .sponsor-section {
        display: flex;
        flex-direction: column;
        align-items: stretch; /* Allow title to be full-width */
        justify-content: flex-start;
    }
    :global(.sponsor-section a) {
        display: block;
        transition: transform 0.3s ease;
    }

    :global(.sponsor-section a:hover) {
        transform: scale(1.05); /* Adds a slight zoom effect on hover */
    }

    :global(.sponsor-section img) {
        max-width: 100%; /* Ensures the image is responsive */
        height: auto;
        display: block;
    }
    /* Social Links Widget Styles */
    .social-links {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 1rem;
    }

    .social-link {
        position: relative;
        display: flex;
    }

    .social-link-image {
        width: 32px;
        height: 32px;
        transition: all 0.2s ease-out;
        opacity: 0.7;
    }

    .social-link:hover .social-link-image {
        transform: scale(1.2);
        filter: drop-shadow(0 0 8px #88c0d0); /* Accent color glow on hover */
        opacity: 1;
    }

    /* --- Responsive Styles --- */
    @media (max-width: 1024px) {
        /* Stack the columns on smaller screens */
        .home-page-container {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 768px) {
        :global(.widget-card) {
            padding: 2rem;
        }

        .profile-section {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
        }

        .name-heading {
            font-size: 2.25rem;
        }
    }

    @media (max-width: 600px) {
        :global(body) {
            padding: 1rem;
        }
        :global(.widget-card) {
            padding: 1.5rem;
        }
        .social-links {
            justify-content: space-between;
        }
        .avatar {
            width: 100px;
            height: 100px;
        }
    }
</style>
