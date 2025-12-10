<script lang="ts">
    import Techstack from "$lib/components/Techstack.svelte";
    import Appreciations from "$lib/components/Appreciations.svelte";
    import MastodonPost from "$lib/components/MastodonPost.svelte";
    import Sponsor from "$lib/components/Sponsor.svelte";
    import GitHubCommits from "$lib/components/GitHubCommits.svelte";

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

    let expandedIndex = -1;

    // Calculate education progress
    const startDate = new Date("2024-09-01");
    const endDate = new Date("2026-06-16");
    const now = new Date();

    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsed = Math.max(0, now.getTime() - startDate.getTime());
    const progressPercent = Math.min(
        100,
        Math.round((elapsed / totalDuration) * 1000) / 10,
    ).toFixed(1);

    function toggleExpand(index: number) {
        if (expandedIndex === index) {
            expandedIndex = -1;
        } else {
            expandedIndex = index;
        }
    }
</script>

<div class="about-page-container">
    <!-- Main Content Column -->
    <div class="main-content">
        <section class="widget-card">
            <h1 class="widget-title">~/mastodon/latest</h1>
            <MastodonPost />
        </section>
        <section class="widget-card">
            <h1 class="widget-title">~/sponsor</h1>
            <Sponsor />
        </section>
    </div>

    <!-- Sidebar Column -->
    <div class="sidebar">
        <Appreciations></Appreciations>

        <section class="widget-card">
            <h1 class="widget-title">~/github/commits</h1>
            <GitHubCommits />
        </section>
    </div>
</div>

<style>
    .about-page-container {
        display: grid;
        grid-template-columns: 2fr 1fr; /* Main content and sidebar */
        gap: 2rem;
        width: 100%;
        max-width: 1200px;
        align-items: start;
    }

    .main-content,
    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

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

    /* Responsive Styles */
    @media (max-width: 900px) {
        .about-page-container {
            grid-template-columns: 1fr; /* Stack columns on smaller screens */
        }
    }
</style>
