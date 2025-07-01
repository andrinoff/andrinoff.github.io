<script>
    import { onMount } from "svelte";
    import Clock from "$lib/components/clock.svelte";
    import Contact from "$lib/components/Contact.svelte";
</script>

<div class="home-page-container">
    <!-- Hero Card: Contains profile info, clock, and social links -->
    <div class="hero-card">
        <section class="profile-section">
            <img
                src="https://tbilisi.hackclub.com/drew/avatar.png"
                alt="Drew Smirnoff's Avatar"
                class="avatar"
            />
            <div class="profile-text">
                <h1 class="name-heading">Drew Smirnoff</h1>
                <p class="bio">
                    Full stack developer <span class="divider">|</span> Based in
                    Tbilisi
                </p>
            </div>
        </section>

        <hr class="card-divider" />

        <section class="dashboard-section">
            <Clock />
            <!-- Social Links Area -->
            <div class="links-wrapper">
                <div class="link-grid">
                    <a
                        href="https://linkedin.com/in/andrinoff"
                        class="custom-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://img.icons8.com/m_rounded/512/5E5F60/linkedin--v2.png"
                            alt="LinkedIn"
                            class="custom-link-image"
                        />
                    </a>
                    <a href="mailto:business@andrinoff.com" class="custom-link">
                        <img
                            src="https://cdn.simpleicons.org/gmail/gray"
                            alt="Email"
                            class="custom-link-image"
                        />
                    </a>
                    <a
                        href="https://t.me/andrinoff"
                        class="custom-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://cdn.simpleicons.org/telegram/gray"
                            alt="Telegram"
                            class="custom-link-image"
                        />
                    </a>
                    <a
                        href="https://instagram.com/andrinoff.dev"
                        class="custom-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://cdn.simpleicons.org/instagram/gray"
                            alt="Instagram"
                            class="custom-link-image"
                        />
                    </a>
                </div>
            </div>
        </section>
    </div>

    <!-- Biography Section -->
    <section class="biography-section">
        <h2 class="biography-title">Biography</h2>
        <div class="biography-content">
            <p>
                Hello, everyone! My journey into technology began at the young
                age of 6, sparked by an interest in robotics and simple
                programs. With my father also being a programmer, I was
                fortunate to always have guidance when I needed it.
            </p>
            <p>
                By 5th grade, my curiosity led me to web development. From 6th
                to 10th grade, I progressively dove deeper into backend
                development, building over a hundred websites in the process.
                Beyond the world of code, I'm passionate about music and sports.
                I often perform as a lead guitarist in rock and metal bands, and
                occasionally, I take the stage as a vocalist.
            </p>
        </div>
    </section>
    <Contact></Contact>
</div>

<style>
    /* Global Styles */
    :global(body) {
        background-color: #0d1117;
        color: #c9d1d9;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        margin: 0;

        min-height: 100vh;
        padding: 2rem;
    }

    .home-page-container {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 3rem;
    }

    /* Hero Card Styles */
    .hero-card {
        width: 100%;
        max-width: 900px;
        background-color: #161b22;
        border: 1px solid #30363d;
        border-radius: 24px;
        padding: 2.5rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        animation: floatIn 0.8s ease-out;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    @keyframes floatIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
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
        border: 3px solid #30363d;
        transition: transform 0.3s ease;
    }

    .avatar:hover {
        transform: scale(1.05) rotate(3deg);
    }

    .name-heading {
        margin: 0;
        font-size: 2.75rem;
        line-height: 1.2;
        font-weight: 600;
    }

    .bio {
        margin: 0.25rem 0 0 0;
        font-size: 1.1rem;
        color: #8b949e;
    }

    .divider {
        color: #484f58;
        margin: 0 0.5rem;
    }

    .card-divider {
        border: none;
        height: 1px;
        background-color: #30363d;
        width: 100%;
    }

    /* Dashboard Section: Clock and Links */
    .dashboard-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
        align-items: center;
    }

    /* Clock Styles */
    .clock-container {
        background: #0d1117;
        border-radius: 20px;
        padding: 1.5rem 2rem;
        text-align: center;
        border: 1px solid #30363d;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .tbilisi-text {
        font-size: 0.9rem;
        color: #8b949e;
        letter-spacing: 0.1em;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }

    .clock-display {
        font-size: 2.5rem;
        color: #c9d1d9;
        font-weight: 600;
    }

    /* Links Styles (iOS-like grid) */
    .links-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0d1117;
        border: 1px solid #30363d;
        border-radius: 20px;
        padding: 2rem;
        height: 100%;
    }

    .link-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .custom-link {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .custom-link-image {
        width: 50px;
        height: 50px;
        transition: transform 0.2s ease-out;
        filter: grayscale(100%);
        opacity: 0.7;
    }

    .custom-link:hover .custom-link-image {
        transform: scale(1.1);
        filter: grayscale(0%);
        opacity: 1;
    }

    /* Biography Section Styles */
    .biography-section {
        width: 100%;
        max-width: 900px;
        background-color: #161b22;
        border: 1px solid #30363d;
        border-radius: 24px;
        padding: 2.5rem;
        animation: floatIn 0.8s ease-out 0.2s;
        animation-fill-mode: backwards;
    }

    .biography-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: #c9d1d9;
        margin-top: 0;
        margin-bottom: 1.5rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #30363d;
    }

    .biography-content {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #8b949e;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .biography-content p {
        margin: 0;
    }

    /* --- Responsive Styles --- */

    @media (max-width: 900px) {
        .dashboard-section {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .clock-container {
            padding: 1.5rem;
        }

        /* On smaller screens, links become a row */
        .link-grid {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
            gap: 1rem;
        }
        .links-wrapper {
            padding: 1rem;
        }
    }

    @media (max-width: 768px) {
        .hero-card,
        .biography-section {
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
        .hero-card,
        .biography-section {
            padding: 1.5rem;
        }

        .avatar {
            width: 100px;
            height: 100px;
        }
    }
</style>
