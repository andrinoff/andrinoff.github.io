<script>
    import Techstack from "$lib/components/Techstack.svelte";

    const bio = `Based in Tbilisi, Georgia 🇬🇪`;

    // Experience data (moved from about page)
    const experiences = [
        {
            title: "Fullstack Engineer",
            period: "March 2022 - September 2025",
            company: "Freelance",
            location: "Remote",
            description:
                "Freelance Full-Stack Developer specializing in building high-performance websites and scalable SaaS solutions. I partnered with startups and businesses to transform complex concepts into user-friendly, deployment-ready applications. My focus was on writing clean, maintainable code and delivering products that drive real business growth.",
        },
        {
            title: "Fullstack Engineer",
            period: "April 2025 - August 2025",
            company: "Software Development Studio",
            location: "Remote",
            description:
                "In addition to architecting and building core features for client projects, I led a team of junior developers in a fast-paced studio environment. I served as the technical anchor for the team, ensuring code quality and timely delivery.",
        },

        {
            title: "Backend Engineer",
            period: "December 2024 - April 2025",
            company: "freemoviesfull.cc",
            location: "Remote",
            description:
                "Worked on the core backend services for a distributed media streaming application. I was responsible for the architecture supporting video content delivery.",
        },
        {
            title: "Fullstack Engineer",
            period: "June 2023 - August 2024",
            company: "Software Development Studio",
            location: "Remote",
            description:
                "Specialised in building robust, high-performance applications in a fast-paced studio environment. I focused on writing clean, maintainable code and architecting scalable backend systems that integrate seamlessly with dynamic frontends.",
        },
    ];

    // UI state for experience expansion
    let expandedIndex = -1;
    function toggleExpand(index) {
        expandedIndex = expandedIndex === index ? -1 : index;
    }

    // Education progress calculation (moved from about page)
    const startDate = new Date("2024-09-01");
    const endDate = new Date("2026-06-16");
    const now = new Date();

    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsed = Math.max(0, now.getTime() - startDate.getTime());
    const progressPercent = Math.min(
        100,
        Math.round((elapsed / totalDuration) * 1000) / 10,
    ).toFixed(1);
</script>

<div class="home-page-container">
    <!-- Left Column -->
    <div class="left-column">
        <!-- Hero / Profile Card -->
        <div class="widget-card hero-card">
            <section class="profile-section">
                <img
                    src="/avatar.png"
                    alt="Drew Smirnoff's Avatar"
                    class="avatar"
                />
                <div class="profile-text">
                    <h1 class="name-heading">Drew Smirnoff</h1>
                    <p class="bio">{bio}</p>
                </div>
            </section>
        </div>

        <!-- Experience moved out of hero card -->
        <section class="widget-card experience-outside">
            <h1 class="widget-title">~/experience</h1>
            <div class="timeline">
                {#each experiences as exp, index}
                    <div
                        class="timeline-item"
                        class:expanded={expandedIndex === index}
                    >
                        <div class="timeline-connector">
                            <div class="timeline-dot"></div>
                            {#if index < experiences.length - 1}
                                <div class="timeline-line"></div>
                            {/if}
                        </div>
                        <div class="timeline-content-wrapper">
                            <button
                                class="timeline-content"
                                on:click={() => toggleExpand(index)}
                                aria-expanded={expandedIndex === index}
                            >
                                <div class="job-header">
                                    <p class="job-title">{exp.title}</p>
                                    <span
                                        class="expand-icon"
                                        class:rotated={expandedIndex === index}
                                        >▼</span
                                    >
                                </div>
                                <p class="job-period">{exp.period}</p>
                            </button>
                            {#if expandedIndex === index}
                                <div class="job-details">
                                    <div class="detail-item">
                                        <span class="detail-label"
                                            >Company:</span
                                        >
                                        <span class="detail-value"
                                            >{exp.company}</span
                                        >
                                    </div>
                                    <div class="detail-item">
                                        <span class="detail-label"
                                            >Location:</span
                                        >
                                        <span class="detail-value"
                                            >{exp.location}</span
                                        >
                                    </div>
                                    <div class="detail-item description">
                                        <span class="detail-label"
                                            >Description:</span
                                        >
                                        <p class="detail-value">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    </div>

    <!-- Right Column -->
    <div class="right-column">
        <section class="widget-card welcome-card">
            <h2 class="widget-title">~/welcome</h2>
            <p class="welcome-text">
                Hey there! 👋 I am a software engineer building scalable web
                apps and delightful user experiences. Focused on full-stack
                development, performance and architecture.
            </p>
        </section>

        <section class="widget-card tech-preview">
            <Techstack />
        </section>

        <!-- Education (moved from about page) -->
        <section class="widget-card">
            <h1 class="widget-title">~/education</h1>
            <div class="education-card">
                <div class="education-header">
                    <div class="education-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
                            />
                        </svg>
                    </div>
                    <div class="education-info">
                        <h2 class="school-name">Projector School</h2>
                        <p class="education-period">2024 - 2026 (Expected)</p>
                    </div>
                </div>
                <div class="education-progress">
                    <div class="progress-label">
                        <span>Progress</span>
                        <span class="progress-percent">{progressPercent}%</span>
                    </div>
                    <div class="progress-bar">
                        <div
                            class="progress-fill"
                            style="width: {progressPercent}%"
                        ></div>
                    </div>
                </div>
                <div class="subjects">
                    <h3 class="subjects-title">A-Level Subjects</h3>
                    <div class="subject-tags">
                        <span class="subject-tag">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="subject-icon"
                            >
                                <path
                                    d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
                                />
                            </svg>
                            Computer Science
                        </span>
                        <span class="subject-tag">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="subject-icon"
                            >
                                <path
                                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                                />
                            </svg>
                            Mathematics
                        </span>
                        <span class="subject-tag">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="subject-icon"
                            >
                                <path
                                    d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                                />
                            </svg>
                            Economics
                        </span>
                    </div>
                </div>
            </div>
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

    /* Import monospaced aesthetic */
    @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400&display=swap");

    :global(body) {
        background-size: 20px 20px;
        color: #d8dee9;
        font-family: monospace;
        margin: 0;
        min-height: 100vh;
        padding: 2rem;
    }

    .home-page-container {
        display: grid;
        grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
        align-items: start;
        gap: 2.5rem;
        width: 100%;
        max-width: 1200px;
        margin: 40px auto 0;
    }

    .left-column,
    .right-column {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        min-width: 0;
    }

    .hero-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .profile-section {
        display: flex;
        align-items: center;
        gap: 1.25rem;
    }

    .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #88c0d0;
        transition: transform 0.25s ease;
    }
    .avatar:hover {
        transform: scale(1.04) rotate(2deg);
    }

    .name-heading {
        margin: 0;
        font-size: 2.25rem;
        line-height: 1.2;
        font-weight: 700;
        color: #eceff4;
    }

    .bio {
        margin: 0.25rem 0 0 0;
        font-size: 1rem;
        color: #81a1c1;
        max-width: 48ch;
    }

    .widget-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #88c0d0;
        margin-top: 0;
        margin-bottom: 0.75rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #30363d;
    }
    .widget-title::before {
        content: "$ ";
        color: #a3be8c;
    }

    .welcome-card {
        padding: 1rem;
    }
    .welcome-text {
        margin: 0;
        color: #81a1c1;
    }

    /* Education Section */
    .education-card {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .education-header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .education-icon {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, #88c0d0, #81a1c1);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .education-icon svg {
        width: 28px;
        height: 28px;
        color: #0d1117;
    }

    .education-info {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .school-name {
        font-size: 1.1rem;
        font-weight: 700;
        color: #eceff4;
        margin: 0;
    }

    .education-period {
        font-size: 0.9rem;
        color: #81a1c1;
        margin: 0;
    }

    .education-progress {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .progress-label {
        display: flex;
        justify-content: space-between;
        font-size: 0.85rem;
        color: #d8dee9;
    }

    .progress-percent {
        color: #a3be8c;
        font-weight: 600;
    }

    .progress-bar {
        height: 8px;
        background-color: #21262d;
        border-radius: 4px;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #a3be8c, #88c0d0);
        border-radius: 4px;
        transition: width 0.5s ease;
    }

    .subjects {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .subjects-title {
        font-size: 0.9rem;
        font-weight: 600;
        color: #81a1c1;
        margin: 0;
    }

    .subject-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .subject-tag {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.4rem 0.75rem;
        background-color: rgba(136, 192, 208, 0.1);
        border: 1px solid #30363d;
        border-radius: 20px;
        font-size: 0.85rem;
        color: #d8dee9;
        transition:
            background-color 0.3s ease,
            border-color 0.3s ease,
            transform 0.2s ease;
    }

    .subject-tag:hover {
        background-color: rgba(136, 192, 208, 0.2);
        border-color: #88c0d0;
        transform: translateY(-2px);
    }

    .subject-icon {
        width: 14px;
        height: 14px;
        color: #88c0d0;
    }

    /* Timeline Styles */
    .timeline {
        display: flex;
        flex-direction: column;
    }
    .timeline-item {
        display: flex;
        align-items: stretch;
        gap: 1.5rem;
    }
    .timeline-connector {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4px;
    }
    .timeline-dot {
        width: 16px;
        height: 16px;
        background-color: #88c0d0;
        border-radius: 50%;
        flex-shrink: 0;
        border: 2px solid #0d1117;
        transition:
            background-color 0.3s ease,
            transform 0.3s ease;
        z-index: 1;
    }
    .timeline-item.expanded .timeline-dot {
        background-color: #a3be8c;
        transform: scale(1.2);
    }
    .timeline-line {
        width: 2px;
        background-color: #30363d;
        flex-grow: 1;
    }

    .timeline-content-wrapper {
        flex: 1;
        padding-bottom: 1rem;
    }

    .timeline-content {
        width: 100%;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 8px;
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        text-align: left;
        transition:
            background-color 0.3s ease,
            border-color 0.3s ease;
    }
    .timeline-content:hover {
        background-color: rgba(136, 192, 208, 0.08);
        border-color: #30363d;
    }
    .timeline-item.expanded .timeline-content {
        background-color: rgba(136, 192, 208, 0.15);
        border-color: #88c0d0;
    }

    .job-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .job-title {
        font-size: 1.1rem;
        font-weight: 700;
        color: #eceff4;
        margin: 0;
    }
    .job-period {
        font-size: 1rem;
        color: #81a1c1;
        margin: 0.25rem 0 0 0;
    }

    .expand-icon {
        font-size: 0.75rem;
        color: #81a1c1;
        transition:
            transform 0.3s ease,
            color 0.3s ease;
    }
    .expand-icon.rotated {
        transform: rotate(180deg);
        color: #88c0d0;
    }

    .job-details {
        margin-top: 1rem;
        padding: 1rem;
        background-color: rgba(22, 27, 34, 0.9);
        border: 1px solid #30363d;
        border-radius: 8px;
        animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .detail-item {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
    }
    .detail-item:last-child {
        margin-bottom: 0;
    }
    .detail-item.description {
        flex-direction: column;
        gap: 0.25 rem;
    }

    .detail-label {
        font-size: 0.9rem;
        font-weight: 600;
        color: #88c0d0;
        white-space: nowrap;
    }
    .detail-value {
        font-size: 0.95rem;
        color: #d8dee9;
        margin: 0;
        line-height: 1.5;
    }

    /* Social Links */
    .socials-container {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }
    .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #d8dee9;
        text-decoration: none;
        padding: 0.6rem;
        border-radius: 8px;
        border: 1px solid transparent;
        transition:
            background-color 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease,
            transform 0.2s ease;
    }
    .social-link:hover {
        background-color: rgba(136, 192, 208, 0.1);
        border-color: #30363d;
        color: #88c0d0;
        transform: translateY(-2px);
    }
    .social-icon {
        width: 24px;
        height: 24px;
    }

    /* Widgets moved from home should blend with the rest */
    .widget-card :global(.mastodon-post),
    .widget-card :global(.sponsor),
    .widget-card :global(.github-commits) {
        margin-top: 0.25rem;
    }

    /* Responsive */
    @media (max-width: 1024px) {
        .home-page-container {
            grid-template-columns: 1fr;
        }
    }
    @media (max-width: 768px) {
        .profile-section {
            flex-direction: column;
            text-align: center;
        }
        .name-heading {
            font-size: 2rem;
        }
        .social-links {
            justify-content: center;
        }
    }
</style>
